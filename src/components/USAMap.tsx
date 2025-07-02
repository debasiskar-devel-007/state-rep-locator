import React from 'react';
import { cn } from '@/lib/utils';

interface USAMapProps {
  selectedState: string | null;
  onStateSelect: (state: string | null) => void;
  availableStates: string[];
}

export const USAMap: React.FC<USAMapProps> = ({ 
  selectedState, 
  onStateSelect, 
  availableStates 
}) => {
  const handleStateClick = (stateCode: string) => {
    if (availableStates.includes(stateCode)) {
      onStateSelect(selectedState === stateCode ? null : stateCode);
    }
  };

  const getStateClass = (stateCode: string) => {
    const isAvailable = availableStates.includes(stateCode);
    const isSelected = selectedState === stateCode;
    
    return cn(
      "transition-all duration-200 cursor-pointer",
      {
        "fill-primary hover:fill-primary-foreground": isAvailable && !isSelected,
        "fill-primary-foreground": isSelected,
        "fill-gray-300 hover:fill-gray-400": !isAvailable,
        "cursor-not-allowed": !isAvailable
      }
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* USA Map SVG - Simplified version with major states */}
        <g>
          {/* California */}
          <path
            d="M50 200 L50 400 L150 420 L170 380 L160 200 Z"
            className={getStateClass('CA')}
            onClick={() => handleStateClick('CA')}
          />
          
          {/* Texas */}
          <path
            d="M350 350 L500 340 L520 450 L400 470 L320 420 Z"
            className={getStateClass('TX')}
            onClick={() => handleStateClick('TX')}
          />
          
          {/* New York */}
          <path
            d="M750 150 L850 140 L860 200 L740 210 Z"
            className={getStateClass('NY')}
            onClick={() => handleStateClick('NY')}
          />
          
          {/* Florida */}
          <path
            d="M650 400 L750 390 L780 480 L720 500 L650 470 Z"
            className={getStateClass('FL')}
            onClick={() => handleStateClick('FL')}
          />
          
          {/* Illinois */}
          <path
            d="M500 200 L550 190 L560 280 L490 290 Z"
            className={getStateClass('IL')}
            onClick={() => handleStateClick('IL')}
          />
          
          {/* Pennsylvania */}
          <path
            d="M700 170 L780 160 L790 220 L680 230 Z"
            className={getStateClass('PA')}
            onClick={() => handleStateClick('PA')}
          />
          
          {/* Ohio */}
          <path
            d="M620 190 L690 180 L700 250 L610 260 Z"
            className={getStateClass('OH')}
            onClick={() => handleStateClick('OH')}
          />
          
          {/* Georgia */}
          <path
            d="M600 320 L680 310 L690 380 L580 390 Z"
            className={getStateClass('GA')}
            onClick={() => handleStateClick('GA')}
          />
          
          {/* North Carolina */}
          <path
            d="M650 260 L780 250 L790 310 L640 320 Z"
            className={getStateClass('NC')}
            onClick={() => handleStateClick('NC')}
          />
          
          {/* Michigan */}
          <path
            d="M550 140 L620 130 L630 200 L540 210 Z"
            className={getStateClass('MI')}
            onClick={() => handleStateClick('MI')}
          />
          
          {/* New Jersey */}
          <path
            d="M780 180 L810 175 L815 220 L775 225 Z"
            className={getStateClass('NJ')}
            onClick={() => handleStateClick('NJ')}
          />
          
          {/* Virginia */}
          <path
            d="M650 220 L750 210 L760 270 L640 280 Z"
            className={getStateClass('VA')}
            onClick={() => handleStateClick('VA')}
          />
          
          {/* Washington */}
          <path
            d="M80 50 L180 40 L190 120 L70 130 Z"
            className={getStateClass('WA')}
            onClick={() => handleStateClick('WA')}
          />
          
          {/* Arizona */}
          <path
            d="M200 300 L300 290 L310 400 L190 410 Z"
            className={getStateClass('AZ')}
            onClick={() => handleStateClick('AZ')}
          />
          
          {/* Massachusetts */}
          <path
            d="M820 130 L870 125 L875 155 L815 160 Z"
            className={getStateClass('MA')}
            onClick={() => handleStateClick('MA')}
          />
          
          {/* Tennessee */}
          <path
            d="M520 270 L650 260 L660 320 L510 330 Z"
            className={getStateClass('TN')}
            onClick={() => handleStateClick('TN')}
          />
          
          {/* Indiana */}
          <path
            d="M560 200 L600 195 L610 270 L550 275 Z"
            className={getStateClass('IN')}
            onClick={() => handleStateClick('IN')}
          />
          
          {/* Missouri */}
          <path
            d="M450 240 L540 230 L550 310 L440 320 Z"
            className={getStateClass('MO')}
            onClick={() => handleStateClick('MO')}
          />
          
          {/* Maryland */}
          <path
            d="M720 200 L770 195 L775 230 L715 235 Z"
            className={getStateClass('MD')}
            onClick={() => handleStateClick('MD')}
          />
          
          {/* Wisconsin */}
          <path
            d="M480 130 L540 120 L550 200 L470 210 Z"
            className={getStateClass('WI')}
            onClick={() => handleStateClick('WI')}
          />
          
          {/* Minnesota */}
          <path
            d="M420 100 L500 90 L510 180 L410 190 Z"
            className={getStateClass('MN')}
            onClick={() => handleStateClick('MN')}
          />
          
          {/* Colorado */}
          <path
            d="M320 200 L420 190 L430 290 L310 300 Z"
            className={getStateClass('CO')}
            onClick={() => handleStateClick('CO')}
          />
          
          {/* Alabama */}
          <path
            d="M540 320 L590 315 L600 390 L530 395 Z"
            className={getStateClass('AL')}
            onClick={() => handleStateClick('AL')}
          />
          
          {/* Louisiana */}
          <path
            d="M420 380 L520 370 L530 440 L410 450 Z"
            className={getStateClass('LA')}
            onClick={() => handleStateClick('LA')}
          />
          
          {/* Kentucky */}
          <path
            d="M540 240 L650 230 L660 290 L530 300 Z"
            className={getStateClass('KY')}
            onClick={() => handleStateClick('KY')}
          />
          
          {/* Oregon */}
          <path
            d="M50 120 L150 110 L160 190 L40 200 Z"
            className={getStateClass('OR')}
            onClick={() => handleStateClick('OR')}
          />
          
          {/* Oklahoma */}
          <path
            d="M350 290 L480 280 L490 350 L340 360 Z"
            className={getStateClass('OK')}
            onClick={() => handleStateClick('OK')}
          />
          
          {/* Connecticut */}
          <path
            d="M820 150 L850 147 L855 170 L815 173 Z"
            className={getStateClass('CT')}
            onClick={() => handleStateClick('CT')}
          />
          
          {/* Iowa */}
          <path
            d="M420 180 L480 170 L490 240 L410 250 Z"
            className={getStateClass('IA')}
            onClick={() => handleStateClick('IA')}
          />
          
          {/* Mississippi */}
          <path
            d="M480 340 L530 335 L540 410 L470 415 Z"
            className={getStateClass('MS')}
            onClick={() => handleStateClick('MS')}
          />
          
          {/* Arkansas */}
          <path
            d="M450 310 L520 300 L530 370 L440 380 Z"
            className={getStateClass('AR')}
            onClick={() => handleStateClick('AR')}
          />
          
          {/* Kansas */}
          <path
            d="M350 240 L450 230 L460 310 L340 320 Z"
            className={getStateClass('KS')}
            onClick={() => handleStateClick('KS')}
          />
          
          {/* Utah */}
          <path
            d="M250 200 L320 190 L330 300 L240 310 Z"
            className={getStateClass('UT')}
            onClick={() => handleStateClick('UT')}
          />
          
          {/* Nevada */}
          <path
            d="M180 200 L250 190 L260 320 L170 330 Z"
            className={getStateClass('NV')}
            onClick={() => handleStateClick('NV')}
          />
          
          {/* New Mexico */}
          <path
            d="M280 300 L350 290 L360 400 L270 410 Z"
            className={getStateClass('NM')}
            onClick={() => handleStateClick('NM')}
          />
          
          {/* West Virginia */}
          <path
            d="M650 200 L720 190 L730 250 L640 260 Z"
            className={getStateClass('WV')}
            onClick={() => handleStateClick('WV')}
          />
          
          {/* Nebraska */}
          <path
            d="M350 180 L450 170 L460 240 L340 250 Z"
            className={getStateClass('NE')}
            onClick={() => handleStateClick('NE')}
          />
          
          {/* Idaho */}
          <path
            d="M200 100 L280 90 L290 200 L190 210 Z"
            className={getStateClass('ID')}
            onClick={() => handleStateClick('ID')}
          />
          
          {/* Maine */}
          <path
            d="M850 80 L880 75 L885 140 L845 145 Z"
            className={getStateClass('ME')}
            onClick={() => handleStateClick('ME')}
          />
          
          {/* New Hampshire */}
          <path
            d="M830 110 L850 108 L855 150 L825 152 Z"
            className={getStateClass('NH')}
            onClick={() => handleStateClick('NH')}
          />
          
          {/* Hawaii */}
          <g transform="translate(200, 450)">
            <circle cx="0" cy="0" r="8" className={getStateClass('HI')} onClick={() => handleStateClick('HI')} />
            <circle cx="15" cy="5" r="6" className={getStateClass('HI')} onClick={() => handleStateClick('HI')} />
            <circle cx="30" cy="0" r="5" className={getStateClass('HI')} onClick={() => handleStateClick('HI')} />
          </g>
          
          {/* Alaska */}
          <path
            d="M80 420 L180 410 L190 500 L70 510 Z"
            className={getStateClass('AK')}
            onClick={() => handleStateClick('AK')}
          />
        </g>
        
        {/* State Labels for Available States */}
        {availableStates.map((state) => {
          const labelPositions: Record<string, { x: number; y: number }> = {
            'CA': { x: 100, y: 300 },
            'TX': { x: 425, y: 395 },
            'NY': { x: 800, y: 175 },
            'FL': { x: 715, y: 435 },
            'IL': { x: 525, y: 235 }
          };
          
          const pos = labelPositions[state];
          if (!pos) return null;
          
          return (
            <text
              key={state}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              className="fill-white text-sm font-semibold pointer-events-none"
            >
              {state}
            </text>
          );
        })}
      </svg>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Click on highlighted states to view representatives and warehouse information
        </p>
      </div>
    </div>
  );
};