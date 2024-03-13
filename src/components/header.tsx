const Header = () => {
  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src="https://www.algebra.hr/cjelozivotno-obrazovanje/wp-content/uploads/sites/3/2021/10/Algebra_znakic.png"
          alt="Algebra Logo"
        />
        <div className="header__nav">
          <a target="_blank" className="link" href="https://www.algebra.hr/">
            ABOUT
          </a>
          <a
            target="_blank"
            className="link"
            href="https://www.algebra.hr/karijera-u-algebri/"
          >
            CAREER
          </a>
          <a
            target="_blank"
            className="link"
            href="https://www.algebra.hr/naslovnica/kontakt/"
          >
            REACH OUT
          </a>
        </div>
      </header>
    </>
  );
};
export default Header;
