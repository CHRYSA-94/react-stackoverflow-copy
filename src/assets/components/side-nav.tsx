import { useState } from "react";
import { NavLink } from "react-router-dom";

function SideNav() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Questions");
  const groupItems = [
    { categoryGroup: ["Home", "Questions", "Tags"] },
    { categoryGroup: ["Saves", "Users", "Companies"] },
  ];
  const categoryItems = [
    { categoryGroup: "COLLECTIVES", items: ["Explore Collectives"] },
    { categoryGroup: "LABS", items: ["Discussions"] },
    { categoryGroup: "TEAMS" },
  ];

  const handleClick = (item: any) => {
    setSelectedMenuItem(item);
  };

  const singleItems = groupItems.map((groupItem, index) => {
    return (
      <div key={index} className="side-nav-group">
        {groupItem.categoryGroup?.map((item, index) => (
          <NavLink
            to={`/${item.toLocaleLowerCase()}`}
            key={index}
            className={`side-nav-category-item ${
              selectedMenuItem === item ? "side-nav-item-selected" : ""
            }`}
          >
            {item}
          </NavLink>
        ))}
      </div>
    );
  });

  const itemsWithNestedItems = categoryItems.map((category, index) => {
    return (
      <div key={index} className="side-nav-group">
        <h3 className="side-nav-category-title">{category.categoryGroup}</h3>
        {category.items?.map((item, index) => (
          <h4 key={index} className="side-nav-category-item">
            {item}
          </h4>
        ))}
      </div>
    );
  });

  return (
    <>
      <div className="side-nav-container">
        {singleItems}
        {itemsWithNestedItems}
      </div>
    </>
  );
}

export default SideNav;
