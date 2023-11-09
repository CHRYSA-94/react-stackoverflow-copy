import { useState } from "react";
import logo from "../../assets/stack_overflow.png";

function Header() {
  const headerMenu = ["About", "Products", "For Teams"];
  const listItems = headerMenu.map((item, index) => (
    <span key={index} className="menu-item">
      {item}
    </span>
  ));
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="header-container">
        <div className="row start align-items-center">
          <h1 className="logo">
            <img
              src={logo}
              alt="Stack Overflow"
              style={{
                height: "45px",
              }}
            />
            stack<b>overflow</b>
          </h1>
          <button className="products-btn">Products</button>
          <div>
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={handleSearch}
            />
            <i className="fa fa-search search-icon"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
