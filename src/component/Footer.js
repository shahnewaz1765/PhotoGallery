import React from "react";

import '../style/bootstrap.min.css';
import '../style/footer.css';



const Footer = () => {
  return (
    <section className="foot">
      <hr className="footer-separator" />
      <section className="d-flex justify-content-evenly " >
       
          <a href="/">Follow Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Legal Notice</a>
      
      </section>
    </section>
  );
};
export default Footer;
