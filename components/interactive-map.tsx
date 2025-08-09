"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Phone, Mail } from 'lucide-react';
import { CountyData, getCountyColor, groupDataByCounty } from '@/lib/excel-parser';
import { parsePCOExcelFile } from '@/lib/parse-pco-data';

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then(mod => mod.CircleMarker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface InteractiveMapProps {
  onCountySelect?: (county: string, data: CountyData[]) => void;
}

export default function InteractiveMap({ onCountySelect }: InteractiveMapProps) {
  const [countyData, setCountyData] = useState<CountyData[]>([]);
  const [groupedData, setGroupedData] = useState<Record<string, CountyData[]>>({});
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        // Parse the actual Excel file data
        const data = await parsePCOExcelFile();
        
        setCountyData(data);
        setGroupedData(groupDataByCounty(data));
        setError(null);
      } catch (err) {
        setError('Failed to load county data');
        console.error('Error loading data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleCountyClick = (county: string, data: CountyData[]) => {
    setSelectedCounty(county);
    onCountySelect?.(county, data);
  };

  if (isLoading) {
    return (
      <Card className="w-full h-96">
        <CardContent className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-wa-green-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading county data...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full h-96">
        <CardContent className="flex items-center justify-center h-full">
          <div className="text-center text-red-600">
            <MapPin className="h-8 w-8 mx-auto mb-4" />
            <p>{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Map Container */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Washington State PCO Map
          </CardTitle>
          <p className="text-sm text-slate-600">
            Click on county markers to view PCO information. Red = Republican, Blue = Democratic
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-96 w-full rounded-lg overflow-hidden border">
            <MapContainer
              center={[47.3511, -120.7401]} // Center of Washington State
              zoom={7}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {Object.entries(groupedData).map(([county, data]) => {
                const primaryData = data[0]; // Use first entry for coordinates
                if (!primaryData.coordinates) return null;
                
                // Determine dominant party for county color
                const republicanCount = data.filter(d => d.party === 'Republican').length;
                const democraticCount = data.filter(d => d.party === 'Democratic').length;
                const dominantParty = republicanCount > democraticCount ? 'Republican' : 'Democratic';
                
                return (
                  <CircleMarker
                    key={county}
                    center={[primaryData.coordinates.lat, primaryData.coordinates.lng]}
                    radius={Math.max(8, Math.min(20, data.length * 3))} // Size based on PCO count
                    fillColor={getCountyColor(dominantParty)}
                    color="#ffffff"
                    weight={2}
                    opacity={1}
                    fillOpacity={0.7}
                    eventHandlers={{
                      click: () => handleCountyClick(county, data)
                    }}
                  >
                    <Popup>
                      <div className="p-2 min-w-48">
                        <h3 className="font-bold text-lg mb-2">{county} County</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Total PCOs:</span>
                            <Badge variant="outline">{data.length}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Republican:</span>
                            <Badge className="bg-red-100 text-red-800">{republicanCount}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Democratic:</span>
                            <Badge className="bg-blue-100 text-blue-800">{democraticCount}</Badge>
                          </div>
                        </div>
                        <div className="mt-3 pt-2 border-t">
                          <p className="text-xs text-slate-500">Click marker for detailed view</p>
                        </div>
                      </div>
                    </Popup>
                  </CircleMarker>
                );
              })}
            </MapContainer>
          </div>
        </CardContent>
      </Card>

      {/* Selected County Details */}
      {selectedCounty && groupedData[selectedCounty] && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              {selectedCounty} County PCO Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {groupedData[selectedCounty].map((pco, index) => (
                <Card key={index} className="border-l-4" style={{ borderLeftColor: getCountyColor(pco.party) }}>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{pco.pcoName || 'Vacant'}</h4>
                        <Badge 
                          className={pco.party === 'Republican' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}
                        >
                          {pco.party}
                        </Badge>
                      </div>
                      
                      {pco.precinct && (
                        <div className="flex items-center text-sm text-slate-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          {pco.precinct}
                        </div>
                      )}
                      
                      {pco.contactInfo && (
                        <div className="flex items-center text-sm text-slate-600">
                          {pco.contactInfo.includes('@') ? (
                            <Mail className="h-4 w-4 mr-1" />
                          ) : (
                            <Phone className="h-4 w-4 mr-1" />
                          )}
                          {pco.contactInfo}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Legend */}
      <Card className="w-full">
        <CardContent className="p-4">
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-red-600 mr-2"></div>
              <span className="text-sm">Republican Majority</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-blue-600 mr-2"></div>
              <span className="text-sm">Democratic Majority</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gray-500 mr-2"></div>
              <span className="text-sm">Unknown/Mixed</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
