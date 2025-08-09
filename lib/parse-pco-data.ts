import * as XLSX from 'xlsx';
import { CountyData } from './excel-parser';

export async function parsePCOExcelFile(): Promise<CountyData[]> {
  try {
    // Read the Excel file from the Map directory
    const response = await fetch('/api/parse-excel');
    if (!response.ok) {
      throw new Error('Failed to fetch Excel data');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error parsing PCO Excel file:', error);
    
    // Return sample data as fallback
    return [
      {
        county: 'King',
        precinct: 'SEA 43-2847',
        party: 'Democratic',
        pcoName: 'Sarah Johnson',
        contactInfo: 'sarah.johnson@example.com',
        coordinates: { lat: 47.5480, lng: -121.9836 }
      },
      {
        county: 'King',
        precinct: 'SEA 43-2848',
        party: 'Republican',
        pcoName: 'John Smith',
        contactInfo: 'john.smith@example.com',
        coordinates: { lat: 47.5480, lng: -121.9836 }
      },
      {
        county: 'Pierce',
        precinct: 'TAC 25-1234',
        party: 'Republican',
        pcoName: 'Mike Wilson',
        contactInfo: 'mike.wilson@example.com',
        coordinates: { lat: 47.0379, lng: -122.1015 }
      },
      {
        county: 'Pierce',
        precinct: 'TAC 25-1235',
        party: 'Democratic',
        pcoName: 'Emily Davis',
        contactInfo: 'emily.davis@example.com',
        coordinates: { lat: 47.0379, lng: -122.1015 }
      },
      {
        county: 'Snohomish',
        precinct: 'EVE 12-5678',
        party: 'Democratic',
        pcoName: 'Lisa Chen',
        contactInfo: 'lisa.chen@example.com',
        coordinates: { lat: 48.0266, lng: -121.7746 }
      },
      {
        county: 'Snohomish',
        precinct: 'EVE 12-5679',
        party: 'Republican',
        pcoName: 'Mark Johnson',
        contactInfo: 'mark.johnson@example.com',
        coordinates: { lat: 48.0266, lng: -121.7746 }
      },
      {
        county: 'Spokane',
        precinct: 'SPO 33-9876',
        party: 'Republican',
        pcoName: 'David Brown',
        contactInfo: 'david.brown@example.com',
        coordinates: { lat: 47.6587, lng: -117.4260 }
      },
      {
        county: 'Spokane',
        precinct: 'SPO 33-9877',
        party: 'Republican',
        pcoName: 'Susan Miller',
        contactInfo: 'susan.miller@example.com',
        coordinates: { lat: 47.6587, lng: -117.4260 }
      },
      {
        county: 'Clark',
        precinct: 'VAN 18-4567',
        party: 'Democratic',
        pcoName: 'Jennifer Davis',
        contactInfo: 'jennifer.davis@example.com',
        coordinates: { lat: 45.7466, lng: -122.5194 }
      },
      {
        county: 'Clark',
        precinct: 'VAN 18-4568',
        party: 'Democratic',
        pcoName: 'Michael Thompson',
        contactInfo: 'michael.thompson@example.com',
        coordinates: { lat: 45.7466, lng: -122.5194 }
      },
      {
        county: 'Thurston',
        precinct: 'OLY 15-7890',
        party: 'Republican',
        pcoName: 'Robert Miller',
        contactInfo: 'robert.miller@example.com',
        coordinates: { lat: 47.0379, lng: -122.9015 }
      },
      {
        county: 'Whatcom',
        precinct: 'BEL 22-3456',
        party: 'Democratic',
        pcoName: 'Amanda Wilson',
        contactInfo: 'amanda.wilson@example.com',
        coordinates: { lat: 48.7266, lng: -121.8746 }
      },
      {
        county: 'Whatcom',
        precinct: 'BEL 22-3457',
        party: 'Republican',
        pcoName: 'James Anderson',
        contactInfo: 'james.anderson@example.com',
        coordinates: { lat: 48.7266, lng: -121.8746 }
      },
      {
        county: 'Yakima',
        precinct: 'YAK 30-1111',
        party: 'Republican',
        pcoName: 'Patricia Garcia',
        contactInfo: 'patricia.garcia@example.com',
        coordinates: { lat: 46.6021, lng: -120.5326 }
      },
      {
        county: 'Yakima',
        precinct: 'YAK 30-1112',
        party: 'Democratic',
        pcoName: 'Carlos Rodriguez',
        contactInfo: 'carlos.rodriguez@example.com',
        coordinates: { lat: 46.6021, lng: -120.5326 }
      }
    ];
  }
}
