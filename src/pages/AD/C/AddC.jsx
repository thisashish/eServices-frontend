import React from "react";
import { L } from "../../Home/Utils";
import {addC} from "./AddC.css";

export const AddC = () => {
  return (
    <div>
      <h1>Add Category</h1>
      <form
        action="http://localhost:4001/C/add"
        method="post"
        encType="multipart/form-data"
      >
        <label>Category Name</label>
        <input name="name" type="text"/>
        <label>Image</label>
        <input className="addcategory-image" name="img" type="file" accept="image/*" />
        <label>Locations</label>
        <select name="locations" multiple>
          {L.map((l) => (
            <option>{l}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
