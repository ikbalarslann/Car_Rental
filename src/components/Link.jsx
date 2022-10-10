const Link = ({ content, href = "#" }) => {
  return (
    <a className="footer__company-link" href={href}>
      {content}
    </a>
  );
};

export default Link;
