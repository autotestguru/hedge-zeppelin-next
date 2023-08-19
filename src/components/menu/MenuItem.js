const MenuItem = ({ children, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick}>
      {children}
    </div>
  );
};

export default MenuItem;
