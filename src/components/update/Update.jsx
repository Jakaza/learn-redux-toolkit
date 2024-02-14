import "./update.css";
import Warning from "../warning/Warning";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
export default function Update() {

  const name = useSelector(state => state.user.name)

  console.log(name);

  function handleFormSubmit(e){
    e.preventDefault()

    alert(name)
  }

  return (
    <div className="update">
      <Warning message="This is a warning" />

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
     
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <input type="submit" value="Update Username" />
      </form>
    </div>
  );
}
