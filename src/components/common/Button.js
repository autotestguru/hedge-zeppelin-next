const Button = ({ children, outlined = false, onClick }) => {
  return (
    // <div>
    <button className={[outlined ? "outlined" : undefined]} onClick={onClick}>
      <span></span>
      {children}
      <span></span>
    </button>
    // </div>
  );
};

export default Button;
