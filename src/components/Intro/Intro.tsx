const Intro = () => {
  return (
    <>
      <div className="intro__wrapper">
        <div className="container">
          <div className="intro">
            <div className="intro__heading">
              <span className="intro__heading-p intro__heading-p_blue">
                Lorem ipsum
              </span>
              <span className="intro__heading-p">
                {" "}
                dolor sit ametconsectetur{" "}
              </span>
              <span className="intro__heading-p intro__heading-p_blue">
                adipiscing
              </span>
            </div>

            <div className="intro__text">
              <p className="intro__text-heading">
                At vero eos et accusamus et iusto odio dignissimos ducimus!
              </p>
              <ul className="intro__ul">
                <li className="intro__li">Totam rem aperiam eaque ipsa</li>
                <li className="intro__li">
                  Sit voluptatem accusantium doloremque laudantium
                </li>
                <li className="intro__li">
                  Sed ut perspiciatis, unde omnis iste natus error
                </li>
              </ul>
            </div>

            <div className="intro__buttons">
              <button className="intro__button-blue">заказать</button>
              <button className="intro__button-white">подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
