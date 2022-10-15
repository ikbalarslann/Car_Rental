const Button = ({ content, onclick = null, type = "button" }) => {
  return (
    <button onClick={onclick} className="button">
      {content}
    </button>
  );
};

export default Button;
