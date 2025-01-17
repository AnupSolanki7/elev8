import React from 'react';
import aboutImage from '../../../../public/images/aboutus_image.png';
import apostrophyImage from '../../../../public/images/aboutus_box_apostrophy.png';
import Image from 'next/image';

const AboutUsSection = () => {
    return (
        <section className="sub-banner_about_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                        <div className="sub-banner_aboutus_image">
                            <figure className="mb-0">
                                <Image src={aboutImage} alt="About Us" className="img-fluid" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                        <div className="sub-banner_aboutus_content" data-aos="fade-right">
                            <h5>ABOUT US</h5>
                            <h2>WELCOME TO THE XTREME FITNESS</h2>
                            <p className="margin_bottom">
                                Euis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ex sint occaecat cupidatat non proident sunt in cular aui officia deserunt mollit anim laborum.
                            </p>
                            <p>
                                Dolore eu fugiat nulla pariatur exsint occaecat cui non proident sunt in cular aui officia.
                            </p>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="box_wrapper">
                                        <figure>
                                            <Image src={apostrophyImage} alt="Apostrophy" className="img-fluid" />
                                        </figure>
                                        <p className="mb-0">TEMPORE CUM SOLUTA NOBIS ESTLIGENDI OPTIO CUMQUE NIHIL IMPEDIT.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;