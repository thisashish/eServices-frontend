import axios from "axios";

export const DeleteC = async (c) => {
  const res1 = await axios.post(
    "http://localhost:4001/C/delete/one/byid",
    { id: c }
  );
  if (res1.status === 200) {
    window.location.reload();
  }
};
