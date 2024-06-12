import React from 'react'
import {Link} from 'react-router-dom'
import {FaSquareTwitter, FaSquareInstagram, FaSquareFacebook , FaLinkedin} from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer>
      <div>
        <img src='/logo.png' alt='logo'/>
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Jhalwa, Allahabad, Uttar Pradesh</li>
          <li>prayaas@iiita.ac.in</li>
          <li>094139 58192</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/donate"}>Donate</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <Link to={"https://www.facebook.com/PrayaasIIITAOfficial"}>
              {" "}
              <span><FaSquareFacebook/></span>
              {" "}
              <span>Facebook</span>
              {" "}
            </Link>
          </li>
          <li>
            <Link to={"https://www.instagram.com/prayaasiiita/"}>
              {" "}
              <span><FaSquareInstagram/></span>
              {" "}
              <span>Instagram</span>
              {" "}
            </Link>
          </li>
          <li>
            <Link to={"https://www.linkedin.com/in/prayaas-iiita-9234b217a/?original_referer=&originalSubdomain=in"}>
              {" "}
              <span><FaLinkedin/></span>
              {" "}
              <span>LinkedIn</span>
              {" "}
            </Link>
          </li>
          <li>
            <Link to={"https://x.com/prayaasiiita?lang=en"}>
              {" "}
              <span><FaSquareTwitter/></span>
              {" "}
              <span>Twitter(X)</span>
              {" "}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer