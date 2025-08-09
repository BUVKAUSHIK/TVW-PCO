import * as XLSX from 'xlsx';

export interface CountyData {
  county: string;
  precinct?: string;
  party: 'Republican' | 'Democratic' | 'Unknown';
  pcoName: string;
  phone: string;
  email: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Washington State county coordinates (approximate centers)
const COUNTY_COORDINATES: Record<string, { lat: number; lng: number }> = {
  'Adams': { lat: 46.9829, lng: -118.5556 },
  'Asotin': { lat: 46.3396, lng: -117.2023 },
  'Benton': { lat: 46.2632, lng: -119.2714 },
  'Chelan': { lat: 47.8021, lng: -120.4472 },
  'Clallam': { lat: 48.0506, lng: -123.7649 },
  'Clark': { lat: 45.7466, lng: -122.5194 },
  'Columbia': { lat: 46.2979, lng: -117.8857 },
  'Cowlitz': { lat: 46.1929, lng: -122.9015 },
  'Douglas': { lat: 47.5232, lng: -119.9067 },
  'Ferry': { lat: 48.6168, lng: -118.7818 },
  'Franklin': { lat: 46.4346, lng: -118.9067 },
  'Garfield': { lat: 46.4346, lng: -117.6457 },
  'Grant': { lat: 47.2073, lng: -119.2714 },
  'Grays Harbor': { lat: 47.0379, lng: -123.8157 },
  'Island': { lat: 48.2266, lng: -122.6746 },
  'Jefferson': { lat: 47.7511, lng: -123.0351 },
  'King': { lat: 47.5480, lng: -121.9836 },
  'Kitsap': { lat: 47.6587, lng: -122.6746 },
  'Kittitas': { lat: 47.1679, lng: -120.9326 },
  'Klickitat': { lat: 45.8706, lng: -121.1081 },
  'Lewis': { lat: 46.5197, lng: -122.4015 },
  'Lincoln': { lat: 47.5232, lng: -118.3815 },
  'Mason': { lat: 47.3179, lng: -123.1351 },
  'Okanogan': { lat: 48.3668, lng: -119.5067 },
  'Pacific': { lat: 46.6197, lng: -123.9157 },
  'Pend Oreille': { lat: 48.6668, lng: -117.2857 },
  'Pierce': { lat: 47.0379, lng: -122.1015 },
  'San Juan': { lat: 48.5266, lng: -123.0746 },
  'Skagit': { lat: 48.4266, lng: -121.5746 },
  'Skamania': { lat: 45.9706, lng: -121.9081 },
  'Snohomish': { lat: 48.0266, lng: -121.7746 },
  'Spokane': { lat: 47.6587, lng: -117.4260 },
  'Stevens': { lat: 48.3668, lng: -117.5857 },
  'Thurston': { lat: 47.0379, lng: -122.9015 },
  'Wahkiakum': { lat: 46.2929, lng: -123.4157 },
  'Walla Walla': { lat: 46.0646, lng: -118.3430 },
  'Whatcom': { lat: 48.7266, lng: -121.8746 },
  'Whitman': { lat: 46.7646, lng: -117.5260 },
  'Yakima': { lat: 46.6021, lng: -120.5326 }
};

export async function parseExcelFile(filePath: string): Promise<CountyData[]> {
  try {
    // Read the Excel file
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
    const countyData: CountyData[] = [];
    
    jsonData.forEach((row: any) => {
      // Extract county information - adjust these field names based on your Excel structure
      const county = row['County'] || row['COUNTY'] || row['county'] || '';
      const precinct = row['Precinct'] || row['PRECINCT'] || row['precinct'] || '';
      const pcoName = row['PCO Name'] || row['Name'] || row['name'] || '';
      const party = row['Party'] || row['PARTY'] || row['party'] || '';
      const phone = row['Phone'] || row['phone'] || '';
      const email = row['Email'] || row['email'] || '';
      
      // Determine party affiliation
      let partyType: 'Republican' | 'Democratic' | 'Unknown' = 'Unknown';
      if (party.toLowerCase().includes('republican') || party.toLowerCase().includes('rep')) {
        partyType = 'Republican';
      } else if (party.toLowerCase().includes('democratic') || party.toLowerCase().includes('dem')) {
        partyType = 'Democratic';
      }
      
      // Get coordinates for the county
      const coordinates = COUNTY_COORDINATES[county] || null;
      
      if (county) {
        countyData.push({
          county,
          precinct,
          party: partyType,
          pcoName,
          phone,
          email,
          coordinates: coordinates || undefined
        });
      }
    });
    
    return countyData;
  } catch (error) {
    console.error('Error parsing Excel file:', error);
    return [];
  }
}

export function getCountyColor(party: 'Republican' | 'Democratic' | 'Unknown'): string {
  switch (party) {
    case 'Republican':
      return '#DC2626'; // Red
    case 'Democratic':
      return '#2563EB'; // Blue
    default:
      return '#6B7280'; // Gray for unknown
  }
}

export function groupDataByCounty(data: CountyData[]): Record<string, CountyData[]> {
  return data.reduce((acc, item) => {
    if (!acc[item.county]) {
      acc[item.county] = [];
    }
    acc[item.county].push(item);
    return acc;
  }, {} as Record<string, CountyData[]>);
}
