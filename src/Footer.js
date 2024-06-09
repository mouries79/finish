function Footer(){
  const fbClick = () => {
    window.open("https://www.facebook.com/Azii1920.ADNSU/");
  };
  const inClick = () => {
    window.open("https://instagram.com/asoiu_university?igshid=YmMyMTA2M2Y=");
  };
  const ldClick = () => {
    window.open("https://www.linkedin.com/school/azerbaijan-state-oil-academy/");
  };
    return(
        <section className="footer">
          <div className="icons">
            <i className="fa-brands fa-facebook" onClick={fbClick} />
            <i className="fa-brands fa-instagram" onClick={inClick}/>
            <i className="fa-brands fa-linkedin" onClick={ldClick}/>
          </div>
          <p>2024 | Bütün hüquqlar qorunur!</p>
        </section>
    )
}
export default Footer;