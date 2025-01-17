import React from "react";
import Image from "next/image";
import Stats1 from "../../../../public/images/stats_left_icon.png";
import Stats2 from "../../../../public/images/stats_right_icon.png";
import VideoImage from "../../../../public/images/video_img.jpg";
import VideoIcon from "../../../../public/images/video_img_icon.png";

const stats = [
  { value: 600, suffix: "K+", label: "WORKING HOURS" },
  { value: 790, suffix: "+", label: "SUCCESS PROGRAM" },
  { value: 2560, suffix: "+", label: "HAPPY CLIENTS" },
  { value: 830, suffix: "+", label: "PERFECT BODIES" },
];

const StatisticSection: React.FC = () => {
  return (
    <>
      <div className="stats_section">
        <div className="container">
          <div className="row" data-aos="fade-up">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`col-lg-3 col-md-3 col-sm-6 col-6 ${
                  index % 2 !== 0 ? "margin_left" : ""
                }`}
              >
                <div className="stats_counter_wrapper">
                  <span className="stats_rating counter">{stat.value}</span>
                  <span className="stats_plus_sign">{stat.suffix}</span>
                  <p className="mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          <figure className="stats_left_icon left_icon mb-0">
            <Image
              src={Stats1}
              alt="Stats Left Icon"
              className="img-fluid"
              width={500}
              height={500}
            />
          </figure>
          <figure className="stats_right_icon right_icon mb-0">
            <Image
              src={Stats2}
              alt="Stats Right Icon"
              className="img-fluid"
              width={500}
              height={500}
              priority
            />
          </figure>
        </div>
      </div>
      <div className="video_section" id="video">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="position-relative">
                <a
                  className="popup-vimeo"
                  href="https://video-previews.elements.envatousercontent.com/h264-video-previews/9b19c081-53dc-4345-a05e-0c9a4a52f3e6/26111213.mp4"
                  rel="noopener noreferrer"
                  aria-label="Watch promotional video"
                >
                  <div className="video_wrapper">
                    <figure className="video_img mb-0">
                      <Image
                        className="thumb img-fluid"
                        src={VideoImage}
                        alt="Video thumbnail"
                        width={1200}
                        height={675}
                        quality={75}
                      />
                    </figure>
                    <figure className="video_icon mb-0">
                      <Image src={VideoIcon} alt="" className="img-fluid" />
                    </figure>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticSection;
