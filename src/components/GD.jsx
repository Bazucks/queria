import React from "react";
import ServiceProps from "./ServiceProps";
import heroImg from "../assets/gd.png";
import aboutImg from "../assets/gdAbout.avif";
import bImg1 from "../assets/gdOne.png";
import bImg2 from "../assets/gdTwo.avif";
import bImg3 from "../assets/gdThree.avif";

const GD = () => {
  return (
    <div>
      <ServiceProps
        title="Graphic Design"
        img={heroImg}
        alt="GraphicDesignImage"
        heading="Graphic Design"
        underheading="Bring your graphics to the next level!"
        button="Inspect Now"
        nameA="Graphic Design"
        descA="Graphic design is more than just a pretty picture. It's an idea - an image, a piece of content, a video, or a photo - that you're conveying to your audience. Whether you're looking for logo design, website design, or some other kind of graphic design project, our talented team can help you with all your creative needs."
        imgA={aboutImg}
        bImg1={bImg1}
        bName1="One of a kind"
        bTitle1="One of a kind"
        bDesc1="Original, highly creative and conceptual design, clearly depicting the message."
        bImg2={bImg2}
        bName2="High-Quality"
        bTitle2="High-Quality"
        bDesc2="Ability to produce high quality videos for social media promotion, branding or just for fun - all depending on your needs."
        bImg3={bImg3}
        bName3="Satisfaction"
        bTitle3="Satisfaction"
        bDesc3="Our team of talented designers will bring your business to life, from the tiniest typographical details to the biggest design influences."
        bDesc4="Bring your graphic content a professional look with just a few simple clicks!"
        bButton="Let's get it"
        price="Pricing depends on the specific needs of the client - type of the content - photos, videos, ilustrations, and so on; type of the design; revision amount, etc. However, our prices are affordable and easy to predict. For more information - contact us to
        create an individual proposal."
      />
    </div>
  );
};

export default GD;
