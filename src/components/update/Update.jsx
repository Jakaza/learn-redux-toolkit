import "./update.css";
import Warning from "../warning/Warning";
import { useState } from "react";
export default function Update() {

  const [name, setName] = useState('Name Here')

  function handleFormSubmit(e){
    e.preventDefault()

    alert(name)
  }

  return (
    <div className="update">
      <Warning message="This is a warning" />

      <form onSubmit={handleFormSubmit}>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          onChange={(e)=>{
            setName(e.target.value)
          }}
        />

        <label for="lname">Last Name</label>
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
