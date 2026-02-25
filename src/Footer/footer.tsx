import { SwanIcon } from "../SwanIcon/SwanIcon";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">
  Miloš Petrović <span className="footer__swan"><SwanIcon size={20} /></span>
</p>
        <p className="footer__copy">© {year}. Built with React & TypeScript.</p>
        <a className="footer__back" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};