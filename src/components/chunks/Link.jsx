const Link = ({ content, href = "#" }) => {
  return (
    <a className="link" href={href}>
      {content}
    </a>
  );
};

export default Link;
