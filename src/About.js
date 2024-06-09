import Header from './Header';
import { Link } from 'react-router-dom';
function About() {
  return (
    <div>
      <Header title="HAQQIMIZDA" />
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>BİZ NƏ EDİRİK?</h1>
            <p>Biz gənclərin yüksək səviyyədə təhsilə yiyələnmələrini təmin etmək məqsədi ilə fəaliyyət göstəririk.
              Biz hər zaman tələbələrimizdən tənqidi yanaşmağı, məntiqi düşünməyi, yaradıcı fəaliyyət göstərməyi
              və mədəni şəkildə yaşamağı tələb edirik. Universitetimiz xalqımıza və bütün dünyaya fayda verəcək,
              inkişafı sürətləndirəcək, iqtisadiyyatı gücləndirəcək səviyyədə araşdırma imkanı və təhsili təmin
              etməklə fəaliyyətini davam etdirir.</p>
            <a href className="hero-btn red-btn">Daha ətraflı</a>
          </div>
          <div className="about-col">
            <img src="imgs/haqqimizda.jpg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="about-col">
            <img src="imgs/student.jpg" alt="" />
          </div>
          <div className="about-col">
            <h1>BİZ KİMİK?</h1>
            <p>Tələbələrimiz, fakültələrimiz və işçi heyətimiz həyatın hər sahəsini, bir-birindən fərqli düşüncələri, ölkəmizin və dünyanın müxtəlif yerlərini təmsil edirlər. Çünki böyük bir universitetdə olmağın ən gözəl tərəflərindən biri təhsil almaq, işləmək, əylənmək, yeniliklərlə tanış olmaq, fikir alış-verişi etmək və heç vaxt olmadığın yerlərdən gələn insanlarla ünsiyyət qurmaq şansına sahib olmaqdır. Universitetimiz müxtəlifliklərimizlə bərabər ortaq yönlərimizin tapılması və bir-birimizdən öyrənərək birlikdə gələcəyimizi daha parlaq etməyin marağındadır.</p>
            <a href className="hero-btn red-btn">Daha ətraflı</a>
          </div>
        </div>
        <div className="row">
          <div className="about-col">
            <h1>TARİX</h1>
            <p>10 noyabr 1887-ci ildə Bakı şəhər duması tərəfindən Bakıda texniki məktəbin yaradılması haqqında qərar çıxarılıb. 1896-cı ildə texniki məktəb “Bakı aşağı səviyyəli texniki məktəb”ə çevrilib. 1896-1905-ci illər ərzində bu məktəbin mexanika şöbəsi üzrə 50 nəfər, inşaat şöbəsi üzrə isə 55 nəfər məzun buraxılışı olub.</p>
            <a href className="hero-btn red-btn">Daha ətraflı</a>
          </div>
          <div className="about-col">
            <img src="imgs/tarix.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="admit" id="admit">
        <h1>QƏBUL</h1>
        <p>Bizim tələbələr savadlı və inkişafa meyllidirlər. Biz onların hər uğurunu dəstəkləyir və bundan məmnunluq duyuruq. Tələbələrimiz üçün həm universitet daxilində həvəsləndirici təhsil şəraitinin yaradılmasını əldə etmək, həm də kənar fəaliyyətlərində faydalı vaxt keçirmələrini təmin etmək məqsədi ilə bütün imkanlarımızla xidmət göstəririk.</p>
        <Link to="/contact" className="hero-btn">
          ƏLAQƏ
        </Link>
      </section>
    </div>
  );
}

export default About;
