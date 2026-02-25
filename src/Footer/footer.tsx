
export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">Miloš Petrović</p>
        <p className="footer__copy">© {year}. Built with React & TypeScript.</p>
        <a className="footer__back" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};