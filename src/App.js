import React, { useMemo, useState } from 'react'
import './App.css'

export default function App() {

  const [height, setHeight] = useState(130);
  const [weight, setWeight] = useState(40);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height/100;
    
    return(weight/(calculateHeight*calculateHeight)).toFixed(1);
  }, [weight, height])

  const getStatus = (output) => {
    if(output<18.5) {
      return("Under weight");
    }
    else if(output>=18.5 && output<=24.9) {
      return("Healthy weight");
    }
    else if(output>=25 && output<=29.9) {
      return("Over weight");
    }
    else {
      return("Obesity");
    }
  }

  const status = getStatus(output);

  return (
    <div className='main'>
      <h1>BMI Calculator</h1>
    
    <div className='input'>
      <div className='wight-in'>
        
        <label className='weight'>Weight: </label>
        <input className='input-weight' type='number' placeholder={`${weight} kg`} step={1} min={40} max={200} onChange={onWeightChange}></input>
      </div>

      <div className='height-in'>
        <label className='height'>Height: </label>
        <input className='input-height' type='number' placeholder={`${height} cm`} onChange={onHeightChange} min={130} max={250}></input>
      </div>
    </div>

    <div className='output'>
      <div>
        <label className='text'>Your BMI is: </label>
        <label className='final-output'>{output}</label>
      </div>
      <div className='status'>
        <label>{status}</label>
      </div>
    </div>
    </div>
  )
}
