const FooterList = ({ children, title }) => {
  return (
    <article>
      <h5 className="text-white text-lg font-semibold mb-3">{title}</h5>
      {children}
    </article>
  );
};

export default FooterList;
