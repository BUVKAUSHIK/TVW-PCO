# PCO Data Setup Instructions

This document explains how to set up the PCO contact data for your website.

## Step 1: Prepare Your Data Files

1. **Export your Excel data**: Open your `PCO_Contact_Final.xlsx` file and export each county's data as separate CSV files.
   - The files should be named: `PCO_Contact_Final.xlsx - [County Name].csv`
   - For example: `PCO_Contact_Final.xlsx - King County.csv`

2. **Place files in the project root**: Put all the CSV files in the same directory as the `process_pco_data.py` script.

## Step 2: Run the Data Processing Script

1. **Install Python dependencies** (if not already installed):
   ```bash
   pip install pandas
   ```

2. **Run the processing script**:
   ```bash
   python process_pco_data.py
   ```

3. **Check the output**: The script will create a `pco_data.json` file in the same directory.

## Step 3: Add Data to Your Website

1. **Move the JSON file**: Copy the generated `pco_data.json` file to your project's `data/` directory and rename it to `pcoContacts.json`.

2. **Replace the sample data**: The sample data in `data/pcoContacts.json` will be replaced with your actual PCO data.

## Step 4: Test Your Website

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to the PCO finder**: Go to `http://localhost:3000/find-precinct`

3. **Test the functionality**: Select different counties from the dropdown to see the PCO contact information.

## Data Format

The JSON file will have this structure (flat array format):
```json
[
  {
    "County": "County Name",
    "Name": "PCO Name",
    "Precinct": "Precinct Number",
    "Party": "Democratic/Republican",
    "Email_y": "Email Address",
    "Phone_y": "Phone Number",
    "Address_y": "Full Address"
  }
]
```

## Features

The website now includes:
- ✅ County dropdown selection
- ✅ PCO contact information display with all fields
- ✅ Party-based color coding (Democratic = Blue, Republican = Red)
- ✅ Clickable phone and email links
- ✅ Address display
- ✅ Precinct information
- ✅ Responsive design
- ✅ Accessibility features

## Troubleshooting

- **No files found**: Make sure your CSV files follow the naming pattern `PCO_Contact_Final.xlsx - [County Name].csv`
- **Missing data**: Check that your CSV files have columns for Name, Party, Precinct, Email_y, Phone_y, and Address_y
- **Website not loading data**: Ensure the `pcoContacts.json` file is in the `data/` directory
- **TypeScript errors**: Make sure the JSON structure matches the PCO interface in the component

## Data Fields Included

The website now displays all these PCO fields:
- **Name**: PCO's full name
- **Precinct**: Precinct number/identifier
- **Party**: Political party affiliation
- **Email**: Contact email address (clickable)
- **Phone**: Contact phone number (clickable)
- **Address**: Full mailing address

Your PCO contact finder is now ready to use with complete contact information! 