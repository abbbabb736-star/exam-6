import logo from "../../assets/icons/logo.svg";

import { footerCols } from "../../data/mockData";
import locationIcon from "../../assets/icons/Location.svg";
import messageIcon from "../../assets/icons/Message.svg";
import phoneIcon from "../../assets/icons/Calling.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import UnionIcon from "../../assets/icons/Union.svg";
import paysIcon from "../../assets/icons/pays.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-inner">
          <div className="footer__brand">
            <img src={logo} alt="GreenShop Logo" />
          </div>
          <div className="footer__top-items">
            <div className="footer__top-item">
              <img
                src={locationIcon}
                alt="Location"
                className="footer__top-icon"
              />
              <p className="footer__top-text">
                70 West Buckingham Ave.
                <br />
                Farmingdale, NY 11735
              </p>
            </div>
            <div className="footer__top-item">
              <img
                src={messageIcon}
                alt="Message"
                className="footer__top-icon"
              />
              <a
                href="https://t.me/a_abb7"
                target="_blank"
                rel="noreferrer"
                className="footer__top-text"
              >
                contact @a_abb7
              </a>
            </div>
            <div className="footer__top-item">
              <img src={phoneIcon} alt="Phone" className="footer__top-icon" />
              <p className="footer__top-text">
                <a href="tel:+998977555080">+998 97-755-50-80</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__middle">
        <div className="footer__middle-inner">
          <div className="footer__columns">
            <div className="footer__col">
              <h4 className="footer__col-title">My Account</h4>
              {footerCols.myAccount.map((label) => (
                <a key={label} href="#">
                  {label}
                </a>
              ))}
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Help & Guide</h4>
              {footerCols.helpGuide.map((label) => (
                <a key={label} href="#">
                  {label}
                </a>
              ))}
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Categories</h4>
              {footerCols.categories.map((label) => (
                <a key={label} href="#">
                  {label}
                </a>
              ))}
            </div>
            <div className="footer__col footer__col--social">
              <h4 className="footer__col-title">Social Media</h4>
              <div className="footer__socials">
             <a href="https://www.facebook.com/journeyabu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
  <img src={facebookIcon} alt="Facebook" />
</a>

<a href="https://www.instagram.com/journeyabu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
  <img src={instagramIcon} alt="Instagram" />
</a>

<a href="https://twitter.com/journeyabu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
  <img src={twitterIcon} alt="Twitter" />
</a>

<a href="https://www.linkedin.com/in/journeyabu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="linkedIn">
  <img src={linkedinIcon} alt="LinkedIn" />
</a>

<a href="https://t.me/journeyabu" target="_blank" rel="noopener noreferrer" aria-label="UnionI" className="Union">
  <img src={UnionIcon} alt="UnionI" />
</a>
              </div>
              <div className='footer__accept'>
                <p className='footer__accept-title'>We accept</p>
                <div className='footer__payments'>
                <img src={paysIcon} alt="Pays" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">© 2021 GreenShop. All Rights Reserved. by Abduvakhid</p>
      </div>
    </footer>
  );
}

export default Footer;
