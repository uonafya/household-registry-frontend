import React, { useState } from 'react';

const countyOptions = [
  { value: 'nyandarua', label: 'Nyandarua' },
  { value: 'embu', label: 'Embu' },
  // ... other county options
];

const subcountyOptions = {
  nyandarua: [
    { value: 'nyahururu', label: 'Nyahururu' },
    { value: 'oljoro-orok', label: 'Ol Joro Orok' },
    // ... other subcounty options for Nyandarua
  ],
  embu: [
    { value: 'embu-town', label: 'Embu Town' },
    { value: 'manyatta', label: 'Manyatta' },
    // ... other subcounty options for Embu
  ],
  // ... other county-subcounty mappings
};

const wardOptions = {
  nyahururu: [
    { value: 'ward1', label: 'Ward 1' },
    { value: 'ward2', label: 'Ward 2' },
    // ... other ward options for Nyahururu
  ],
  oljoroorok: [
    { value: 'ward3', label: 'Ward 3' },
    { value: 'ward4', label: 'Ward 4' },
    // ... other ward options for Ol Joro Orok
  ],
  // ... other subcounty-ward mappings
};

const CountyToWardOptions = () => {
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedSubcounty, setSelectedSubcounty] = useState('');
  const [selectedWard, setSelectedWard] = useState('');

  const handleCountyChange = (event) => {
    setSelectedCounty(event.target.value);
    setSelectedSubcounty('');
    setSelectedWard('');
  };

  const handleSubcountyChange = (event) => {
    setSelectedSubcounty(event.target.value);
    setSelectedWard('');
  };

  const handleWardChange = (event) => {
    setSelectedWard(event.target.value);
  };

  return (
    <div>
      <label htmlFor="county">County:</label>
      <select id="county" value={selectedCounty} onChange={handleCountyChange}>
        <option value="">Select County</option>
        {countyOptions.map((county) => (
          <option key={county.value} value={county.value}>
            {county.label}
          </option>
        ))}
      </select>

      {selectedCounty && (
        <div>
          <label htmlFor="subcounty">Subcounty:</label>
          <select
            id="subcounty"
            value={selectedSubcounty}
            onChange={handleSubcountyChange}
          >
            <option value="">Select Subcounty</option>
            {subcountyOptions[selectedCounty].map((subcounty) => (
              <option key={subcounty.value} value={subcounty.value}>
                {subcounty.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedSubcounty && (
        <div>
          <label htmlFor="ward">Ward:</label>
          <select id="ward" value={selectedWard} onChange={handleWardChange}>
            <option value="">Select Ward</option>
            {wardOptions[selectedSubcounty].map((ward) => (
              <option key={ward.value} value={ward.value}>
                {ward.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default CountyToWardOptions;
