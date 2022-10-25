const Ordering = () => {
  return (
    <>
      <div className="ordering">
        <div className="container">
          <p className="ordering__heading">
            Оформление{" "}
            <span className="ordering__heading ordering__heading_blue">
              {" "}
              заказа
            </span>
          </p>
          <p className="ordering__subheading-text">
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </p>

          <div className="ordering__items">
            <div className="ordering__item">
              <div className="ordering__item-icon">
                <img src="./images/icon-circle__magnifying-glass.svg" alt="" />
              </div>
              <div className="ordering__item-subtext">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="ordering__item">
              <div className="ordering__item-icon">
                <img src="./images/icon-circle__percent.svg" alt="" />
              </div>
              <div className="ordering__item-subtext">
                Сonsecteturadipiscing elit
              </div>
            </div>
            <div className="ordering__item">
              <div className="ordering__item-icon">
                <img
                  src="./images/icon-circle__document-with-plus-sign.svg"
                  alt=""
                />
              </div>
              <div className="ordering__item-subtext">
                Sed do eiusmod tempor
              </div>
            </div>
            <div className="ordering__item">
              <div className="ordering__item-icon">
                <img src="./images/icon-circle__postal-envelope.svg" alt="" />
              </div>
              <div className="ordering__item-subtext">
                Esse cillum dolore eu fugiat
              </div>
            </div>
            <div className="ordering__item">
              <div className="ordering__item-icon">
                <img src="./images/icon-circle__1amt-banknote.svg" alt="" />
              </div>
              <div className="ordering__item-subtext">
                Excepteur sint occaecat cupidatat non proident
              </div>
            </div>
          </div>

          <div className="ordering__form">
            <form method="post" action="script.js">
              <div className="ordering__form-list1">
                <select
                  className="ordering__form-list1-item"
                  name="select"
                  id=""
                >
                  <option className="ordering__form-list1-item" value="1">
                    Выберите тип системы
                  </option>
                  <option className="ordering__form-list1-item" value="2">
                    Sed ut perspiciatis
                  </option>
                  <option className="ordering__form-list1-item" value="3">
                    Nemo enim ipsam
                  </option>
                  <option className="ordering__form-list1-item" value="4">
                    Et harum quidem
                  </option>
                  <option className="ordering__form-list1-item" value="5">
                    Temporibus autem
                  </option>
                  <option className="ordering__form-list1-item" value="6">
                    Itaque earum rerum
                  </option>
                </select>
                <input
                  className="ordering__form-list1-item"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ваш e-mail"
                ></input>
                <input
                  className="ordering__form-list1-item"
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ваше имя"
                ></input>
              </div>

              <div className="ordering__form-list2">
                <div className="ordering__form-list2-flexA">
                  <div>
                    <label
                      className="ordering__form-list2-flexA-flex"
                      htmlFor="cowbell"
                    >
                      <span className="ordering__range-heading">
                        Sed ut perspiciatis, unde omnis iste natus
                      </span>
                      <span className="ordering__range-heading">75 %</span>
                    </label>
                    <div className="ordering__input-container">
                      <input
                        className="ordering__input-range"
                        type="range"
                        id="cowbell"
                        name="cowbell"
                        min="0"
                        max="100"
                        //   value="75"
                        step="1"
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="ordering__form-list2-flexB">
                  <div className="ordering__input-wrapper">
                    <input
                      name="file"
                      type="file"
                      id="ordering__input-file"
                      className="ordering__input ordering__input-file"
                      multiple
                    ></input>
                    <label
                      htmlFor="ordering__input-file"
                      className="ordering__input-file-button"
                    >
                      <span className="ordering__input-file-icon-wrapper">
                        <img
                          className="ordering__input-file-icon"
                          src="./images/icon-file.svg"
                          alt="Прикрепить файл"
                          width="25"
                        />
                      </span>
                      <span className="ordering__input-file-button-text">
                        ПРИКРЕПИТЬ ФАЙЛ
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="ordering__form-submit-btn-wrapper">
                <input
                  className="ordering__form-submit-btn"
                  type="submit"
                  value="ОТПРАВИТЬ"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordering;
