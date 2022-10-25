const Header = () => {
  return (
    <>
      <header className="header__wrapper">
        <div className="container">
          <div className="header">
            <div className="header__logo">
              <span className="header__logo-white">LoremIpsum.</span>
              <span className="header__logo-blue">Net</span>
            </div>

            <menu className="header__menu">
              <li className="header__menu-li">
                <a className="header__menu-a" href="#">
                  Бизнес
                </a>
              </li>
              <li className="header__menu-li">
                <a className="header__menu-a" href="#">
                  О нас
                </a>
              </li>
              <li className="header__menu-li">
                <a className="header__menu-a" href="#">
                  Цены
                </a>
              </li>
              <li className="header__menu-li">
                <a className="header__menu-a" href="#">
                  Оформить заказ
                </a>
              </li>
            </menu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
