import React from 'react'
import useToaster from '../hooks/useToaster';
import { IoMdClose } from "react-icons/io";

const Toast = ({count, show}) => {
    const {removeToast} = useToaster();
  return (
    <div style={{cursor: "pointer", display: "flex",flexDirection: "column", justifyContent: "center",width: "30%", }}>
        {
            count?.map((itm, idx) => {
                return(
                     <div style={{ padding: "1.2rem", backgroundColor: "lightgreen", marginTop: "1rem", color: "white" , display: "flex", justifyContent: "space-between"}} id={itm.id}>
                    <span>
                    {show?.length > 0 ? show : "Testing"} : {itm.message}
                    </span>
                    <span onClick={() => removeToast(itm.id)}>
                      <IoMdClose style={{fontSize: "1rem"}} />
                    </span>
                </div>
                )
            })
        }
    </div>
  )
}

export default Toast