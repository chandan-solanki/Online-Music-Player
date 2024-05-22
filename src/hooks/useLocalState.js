import { useEffect, useState } from "react";

export function useLocalState(key, intialData) {
  const [data, setLocalData] = useState(intialData);
//   console.log("hook data ", data);

  useEffect(() => {
    const getLocalData = JSON.parse(localStorage.getItem(key));
    console.log("getlocaldata = ", getLocalData);

    if (getLocalData) {
      setLocalData(getLocalData);
    } else {
      localStorage.setItem(key, JSON.stringify(intialData));
    }
  }, []);

  const updateData = (newData) => {
    //if the newData is callBack function then update useState()
    if (typeof newData === "function") {
      console.log("true");
      localStorage.setItem(key, JSON.stringify(newData(data)));
      setLocalData(newData(data));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
      setLocalData(newData);
    }
  };

  return [data, updateData];
}
