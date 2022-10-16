const Link = ({ content, href = "#", onClick = null }) => {
  return (
    <a onClick={onClick} className="link" href={href}>
      {content}
    </a>
  );
};

export default Link;
