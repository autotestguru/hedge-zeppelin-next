import Button from "../common/Button";
import { useState } from "react";
import { Config } from "../../constants/Config";

const ContactUs = () => {
  const tgLink = "https://t.me/OurTGURL";
  const fbLink = "https://www.facebook.com/OurFabebookPage/";
  const twLink = "https://twitter.com/OurTwitterPage";
  const instaLink = "https://www.instagram.com/OurInstaPage/";

  const emailFormat = {
    fullName: "",
    emailAddress: "",
    message: "",
  };

  const [emailData, setEmailData] = useState(emailFormat);

  const sendGridSendEmail = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    sendGridSendEmail();
    console.log(emailData);
  };

  const dataChangeHandler = (event) => {
    setEmailData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="contact-container" id="contact-us">
      <div className="tok-title">Contact Us</div>
      <div className="contact-sections">
        <div className="info-links">
          <h3>QUICK LINKS</h3>
          <div className="divider" />
          <div className="social-conatiner">
            <div
              className="social-item"
              onClick={() => window.open(tgLink, "_blank")}
            >
              <img src="/telegram.png" className="social-img" alt="Telegram" />
              <h3 className="img-desc">{tgLink}</h3>
            </div>
            <div
              className="social-item"
              onClick={() => window.open(fbLink, "_blank")}
            >
              <img src="/facebook.png" className="social-img" alt="Facebook" />
              <h3 className="img-desc">{fbLink}</h3>
            </div>
            <div
              className="social-item"
              onClick={() => window.open(fbLink, "_blank")}
            >
              <img
                src="/twitter.png"
                onClick={() => window.open(twLink, "_blank")}
                className="social-img"
                alt="Twitter"
              />
              <h3 className="img-desc">{twLink}</h3>
            </div>
            <div
              className="social-item"
              onClick={() => window.open(instaLink, "_blank")}
            >
              <img
                src="/instagram.png"
                onClick={() =>
                  window.open("https://www.instagram.com/cmccoin.io/", "_blank")
                }
                className="social-img"
                alt="Instagram"
              />
              <h3 className="img-desc">{instaLink}</h3>
            </div>
          </div>
        </div>
        <div
          className={
            Config.enableSendGrid ? "email-sec" : "email-sec sendemail-disabled"
          }
        >
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form-style">
              <input
                type="text"
                placeholder="Enter full name"
                className="info-input"
                name="fullName"
                value={emailData.fullName}
                onChange={dataChangeHandler}
                required
              />
              <input
                type="email"
                placeholder="Enter email address"
                className="info-input"
                name="emailAddress"
                value={emailData.emailAddress}
                onChange={dataChangeHandler}
                required
              />
              <textarea
                placeholder="Enter message here"
                type="text"
                className="info-input textarea"
                name="message"
                value={emailData.message}
                onChange={dataChangeHandler}
                required
              />
              <div className="email-action-container">
                <Button>Send Email</Button>
              </div>
            </form>
          </div>
          {!Config.enableSendGrid && (
            <div className="not-available-function">
              We are working on enabling email support. Please visit our socials
              links in the meantime.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
