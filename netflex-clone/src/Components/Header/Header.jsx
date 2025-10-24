import React from 'react'
import './Header.css' 
import PageviewIcon from "@mui/icons-material/Pageview";
console.log(PageviewIcon);

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/image/netflixName/Netflix_Logo_RGB.png";
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            {/* <li>Netflix</li> */}
            <li>Home</li>
            <li>Series</li>
            <li>Films</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <PageviewIcon fontSize="large" />
            </li>

            <li>
              <NotificationsNoneIcon
                style={{
                  // fontSize: 30, // makes it bigger
                  position: "relative",
                  top: "4px", // moves it slightly lower
                  color: "white", // optional: set color
                }}
              />
            </li>

            <li>
              <AccountBoxIcon fontSize="large" />
            </li>

            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
