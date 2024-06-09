import Header from './Header';
import Swal from 'sweetalert2'
import { useState} from 'react';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameIsValid, setNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [subjectIsValid, setSubjectIsValid] = useState(true);
  const [messageIsValid, setMessageIsValid] = useState(true);

  function handleSubmit (e){
    e.preventDefault();
    !name ? setNameIsValid(false) : setNameIsValid(true)
    !email ? setEmailIsValid(false) : setEmailIsValid(true)
    !message ? setMessageIsValid(false) : setMessageIsValid(true)
    !subject ? setSubjectIsValid(false) : setSubjectIsValid(true)

    if(!name || !email || !message || !subject ){
      return;
    }
    Swal.fire({
      title: 'Mesajınız göndərildi!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }
  return (
        <div>
          <Header title="ƏLAQƏ" />
          <section className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12157.470495914025!2d49.8485665!3d40.3785442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53a5c1e7cc11c36f!2zQXrJmXJiYXljYW4gRMO2dmzJmXQgTmVmdCB2yZkgU8mZbmF5ZSBVbml2ZXJzaXRldGk!5e0!3m2!1saz!2s!4v1652382732265!5m2!1saz!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </section>
          <section className="contact-us">
            <div className="row">
              <div className="contact-col">
                <div>
                  <i className="fa-solid fa-house" />
                  <span>
                    <h5>ÜNVAN</h5>
                    <p>AZ1010, Bakı şəhəri
                      Azadlıq prospekti, 34 </p>
                  </span>
                </div>
                <div><i className="fa-solid fa-phone" />
                  <span>
                    <h5>ƏLAQƏ NÖMRƏSİ</h5>
                    <p>(+994 12) 598 43 10 </p>
                  </span>
                </div>
                <div>
                  <i className="fa-solid fa-envelope" />
                  <span>
                    <h5>E-POÇT</h5>
                    <p>asoiu.isd@asoiu.edu.az</p>
                  </span>
                </div>
              </div>
              <div className="contact-col">
                <form 
                  onSubmit={handleSubmit}>
                  <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Ad, soyadınızı daxil edin" className={`${nameIsValid ? "" : "border-red"}`}  />
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="E-poçt ünvanınızı daxil edin" className={`${emailIsValid ? "" : "border-red"}`}  />
                  <input value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" name="subject" placeholder="Mövzunu daxil edin" className={`${subjectIsValid ? "" : "border-red"}`}  />
                  <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={8} name="message" placeholder="Mətn"  defaultValue={""} className={`${messageIsValid ? "" : "border-red"}`} />
                  
                  <button className="hero-btn red-btn send">GÖNDƏR</button>
                </form>
              </div>
            </div>
          </section>
        </div>
  );
}
export default Contact;
