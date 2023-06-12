import React, { useState, useMemo } from 'react'
import Select from 'react-select'


function NextOfKinOptions() {
  const [value, setValue] = useState('')
  const relationshipOptions = [
    { value: '', label: '' },
    { value: 'Partner', label: 'Partner' },
    { value: 'Spouse', label: 'Spouse' },
    { value: 'Father', label: 'Father' },
    { value: 'Mother', label: 'Mother' },
    { value: 'Grandmother', label: 'Grandmother' },
    { value: 'Grandfather', label: 'Grandfather' },
    { value: 'Sibling', label: 'Sibling' },
    { value: 'Child', label: 'Child' },
    { value: 'Aunt', label: 'Aunt' },
    { value: 'Uncle', label: 'Uncle' },
    { value: 'Guardian', label: 'Guardian' },
    { value: 'Friend', label: 'Friend' },
    { value: 'Co-worker', label: 'Co-worker' },
  ];
  
  const options = useMemo(() => relationshipOptions, [])

  const changeHandler = value => {
    setValue(value)
  }

  return <Select options={options} value={value} onChange={changeHandler} />
}

export default NextOfKinOptions;