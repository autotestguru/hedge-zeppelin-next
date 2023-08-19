import Button from "../common/Button";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import MenuList from "../menu/MenuList";
import CurrencyOptions from "../common/currencyOptions/CurrencyOptions";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showCurOpts, setShowCurOpts] = useState(false);

  const toggleBuyMenu = () => {
    setShowCurOpts(!showCurOpts);
  };

  const onMenuPress = () => {
    setExpanded(!expanded);
  };

  let listMenuItems = [
    { id: "whatisthis", name: "What is this" },
    { id: "tokenomics", name: "Tokenomics" },
    { id: "offering", name: "Our offering" },
    { id: "roadmap", name: "Roadmap" },
    { id: "team", name: "Our Team" },
    { id: "next", name: "What's happening" },
    { id: "contact-us", name: "Contact Us" },
  ];

  const menuClickHandler = (locator) => {
    const section = document.querySelector("#" + locator);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setExpanded(false);
  };

  return (
    <>
      <div
        className="navbar-container"
        onClick={() => {
          expanded && setExpanded(!expanded);
        }}
      >
        <div className="banner-logo">
          <img
            src="/hd_nav_logo.png"
            style={{ width: "80px", height: "20%" }}
            alt="Banner"
          />
        </div>
        <div className="nav-links">
          <ul>
            {listMenuItems.map((item) => (
              <li key={item.id} onClick={() => menuClickHandler(item.id)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-buttons">
          <Button outlined={true} onClick={toggleBuyMenu}>
            Buy HZEP
          </Button>
          <CurrencyOptions
            showCurOpts={showCurOpts}
            toggleMenu={toggleBuyMenu}
          />
        </div>
        <div className="menu-button">
          <Hamburger
            color="#ffffff"
            toggled={expanded}
            onToggle={onMenuPress}
          />
        </div>
      </div>
      <MenuList
        show={expanded}
        listMeniItems={listMenuItems}
        onClick={menuClickHandler}
      />
    </>
  );
};

export default Navbar;
