import { useSelector } from "react-redux";
import "./navbar.css";

export default function Navbar() {
  const name = useSelector((state)=> state.user.name)
  return (
    <>
      <div className="navbar">
        <div>Redux</div>
        <div>
          <form action="">
            <input type="text" placeholder="Tyoe to search" />
          </form>
        </div>
        <div>{name}</div>
      </div>
    </>
  );
}
