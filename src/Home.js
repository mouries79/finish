import { Link } from 'react-router-dom';
import { useState } from 'react';
function Home() {
    const [showMenu, setShowMenu] = useState(false);
    
    function menuClick(){
        setShowMenu(!showMenu)
    }
    return (
        <div>
            <section className="header">
                <nav>
                    <img src="imgs/logo.png" className="logo" alt="" />
                    <div style={ showMenu ? {right:'0px'} : {right:'-200px'}} className="nav-links" id="navLinks">
                    <i onClick={menuClick} className="fa-solid fa-xmark" />
                        <div>
                            <Link to="/">
                                ANA SƏHİFƏ
                            </Link>
                            <Link to="/about">
                                HAQQIMIZDA
                            </Link>
                            <Link to="/action">
                                AKADEMİK FƏALİYYƏT
                            </Link>
                            <Link to="/student">
                                TƏLƏBƏ
                            </Link>
                            <Link to="/contact">
                                ƏLAQƏ
                            </Link>
                        </div>
                    </div>
                    <i onClick={menuClick} className="fa-solid fa-bars"></i>
                </nav>
                <div className="text-box">
                    <h1>Azərbaycan Dövlət Neft və Sənaye Universiteti</h1>
                    <Link to="/about" className="hero-btn">
                        Əlavə məlumat
                    </Link>
                </div>
            </section>
            <section className="course">
                <h1>Akademik Səviyyələr</h1>
                <div className="row">
                    <div className="course-col">
                        <h3>Bakalavr</h3>
                        <p>ADNSU-da ali təhsilin hər 3 səviyyəsində – bakalavriat, magistratura və doktorantura səviyyələrində kadr hazırlığı həyata keçirilir. Universitetdə təhsilin keyfiyyətinin yaxşılaşdırması üçün universitetdə 7 fakültə və 24 kafedra fəaliyyət göstərir.
                        </p>
                    </div>
                    <div className="course-col">
                        <h3>Magistratura</h3>
                        <p>Hal-hazırda ADNSU-da 30 ixtisas və 51 ixtisaslaşmalar üzrə magistr hazırlığı aparılır. I kursda təhsil alanların sayı 1030, II kursda – 819. Təhsilin növbəti ilinə qalanların sayı – 77 nəfərdir. I kursda 73, II kursda isə 82 akademik qrup mövcuddur.</p>
                    </div>
                    <div className="course-col">
                        <h3>Doktorantura</h3>
                        <p>Fəlsəfə və Elmlər doktoru proqramları üzrə Doktoranturaya qəbulu planlaşdırır və qəbul prosesini həyata keçirir. Doktorant və dissertantların dissertasiya mövzularının Əlaqələndirmə şuralarına göndərilməsi və təsdiq edilməsinə rəhbərlik edir.</p>
                    </div>
                </div>
            </section>
            <section className="campus">
                <h1>Universitet Həyatı</h1>
                <div className="row">
                    <div className="campus-col">
                        <img src="imgs/kitabxana.jpg" alt="" />
                        <img src="imgs/kitabxana.1jpg.jpeg" className="second-img" alt="" />
                        <div className="layer">
                            <h3>AZİİ Elektron Kitab Evi</h3>
                        </div>
                    </div>
                    <div className="campus-col">
                        <img src="imgs/itclub.jpg" alt="" />
                        <img src="imgs/itclub1.jpg" className="second-img" alt="" />
                        <div className="layer">
                            <h3>Azii İT Academy</h3>
                        </div>
                    </div>
                    <div className="campus-col">
                        <img src="imgs/eazistart1.jpg" alt="" />
                        <img src="imgs/eazistart.jpg" className="second-img" alt="" />
                        <div className="layer">
                            <h3>eazi START</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="facilities">
                <h1>İmkanlarımız</h1>
                <div className="row">
                    <div className="facilities-col">
                        <img src="imgs/yataqxana.jpg" alt="" />
                        <h3>Müasir və dəbli tələbə həyatı</h3>
                        <p>“Univerium”da sizin bütün ehtiyac və gözləntiləriniz nəzərə alınmışdır. </p>
                    </div>
                    <div className="facilities-col">
                        <img src="imgs/kitab.jpeg" alt="" />
                        <h3>AZİİ Elektron Kitab Evi</h3>
                        <p>Kitabxana 2018-ci ilin dekabr ayından Azİİ e Kitab Evi adı ilə fəaliyyətini davam etdirir.</p>
                    </div>
                    <div className="facilities-col">
                        <img src="imgs/bufet.jpg" alt="" />
                        <h3>Dadlı və sağlam qidalar</h3>
                        <p>Yeni təmir olunmuş yeməkxana tələbə və müəllimlərin istifadəsinə verilib.</p>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <h1>Tələbələrimizin rəyləri</h1>
                <div className="row">
                    <div className="testimonial-col">
                        <img src="imgs/user1.jpg" alt="" />
                        <div>
                            <p>Mən bu universitetə daxil olarkən çox həyəcanlı və sevincli idim, çox şad oldum ki ADNSU-da 4 il bakalavr təhsilimi qırmızı diplomla bitirdim. Sevirəm sizləri. </p>
                            <h3>Aysun Əliyeva</h3>
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star-half-stroke" />
                        </div>
                    </div>
                    <div className="testimonial-col">
                        <img src="imgs/user2.jpg" alt="" />
                        <div>
                            <p>LSevimli Universitet və onun kollektivi çox möhtəşəm bir təhsil ocağığı</p>
                            <h3>Davud Ağayev</h3>
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta">
                <h1>Beynəlxalq Əməkdaşlıq Şöbəsi</h1>
                <Link to="/contact" className="hero-btn">
                    ƏLAQƏ
                </Link>
            </section>
        </div>
    )
}
export default Home;