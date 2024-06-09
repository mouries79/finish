import Header from './Header';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow, Pagination]);

function Student() {
  return (
    <div>
      <Header title="TƏLƏBƏ" />
      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <img src="imgs/thik.jpg" alt="" />
          </div>
          <div className="blog-right">
            <h3>Tələbə Həmkarlar İttifaqı Komitəsi</h3>
            <p>Azərbaycan Dövlət Neft və Sənaye Universitetinin Tələbə Həmkarlar İttifaqı Komitəsinin Rəyasət Heyəti
              17 nəfərdən, o cümlədən, Sədr və müvafiq olaraq 7 fakültə sədrindən ibarətdir.
              Universitetdə təhsil alan bütün tələbələr THİK-nin üzvüdür.
              Tələbə Həmkarlar İttifaqı Komitəsi tələbələrin hüquqlarını qoruyan yeganə təşkilatdır. THİK
              universitetdə tələbələri ictimai işlərə cəlb edərək bu istiqamətdə formalaşmalası, yataqxana ilə
              təmin olunmalası, universitetin daxili nizam-intizam qaydalarına riayət etməsi, tələbələrin asudə
              vaxtlarının dəyərləndirilməsi, yay düşərgələrinin təşkili, universitetin ictimai həyatı və elmi
              cəhətdən fərqlənən THİK fəallarının mükafatlandırılması istiqamətində fəaliyyət göstərir.</p>
          </div>
        </div>
      </section>
      <section className="social">
        <h2 className="social-activity">SOSİAL FƏALİYYƏTLƏR</h2>
        <div className="row">
          <div className="blog-left">
            <img src="imgs/reqs.jpg" alt="" />
          </div>
          <div className="blog-right">
            <p>Universitetin nəzdində 12 idman növünü özündə birləşdirən (futbol, voleybol, handbol, basketbol,
              cüdo, sərbəst güləş, yunan-roma güləşi, masaüstü tennis, şahmat, dama və s.) idman klubu fəaliyyət
              göstərir. Bununla yanaşı, universitetin nəznində 51 illik tarixə malik olan və özfəaliyyət
              kollektivləri
              arasında yeganə “Xalq ansamblı” adına layiq görülmüş “Gənclik” Mahnı və Rəqs ansamblı fəaliyyət
              göstərir. Ansamblın Avropanın bir sıra ölkələrində (Almaniya, Moldova, Ukrayna, Türkiyə), habelə
              Koreyada keçirilən festivallarda ölkəmizi və universiteti ən yüksək səviyyədə təmsil edib və vətənə
              yüksək nailiyyətlərlə qayıdıb. Ansambl iştirak etdiyi bütün ölkədaxili festivallarda ya qalib, ya da
              ikinci yerə layiq görülüb. “Gənclik” Mahnı və Rəqs ansamblı 2016-cı ildə professionallar arasında
              ölkə birincisi adına layiq görülüb.</p>
          </div>
        </div>
        <div className="row">
          <div className="blog-right">
            <p>Universitetin nəzdində ADNSU Teatr Klubu (ATK) da fəaliyyət göstərir. İstedadlı tələbələr sistematik
              olaraq qurduqları tamaşaları universitet ictimaiyyətinə təqdim edirlər. “Maqnat” intellektual klubu
              və “ADNSU Debat Klubu” da fəaliyyət göstərir ki, bu da tələbələrimizin intellektual baxımdan inkişaf
              etməsinə öz töhfəsini verir. “Maqnat” intellektual klubu özündə “Kim? Harada? Nə Zaman?”, “Brain
              Ring” və “Xəmsə” turnirlərində iştirak edən komandaları birləşdirir və müntəzəm olaraq universitet
              daxilində intellektual yarışların təşkil olunmasını təmin edir. “Debat Klubu” tələbələrimizə səlis
              və aydın nitqi formalaşdırmağa və onu əsaslandırmaqlarına köməklik edir, həftəsonları daxili
              çempionatlar keçirir və eyni zamanda da ölkədaxili turnirlərdə iştirak edərək yüksək nailiyyətlər
              qazanır.</p>
          </div>
          <div className="blog-left" id="right">
            <img src="imgs/debat.jpg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="blog-left">
            <img src="imgs/azneft.jpg" alt="" />
          </div>
          <div className="blog-right">
            <p>2016-cı ildən Universitetdə “Şən və Hazırcavablar Klubu” (KVN) da fəaliyyət göstərir. Yeni
              yaranmasına baxmayaraq ki, “AzNeft” komandamız artıq ölkə çempionu adına layiq görülüb.</p>
          </div>
        </div>
      </section>
      <h2>ADNSU YATAQXANASI</h2>
      <section className="admit" id="univerium">
        <h1>Univeriuma Xoş Gəlmisiniz - Müasir və dəbli tələbə həyatı!</h1>
        <p>Tələbə həyatı “Univerium”dakı qədər möhtəşəm olmamışdı. Tam təchiz olunmuş otaqlarımızda sizə şəhərin mərkəzi
          bir yerində, ən müasir tələblərə cavab verən, stimul verici və təhlükəsiz mühitdə müstəsna yaşayış təcrübəsi
          üçün müxtəlif imkanlar təqdim olunur.
          “Univerium”da sizin bütün ehtiyac və gözləntiləriniz nəzərə alınmışdır. Otaqlar tam döşənmiş və mebelli olub
          olduğunuz yerdən asılı olmayaraq sizin köçməyinizi asanlaşdıracaqdır. Aylıq kirayə qiymətlərinə kondisoner,
          yüksək sürətli internet və wi-fi, məişət və sosial xidmətlər, bütün əlavə imkanlardan pulsuz istifadə, poçt
          xidməti, otaqların və yataq dəstlərinin təmizliyi daxildir.
          Əlavə olaraq tələbə yeməkxanamızın dadlı yeməklərindən də yararlana bilmək üçün aylıq yemək paketi də əldə
          edə bilərsiniz. Sizə pulsuz yüksəksürətli internet, fərdi və qruplarla iş otaqları, 24 saat təhlükəsizlik,
          açıq terras, kinoteatr, mükəmməl imkanlara sahib fines zalı, akustik musiqi otaqları, oyun otaqları,
          basketbol və meydançası, tələbə yeməkxanası və yemək otaqları və alt mərtəbədə yerləşən restoranlar, kafelər
          və digər möhtəşəm imkanlar təklif edirik. Hər mərtəbədə yerləşən və internetlə təmin olunmuş ümumi iş
          otaqlarında siz dərslərinizlə məşğul ola və ya sadəcə dincələ bilərsiniz. Bundan başqa hər bir tələbə 3 qat
          təhlükəsizliyinizi təmin edən elektron giriş kartlarına sahib olacaqlar: Əsas giriş qapısında, mərtəbə
          girişlərində və ya liftlərdə, otaqların qapısında. Əlavə olaraq yataqxananın bütün girişlərində 24 saat
          təhlükəsiz təmin ediləcəkdir.
          Sizi lazım olan bütün yaşayış imkanları ilə təmin edən və layiq olduğunuz bir tələbə həyatı yaşamanız üçün
          bir fürsət axtarışındasınızsa elə bu gün bizə müraciət edin!</p>
      </section>
      <section className="slide">
        <h2>Qalereya</h2>
        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="imgs/univ1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="imgs/univ2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="imgs/univ3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="imgs/univ4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="imgs/univ5.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="imgs/univ6.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="imgs/univ7.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  )
}
export default Student;