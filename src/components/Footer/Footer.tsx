const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__flexS">
            <div className="footer__flexA">
              <span className="footer__copyright">
                © 2018 «LoremIpsum.net» Все права защищены.
              </span>
            </div>
            <div className="footer__flexB">
              <div className="footer__flexItem">
                <img src="./images/footer__icon-qiwiwallet.svg" alt="" />
                <span className="footer__paywallets">Qiwi wallet</span>
              </div>
              <div className="footer__flexItem">
                <img src="./images/footer__icon-yandexmoney.svg" alt="" />
                <span className="footer__paywallets">Yandex Money</span>
              </div>
              <div className="footer__flexItem">
                <img src="./images/footer__icon-webmoney.svg" alt="" />
                <span className="footer__paywallets">Web Money</span>
              </div>
            </div>
            <div className="footer__flexC">
              <div className="footer__flexItem">
                <img src="./images/footer__icon-postal-envelope.svg" alt="" />
                <a className="footer__link" href="mailto:info@ipsum228.com">
                  info@ipsum228.com
                </a>
              </div>
              <div className="footer__flexItem">
                <img src="./images/footer__icon-vk.svg" alt="" />
                <a className="footer__link" href="#">
                  Мы вконтакте
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
