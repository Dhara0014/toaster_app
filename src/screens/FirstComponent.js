import React, { useState } from "react";
import Button from "../components/Button";
import SettingButton from "../components/SettingButton";
import useToaster from "../hooks/useToaster";
import Toast from "../components/Toast";

const FirstComponent = () => {
  const [toastCount, setToastCount] = useState(1);
  const {addToast, count} = useToaster();

  const toastHandler = () => {
    setToastCount((pre) => pre + 1);
    addToast({message:toastCount})
  }

  return (
    <div style={{ height: "73vh"}}>
      <div style={{ margin: "5rem", gap: "1rem", display: "flex" }}>
        <Button
          name="Show Toast Message"
          onClick={toastHandler}
        />
        <SettingButton />

      </div>
        <Toast count={count} />       
    </div>
  );
};

export default FirstComponent;
