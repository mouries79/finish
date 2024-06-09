import Header from './Header';
function Action() {
  return (
    <div>
      <Header title="AKADEMİK FƏALİYYƏT" />
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
      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <img src="imgs/faculty.jpg" alt="" />
          </div>
          <div className="blog-right">
            <h3>FAKÜLTƏLƏR</h3>
            <div>
              <span>Geoloji-kəşfiyyat fakültəsi</span>
              <span>1,004</span>
            </div>
            <div>
              <span>Qaz-neft-mədən fakültəsi</span>
              <span>1730</span>
            </div>
            <div>
              <span>Kimya-texnologiya fakültəsi</span>
              <span>1161</span>
            </div>
            <div>
              <span>Neft-mexanika fakültəsi</span>
              <span>1170</span>
            </div>
            <div>
              <span>Energetika fakültəsi</span>
              <span>1042</span>
            </div>
            <div>
              <span>İT və İdarəetmə fakültəsi</span>
              <span>3612</span>
            </div>
            <div>
              <span>İqtisadiyyat və Menecment fakültəsi</span>
              <span>970</span>
            </div>
          </div>
        </div>
      </section>
      <div className="faculties">
        <h2>FAKÜLTƏLƏR HAQQINDA</h2>
        <section className="admit" id="geology">
          <h1>Geoloji-kəşfiyyat fakültəsi</h1>
          <p>Fakültədə 1 akademik, 1 AMEA-nın müxbir üzvü, 4 professor, 35 dosent, 8 baş müəllim, 10 asisstent, 26 müəllim və 21 tədris köməkçi heyyətə aid əməkdaş çalışır.Hazırda fakültədə 5 ixtisas üzrə təhsilin əyani və qiyabi şöbələrində ümumilikdə 1004  tələbə təhsil alır ki, onlardan 960 nəfəri əyani, 34 nəfər isə qiyabi şöbənin tələbəsidir.Yarandığı gündən indiyədək fakültədə 10 minlərlə mühəndis, 100–lərlə magistr hazırlanmışdır.</p>
        </section>
        <section className="admit" id="gas">
          <h1>Qaz-neft-mədən fakültəsi</h1>
          <p>ADNSU-nun aparıcı fakültələrindən biri olan Qaz-neft-mədən fakültəsində kadr hazırlığı 1920-cı ildən həyata keçirilir. 1979-cu ildən “Qaz-neft-mədən” fakültəsi adı altında fəaliyyət göstərir. Fakültənin inkişafında ADNSU-ya müxtəlif vaxtlarda rəhbərlik etmiş rektorların, görkəmli alimlərin fəal iştirakı və köməyi olub. Yarandığı gündən fakültədə 23000-dən çox neftçi-mühəndis kadrları, 5000-dən çox bakalavr və 500-dək magistr hazırlanıb.</p>
        </section>
        <section className="admit" id="chemistry">
          <h1>Kimya-texnologiya fakültəsi</h1>
          <p>Fakültədə 1 akademik, 16 professor, 64 dosent, 18 baş müəllim və assistent çalışır. Hazırda Kimya texnologiya fakültəsinin əyani şöbəsində 1012 nəfər, qiyabi şöbədə  5 nəfər təhsil alır.2016-cı ildən ADNSU rektorunun əmri ilə fakültənin nəzdində «Yeni kimyəvi materiallar və texnologiyalar» adlı elmi-tədqiqat laboratoriyası yaradılıb. Ümumilikdə fakültədə 13 professor, 4 elmlər doktoru, 68 dosent, 2 assistent və 29 laborant çalışır.</p>
        </section>
        <section className="admit" id="oil">
          <h1>Neft-mexanika fakültəsi</h1>
          <p>Hazırda fakültədə bakalavriat səviyyəsində təhsil alan əyani və qiyabi tələbələrin sayı 1248 nəfərdir, magistratura səviyyəsində 78, doktorantura səviyəsində 32 nəfər təhsil alır. Yarandığı gündən indiyədək fakültədə 10 minlərlə bakalavr, 100 – lərlə magistr mühəndis-mexanik hazırlanıb. Fakültənin 100-dək əməkdaşından 8 nəfər elmlər doktoru, professor, 50 nəfər  t.e.n.  və  t.ü.f.d., dosentdir.</p>
        </section>
        <section className="admit" id="engineering">
          <h1>Energetika fakültəsi</h1>
          <p> Yarandığı gündən indiyədək fakültədə mindən artıq yüksək ixtisaslı mütəxəssis hazırlanıb. Hazırda fakültədə bakalavr və magistr pillələrində  müvafiq olaraq 875 və 130  tələbə təhsil alır. Fakültədə III və IV kurs tələbələrinin fasiləsiz istehsalat təcrübəsi layihəsi həyata keçirilir. Hazırda fakültənin yüksək tədris göstəricilərinə malik olan 25 tələbəsi 5 müəssisədə fasiləsiz istehsalat təcrübəsi keçir. </p>
        </section>
        <section className="admit" id="it">
          <h1>İnformasiya Texnologiyaları və İdarəetmə fakültəsi</h1>
          <p>Əsası 1961-ci ildə “İstehsalat proseslərinin avtomatlaşdırılması” fakültəsinin yaranması ilə qoyulub. Bu fakültə energetika, neft-qaz və neft-kimya sahələrinin avtomatlaşdırılması, idarəolunması ilə bağlı tarixi zərurət nəticəsində yaranıb. Fakültənin yaranmasında və inkişafında xüsusi rol oynamış alim və pedaqoqlardan akademiklər İ.Ə.İbrahimov, T.M.Əliyev, AMEA-nın müxbir üzvləri R.Ə.Əliyev, Ə.Ə.Abdullayev, professorlar N.H.Fərzanə, İ.R.Əfəndiyev və başqalarını göstərmək olar.</p>
        </section>
        <section className="admit" id="management">
          <h1>İqtisadiyyat və Menecment fakültəsi</h1>
          <p>1920-ci ildə yaradılıb. Yarandığı gündən Azərbaycan sənaye müəssisələri üçün mühəndis-iqtisadçı kadrlar hazırlayıb. Hazırda fakültədə 4 ixtisas üzrə ümumilikdə 806 nəfər tələbə təhsil alır. Onlardan 713 nəfər əyani şöbədə, 93 nəfər isə qiyabi şöbədə təhsil alır. Fakültədə təhsil alan əcnəbi tələbərin sayı isə 21 nəfərdir.</p>
        </section>
      </div>
    </div>
  );
}

export default Action;
