import axios, { all } from "axios";
import { useEffect, useState } from "react";

export const SPFindall = async () => {
  const [allSP, setAllSP] = useState([]);
  useEffect(() => {
    const allSP = async () => {
      const allSP1 = await axios.get("/SP/find/one");
      setAllSP(allSP1.data);
    };
    allSP();
  }, []);
  return allSP;
};



