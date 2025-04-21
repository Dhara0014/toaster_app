import React, { useCallback, useState } from 'react'

const useToaster = () => {
    const [count, setCount] = useState([]);

    // const Timer = useCallback({timer} => {

    // })

    const addToast = useCallback(( {message, timer}) => {
        const id = Date.now();
        message && setCount((pre) => [...pre, {id, message}]);

        setTimeout(() => {
            removeToast(id);
        },timer ? timer : 3000)
    },[]);

    const removeToast = useCallback(id => {
        setCount((pre) => pre.filter((itm) => itm.id != id))
    },[]);

  return {count, addToast, removeToast}
}

export default useToaster;