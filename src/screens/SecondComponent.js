import React, { useState } from 'react'
import Button from '../components/Button'
import { IoSettingsSharp } from "react-icons/io5";
import SettingButton from '../components/SettingButton';
import useToaster from '../hooks/useToaster';
import Toast from '../components/Toast';


const SecondComponent = () => {
  const [toastCount, setToastCount] = useState(1);
  const [data, setData] = useState("");
  
  const {addToast, count} = useToaster();

  const toastHandler = () => {
    setToastCount((pre) => pre + 1);
    addToast({message:toastCount});
    setTimeout(() => {
    setData("");
    }, 300);
  }


  return (
    <div style={{padding: "5rem", height: "64vh"}}>
      <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
        <div>Enter Custome Toast Text</div>
        <div style={{display: "flex", gap: "1rem"}}>
        <input placeholder='Enter Here' style={{padding: "1rem", width: "30%"}} value={data} onChange={(e) => setData(e.target.value)}/>
        <SettingButton />
        </div>
        <Button name="Show Toast Message" onClick={toastHandler}/>
      </div>

      <Toast count={count} show={data} />
    </div>
  )
}

export default SecondComponent