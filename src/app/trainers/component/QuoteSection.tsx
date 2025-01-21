import React from "react";
import Success_Image from "../../../../public/images/trainers_success_image.png";
import Quote_left from "../../../../public/images/quote_left_icon.png";
import Quote_right from "../../../../public/images/quote_right_icon.png";
import Image from "next/image";

const QuoteSection = () => {
  return (
    <section className="quote_section">
      <div className="container">
        <div className="row" data-aos="fade-right">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="quote_content">
              <h2>
                “SUCCESS USUALLY COMES TO THOSE WHO ARE TOO BUSY TO BE LOOKING
                FOR IT.”
              </h2>
              <div className="quote_content_wrapper">
                <div className="quote_wrapper">
                  <h6>ANDREW JAMES</h6>
                  <span>Fitness Trainer</span>
                  <figure className="quote_image mb-0">
                    <Image
                      src={Success_Image}
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="quote_left_icon left_icon mb-0">
          <Image
            src={Quote_left}
            alt=""
            className="img-fluid"
          />
        </figure>
        <figure className="quote_right_icon right_icon mb-0">
          <Image
            src={Quote_right}
            alt=""
            className="img-fluid"
          />
        </figure>
      </div>
    </section>
  );
};

export default QuoteSection;
