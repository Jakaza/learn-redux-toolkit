import { useSelector } from "react-redux";
import "./rightbarBottom.css";

export default function RightbarBottom() {
  const name = useSelector(state => state.user.name)
  return (
    <div className="rightbarBottom">
      <h1>{name}</h1>
    </div>
  );
}
