import "./styles.css";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftbar/LeftBar";
import Update from "./components/update/Update";
import RightBar from "./components/rightbar/RightBar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <LeftBar />
        <Update />
        <RightBar />
      </main>
    </div>
  );
}
