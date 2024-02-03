import styles from "./component.module.css";
//import PropTypes from "prop-types";
//import { useState } from "react";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.startBootstrap}>
        <span>Start Bootstrap</span>
      </div>
      <div className={styles.signUpButton}>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
};
const LandingContent = () => {
  return (
    <div className={styles.LandingContent}>
      <h1>Generate more leads</h1>
      <h1>with a professional</h1>
      <h1>Landing page!</h1>
      <div>
        <input type="text" placeholder="   Email Address"></input>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

const FeaturesContent = () => {
  return (
    <div className={styles.features}>
      <div>
        <img
          src="https://agilitydigital.com.au/wp-content/uploads/2021/05/Icon-Back-office-270x300.png"
          alt="issue with img"
        ></img>
        <h1>Fully Responsive</h1>
        <p>This theme will look great on any</p>
        <p>device, no matter the size!</p>
      </div>
      <div>
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/bootstrap-icon-logo-png-transparent.png"
          alt="issue with img"
        ></img>
        <h1>Bootstrap 5 Ready</h1>
        <p>Featuring the latest build of the new</p>
        <p>Bootstrap 5 framework!</p>
      </div>
      <div>
        <img
          src="https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/Ease_of_Access.png"
          alt="issue with img"
        ></img>
        <h1>Easy to Use</h1>
        <p>Ready to use with your own content, </p>
        <p>or customize the source files!</p>
      </div>
    </div>
  );
};

const FullResponsiveContent = () => {
  return (
    <div className={styles.fullresponsive}>
      <div>
        <h1>FullResponsiveContent</h1>
        <p>When you use a theme created by Start</p>
        <p>Bootstrap, you know that the theme will</p>
        <p>look great on any device, whether its a</p>
        <p>phone, tablet, or desktop the page will</p>
        <p>behave responsively!</p>
      </div>
      <div>
        <img
          src="https://live.staticflickr.com/1422/4731421324_2901463feb_n.jpg"
          alt="issue with image"
        ></img>
      </div>
    </div>
  );
};

const BootstrapContent = () => {
  return (
    <div className={styles.fullresponsive}>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/335/579/non_2x/desktop-source-code-and-wallpaper-by-coding-and-programming-free-photo.jpg"
          alt="issue with image"
        ></img>
      </div>
      <div>
        <h1>Updated For Bootstrap 5</h1>
        <p>Newly improved, and full of great utility</p>
        <p>classes, Bootstrap 5 is leading the way</p>
        <p>in mobile responsive web</p>
        <p>development! All of the themes onl</p>
        <p>Start Bootstrap are now using</p>
        <p>Bootstrap 5!</p>
      </div>
    </div>
  );
};

const AdvatageContent = () => {
  return (
    <div className={styles.fullresponsive}>
      <div>
        <h1>Easy to Use & Customize</h1>
        <p>Landing Page is just HTML and CSS with a</p>
        <p>splash of SCSS for users who demand some</p>
        <p>deeper customization options. Out of the</p>
        <p>box, just add your content and images, and</p>
        <p>your new landing page will be ready to go!</p>
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.A5sU83sBUQzGO6ZCKNOpkAAAAA?rs=1&pid=ImgDetMain"
          alt="issue with image"
        ></img>
      </div>
    </div>
  );
};

const PeopleContent = () => {
  return (
    <div className={styles.People}>
      <h1>What people are saying...</h1>
      <div className={styles.Peoplecontent}>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/beautiful-young-businesswoman-working-desk-office-beautiful-girl-woman-employee-vol-43_1004791-1698.jpg"
            alt="issue with image"
          ></img>
          <h2>Margaret E.</h2>
          <p>
            <q>This is fantastic! Thanks so much guys!</q>
          </p>
        </div>
        <div>
          <img
            src="https://blog.granted.com/wp-content/uploads/2016/06/great_employee-compressed.jpg"
            alt="issue with image"
          ></img>
          <h2>Fred S.</h2>
          <p>
            <q>
              Bootstrap is amazing. Ive been using it <br /> to create lots of
              super nice landing <br />
              pages.
            </q>
          </p>
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.aE2j5ZKGSqLg490z9UV2xgHaE7?rs=1&pid=ImgDetMain"
            alt="issue wiht image"
          ></img>
          <h2>Sarah W.</h2>
          <p>
            <q>
              Thanks so much for making these free <br />
              resources available to us!
            </q>
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactContent = () => {
 return (
    <div style={{height: "300px"}}className={styles.LandingContent}>
      <h2>Ready to get started? Sign up now!</h2>
      <div style={{marginTop:"5px"}}>
        <input type="text" placeholder="   Email Address"></input>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <>
      <Topbar />
      <LandingContent />
      <FeaturesContent />
      <FullResponsiveContent />
      <BootstrapContent />
      <AdvatageContent />
      <PeopleContent />
      <ContactContent />
    </>
  );
};

export default MainContent;
