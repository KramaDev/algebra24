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
          <a className="link" href="">
            HOME
          </a>
          <a className="link" href="/about">
            ABOUT
          </a>
          <a className="link" href="/*">
            ERROR
          </a>
        </div>
      </header>
    </>
  );
};
export default Header;
