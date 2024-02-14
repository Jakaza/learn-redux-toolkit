import "./update.css";
import Warning from "../warning/Warning";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateName } from "../../redux/userSlice";
export default function Update() {

  const name = useSelector(state => state.user.name)
  const dispatch = useDispatch();
  const [username, setUsername] = useState('')

  console.log(name);

  function handleFormSubmit(e){
    e.preventDefault()

    dispatch(updateName(username))
    console.log('Disp ', name);
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
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
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
