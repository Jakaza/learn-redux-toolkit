import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div>Redux</div>
        <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
        <div>Jakaza</div>
      </div>
    </>
  );
}
