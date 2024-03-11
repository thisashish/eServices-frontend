import axios from "axios";
import { useEffect } from "react";

export const DeleteCategory = (c) => {
  useEffect(() => {
    const res = async () => {
      const res1 = await axios.post("/category/delete/one/byid", { id: c });
      console.log(res1.data);
    };
    res();
  }, []);
};
