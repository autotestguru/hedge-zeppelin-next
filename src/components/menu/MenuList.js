import MenuItem from "./MenuItem";

const MenuList = ({ show = false, listMeniItems, onClick }) => {
  return (
    <div className={show ? "menu-list show" : "menu-list"}>
      {listMeniItems.map((item) => (
        <MenuItem key={item.id} onClick={onClick.bind(this, item.id)}>
          {item.name}
        </MenuItem>
      ))}
    </div>
  );
};

export default MenuList;
