import pandas as pd
import json
import glob
import os

def consolidate_pco_data():
    """
    This script finds all PCO contact CSV files in the current directory,
    consolidates them into a single JSON file, and cleans up the data.
    """
    # Find all CSV files that match the PCO data pattern
    file_pattern = "PCO_Contact_Final.xlsx - *.csv"
    file_list = glob.glob(file_pattern)

    if not file_list:
        print(f"Error: No files found matching the pattern '{file_pattern}'.")
        print("Please make sure this script is in the same directory as your CSV files.")
        return

    all_pco_records = []
    print(f"Found {len(file_list)} county files. Processing...")

    for f in file_list:
        try:
            # Extract the county name from the filename
            county_name = os.path.basename(f).replace("PCO_Contact_Final.xlsx - ", "").replace(".csv", "")

            df = pd.read_csv(f)
            # Clean up column names (remove leading/trailing spaces)
            df.columns = df.columns.str.strip()

            for index, row in df.iterrows():
                # Create a clean record for each PCO with all fields
                pco_info = {
                    "County": county_name,
                    "Name": str(row.get('Name', 'N/A')).strip(),
                    "Precinct": str(row.get('Precinct', 'N/A')).strip(),
                    "Party": str(row.get('Party', 'Unknown')).strip(),
                    "Email_y": str(row.get('Email_y', row.get('Email', 'Not Available'))).strip(),
                    "Phone_y": str(row.get('Phone_y', row.get('Phone', 'Not Available'))).strip(),
                    "Address_y": str(row.get('Address_y', row.get('Address', 'Not Available'))).strip()
                }
                all_pco_records.append(pco_info)

            print(f"  - Successfully processed {county_name}")

        except Exception as e:
            print(f"  - Error processing file {f}: {e}")

    # Sort the records by County, then by Name
    all_pco_records.sort(key=lambda x: (x['County'], x['Name']))

    # Save the consolidated data to a JSON file
    output_filename = 'pco_data.json'
    with open(output_filename, 'w') as json_file:
        json.dump(all_pco_records, json_file, indent=2)

    print(f"\nSuccess! All data has been consolidated into '{output_filename}'")
    print(f"Total PCO records: {len(all_pco_records)}")
    print(f"Counties processed: {len(set(record['County'] for record in all_pco_records))}")

if __name__ == "__main__":
    consolidate_pco_data() 