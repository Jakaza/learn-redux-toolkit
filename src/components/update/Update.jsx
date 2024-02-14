import "./update.css";
import Warning from "../warning/Warning";
export default function Update() {
  return (
    <div className="update">
      <Warning message="This is a warning" />

      <form>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
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
