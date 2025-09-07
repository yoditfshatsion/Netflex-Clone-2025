import React from 'react'
import './Footer.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          {/* <div> */}
          <div>
            <ul>
              <li>Audio Description</li>
              <li> Investor Relations</li>
              <li> Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Centre</li>
              <li> Jobs</li>
              <li>Cookie Preference</li>
            </ul>
          </div>
          {/* </div> */}
          {/* </div> */}

          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Centre</li>
              <li> Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* </div>   */}

        <div className="copy_write">© 1997 - 2025 Netflix, Inc.</div>
      </div>
    </div>
  );
 }
    


export default Footer
















//  <div className="service_code">Service Code</div>