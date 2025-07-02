import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { USAMap } from './USAMap';
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

const stateData: Record<string, StateData> = {
  'TX': {
    reps: [
      {
        name: 'John Smith',
        phone: '+1-713-555-0123',
        email: 'john.smith@company.com',
        territory: 'East Texas'
      },
      {
        name: 'Sarah Johnson',
        phone: '+1-214-555-0456',
        email: 'sarah.johnson@company.com',
        territory: 'North Texas'
      }
    ],
    warehouses: [
      {
        name: 'Houston Distribution Center',
        address: '6200 Savoy Drive Suite 750',
        city: 'Houston',
        state: 'TX',
        zip: '77036',
        phone: '+1-713-555-0100',
        manager: 'Mike Rodriguez'
      },
      {
        name: 'Dallas Warehouse',
        address: '1234 Industrial Blvd',
        city: 'Dallas',
        state: 'TX',
        zip: '75201',
        phone: '+1-214-555-0200',
        manager: 'Lisa Chen'
      }
    ]
  },
  'CA': {
    reps: [
      {
        name: 'David Wilson',
        phone: '+1-415-555-0789',
        email: 'david.wilson@company.com',
        territory: 'Northern California'
      }
    ],
    warehouses: [
      {
        name: 'Los Angeles Warehouse',
        address: '5678 Commerce Way',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90001',
        phone: '+1-213-555-0300',
        manager: 'Carlos Martinez'
      }
    ]
  },
  'NY': {
    reps: [
      {
        name: 'Emily Davis',
        phone: '+1-212-555-0321',
        email: 'emily.davis@company.com',
        territory: 'New York Metro'
      }
    ],
    warehouses: [
      {
        name: 'New York Distribution',
        address: '9876 Queens Blvd',
        city: 'Queens',
        state: 'NY',
        zip: '11101',
        phone: '+1-212-555-0400',
        manager: 'Robert Kim'
      }
    ]
  }
};

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
              <USAMap 
                selectedState={selectedState}
                onStateSelect={setSelectedState}
                availableStates={Object.keys(stateData)}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};