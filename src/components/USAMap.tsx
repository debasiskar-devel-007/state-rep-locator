import React from 'react';
import USAMap from 'react-usa-map';
import { cn } from '@/lib/utils';

interface USAMapProps {
  selectedState: string | null;
  onStateSelect: (state: string | null) => void;
  availableStates: string[];
}

export const USAMapComponent: React.FC<USAMapProps> = ({ 
  selectedState, 
  onStateSelect, 
  availableStates 
}) => {
  const mapHandler = (event: any) => {
    const stateCode = event.target.dataset.name;
    if (availableStates.includes(stateCode)) {
      onStateSelect(selectedState === stateCode ? null : stateCode);
    }
  };

  const statesCustomConfig = () => {
    const config: Record<string, any> = {};
    
    // Configure all states
    const allStates = [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
      'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
      'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
      'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
      'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];

    allStates.forEach(state => {
      const isAvailable = availableStates.includes(state);
      const isSelected = selectedState === state;
      
      config[state] = {
        fill: isSelected 
          ? 'hsl(var(--primary))' 
          : isAvailable 
            ? 'hsl(var(--primary) / 0.7)' 
            : 'hsl(var(--muted))',
        stroke: isSelected ? 'hsl(var(--primary-foreground))' : 'hsl(var(--border))',
        strokeWidth: isSelected ? 2 : 1,
        clickHandler: mapHandler,
        cursor: isAvailable ? 'pointer' : 'default',
        style: {
          transition: 'all 0.3s ease-in-out'
        }
      };
    });

    return config;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gray-50 p-6 rounded-lg border">
        <USAMap 
          customize={statesCustomConfig()} 
          onClick={mapHandler}
          width="100%"
          height="400px"
        />
      </div>
      
      <div className="mt-4 text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          Click on highlighted states to view representatives and warehouse information
        </p>
        {selectedState && (
          <p className="text-sm font-medium text-primary">
            Selected: {selectedState}
          </p>
        )}
        <div className="flex justify-center items-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 bg-primary rounded-sm"></div>
            <span>Available States</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 bg-gray-300 rounded-sm"></div>
            <span>Not Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 bg-primary-foreground border border-primary rounded-sm"></div>
            <span>Selected</span>
          </div>
        </div>
      </div>
    </div>
  );
};