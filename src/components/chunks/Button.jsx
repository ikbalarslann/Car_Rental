const Button = ({ content, onclick = null, type = "button" }) => {
  return (
    <button onClick={onclick} className="button" type={type}>
      {content}
    </button>
  );
};

export default Button;
