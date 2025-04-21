import React, { useState } from 'react'
import Button from './Button';
import { IoSettingsSharp } from "react-icons/io5";
import useToaster from '../hooks/useToaster';

const SettingButton = () => {
    const [showModel, setShowModel] = useState(false);
    const [data, setData] = useState();
    const {addToast} = useToaster();
    // const [timer, setTimer] = useState();
    const confirmHandler = () => {
        setShowModel(false);
        addToast({timer:data*1000})
    }
  return (
    <div>
        <Button name={<IoSettingsSharp />} style={{padding: "0.5rem", fontSize: "1.5rem"}}  onClick={() => setShowModel(true)} />

        <div>
            {showModel && <div style={{padding: "7rem", border: "1px solid gray", backgroundColor: "#e7e7e7", width: "100%", }}>
                setTimeOut: <input style={{padding: "1rem"}} value={data} onChange={(e) => setData(e.target.value)} />
                <button onClick={confirmHandler}>
                    Confirm
                </button>
            </div>}
        </div>
    </div>
  )
}

export default SettingButton