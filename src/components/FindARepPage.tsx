import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { USAMapComponent } from './USAMap';
import { ContactInfo } from './ContactInfo';
import { Phone, Mail, MapPin } from 'lucide-react';

interface RepData {
  name: string;
  phone: string;
  email: string;
  territory: string;
}

interface WarehouseData {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  manager: string;
}

interface StateData {
  reps: RepData[];
  warehouses: WarehouseData[];
}

// Sample data - replace with your actual data
const defaultContact = {
  phone: '+1-281-962-6369',
  email: 'sales@company.com',
  addresses: [
    {
      street: '46 Mill Street',
      city: 'Orange',
      state: 'MA',
      zip: '01364'
    },
    {
      street: '6200 Savoy Drive Suite 750',
      city: 'Houston',
      state: 'TX', 
      zip: '77036'
    }
  ]
};

const generateStateData = (): Record<string, StateData> => {
  const allStates = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  const stateNames = {
    'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
    'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
    'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
    'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
    'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
    'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
    'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
    'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
    'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
    'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming'
  };

  const cities = {
    'AL': ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville'],
    'AK': ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka'],
    'AZ': ['Phoenix', 'Tucson', 'Mesa', 'Chandler'],
    'AR': ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale'],
    'CA': ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento'],
    'CO': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins'],
    'CT': ['Bridgeport', 'New Haven', 'Hartford', 'Stamford'],
    'DE': ['Wilmington', 'Dover', 'Newark', 'Middletown'],
    'FL': ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg'],
    'GA': ['Atlanta', 'Columbus', 'Augusta', 'Savannah'],
    'HI': ['Honolulu', 'Hilo', 'Kailua', 'Kaneohe'],
    'ID': ['Boise', 'Meridian', 'Nampa', 'Idaho Falls'],
    'IL': ['Chicago', 'Aurora', 'Peoria', 'Rockford'],
    'IN': ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend'],
    'IA': ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City'],
    'KS': ['Wichita', 'Overland Park', 'Kansas City', 'Topeka'],
    'KY': ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro'],
    'LA': ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette'],
    'ME': ['Portland', 'Lewiston', 'Bangor', 'South Portland'],
    'MD': ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg'],
    'MA': ['Boston', 'Worcester', 'Springfield', 'Lowell'],
    'MI': ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights'],
    'MN': ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth'],
    'MS': ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg'],
    'MO': ['Kansas City', 'St. Louis', 'Springfield', 'Columbia'],
    'MT': ['Billings', 'Missoula', 'Great Falls', 'Bozeman'],
    'NE': ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island'],
    'NV': ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas'],
    'NH': ['Manchester', 'Nashua', 'Concord', 'Derry'],
    'NJ': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth'],
    'NM': ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe'],
    'NY': ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse'],
    'NC': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham'],
    'ND': ['Fargo', 'Bismarck', 'Grand Forks', 'Minot'],
    'OH': ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo'],
    'OK': ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow'],
    'OR': ['Portland', 'Salem', 'Eugene', 'Gresham'],
    'PA': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie'],
    'RI': ['Providence', 'Warwick', 'Cranston', 'Pawtucket'],
    'SC': ['Columbia', 'Charleston', 'North Charleston', 'Mount Pleasant'],
    'SD': ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings'],
    'TN': ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'],
    'TX': ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso'],
    'UT': ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan'],
    'VT': ['Burlington', 'Essex', 'South Burlington', 'Colchester'],
    'VA': ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond'],
    'WA': ['Seattle', 'Spokane', 'Tacoma', 'Vancouver'],
    'WV': ['Charleston', 'Huntington', 'Parkersburg', 'Morgantown'],
    'WI': ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha'],
    'WY': ['Cheyenne', 'Casper', 'Laramie', 'Gillette']
  };

  const firstNames = ['John', 'Sarah', 'Mike', 'Lisa', 'David', 'Emily', 'Robert', 'Jennifer', 'Michael', 'Jessica', 'William', 'Ashley', 'James', 'Amanda', 'Christopher', 'Stephanie', 'Daniel', 'Melissa', 'Matthew', 'Nicole'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];
  const territories = ['North', 'South', 'East', 'West', 'Central', 'Metro', 'Regional', 'District'];

  const data: Record<string, StateData> = {};

  allStates.forEach(state => {
    const stateCities = cities[state] || ['Capital City', 'Major City'];
    const repCount = Math.floor(Math.random() * 9) + 10; // 10-18 reps
    const warehouseCount = Math.floor(Math.random() * 9) + 10; // 10-18 warehouses

    // Generate reps
    const reps: RepData[] = [];
    for (let i = 0; i < repCount; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const territory = territories[Math.floor(Math.random() * territories.length)];
      
      reps.push({
        name: `${firstName} ${lastName}`,
        phone: `+1-${Math.floor(Math.random() * 900) + 100}-555-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
        territory: `${territory} ${stateNames[state]}`
      });
    }

    // Generate warehouses
    const warehouses: WarehouseData[] = [];
    for (let i = 0; i < warehouseCount; i++) {
      const city = stateCities[Math.floor(Math.random() * stateCities.length)];
      const warehouseTypes = ['Distribution Center', 'Warehouse', 'Fulfillment Center', 'Storage Facility'];
      const warehouseType = warehouseTypes[Math.floor(Math.random() * warehouseTypes.length)];
      const managerFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const managerLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      
      warehouses.push({
        name: `${city} ${warehouseType}`,
        address: `${Math.floor(Math.random() * 9999) + 1} ${['Industrial', 'Commerce', 'Business', 'Corporate'][Math.floor(Math.random() * 4)]} ${['Blvd', 'Ave', 'St', 'Dr'][Math.floor(Math.random() * 4)]}`,
        city: city,
        state: state,
        zip: String(Math.floor(Math.random() * 90000) + 10000),
        phone: `+1-${Math.floor(Math.random() * 900) + 100}-555-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
        manager: `${managerFirstName} ${managerLastName}`
      });
    }

    data[state] = { reps, warehouses };
  });

  return data;
};

const stateData = generateStateData();

export const FindARepPage: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('reps');

  const currentData = selectedState ? stateData[selectedState] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">FIND A REP</h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Find our sales representatives and warehouse locations across the United States
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            FIND OUR SALES REPRESENTATIVES
          </h2>
          <p className="text-lg text-muted-foreground">
            Click on the map to find rep details.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Panel - Contact Information */}
          <div className="order-2 lg:order-1">
            <Card className="p-6 h-full">
              {selectedState ? (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    {selectedState} Details
                  </h3>
                  
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="reps" className="text-sm font-medium">
                        Representatives
                      </TabsTrigger>
                      <TabsTrigger value="warehouses" className="text-sm font-medium">
                        Warehouses
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="reps" className="mt-0">
                      <div className="space-y-6">
                        {currentData?.reps.map((rep, index) => (
                          <div key={index} className="border-l-4 border-primary pl-4 py-2">
                            <h4 className="font-semibold text-lg text-foreground">
                              {rep.name}
                            </h4>
                            <p className="text-muted-foreground mb-3">{rep.territory}</p>
                            
                            <div className="space-y-2">
                              <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-primary" />
                                <a 
                                  href={`tel:${rep.phone}`}
                                  className="text-primary hover:text-primary-foreground transition-colors"
                                >
                                  {rep.phone}
                                </a>
                              </div>
                              <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-primary" />
                                <a 
                                  href={`mailto:${rep.email}`}
                                  className="text-primary hover:text-primary-foreground transition-colors"
                                >
                                  {rep.email}
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="warehouses" className="mt-0">
                      <div className="space-y-6">
                        {currentData?.warehouses.map((warehouse, index) => (
                          <div key={index} className="border-l-4 border-primary pl-4 py-2">
                            <h4 className="font-semibold text-lg text-foreground">
                              {warehouse.name}
                            </h4>
                            <p className="text-muted-foreground mb-3">
                              Manager: {warehouse.manager}
                            </p>
                            
                            <div className="space-y-2">
                              <div className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-primary mt-1" />
                                <div>
                                  <p className="text-foreground">{warehouse.address}</p>
                                  <p className="text-foreground">
                                    {warehouse.city}, {warehouse.state} {warehouse.zip}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-primary" />
                                <a 
                                  href={`tel:${warehouse.phone}`}
                                  className="text-primary hover:text-primary-foreground transition-colors"
                                >
                                  {warehouse.phone}
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              ) : (
                <ContactInfo contact={defaultContact} />
              )}
            </Card>
          </div>

          {/* Right Panel - USA Map */}
          <div className="order-1 lg:order-2">
            <Card className="p-6">
              <USAMapComponent 
                selectedState={selectedState}
                onStateSelect={setSelectedState}
                availableStates={[
                  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
                  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
                  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
                  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
                  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
                ]}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};