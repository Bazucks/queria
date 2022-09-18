import React from "react";
import ServiceProps from "./ServiceProps";
import heroImg from "../assets/copy.png";
import aboutImg from "../assets/copyAbout.webp";
import bImg1 from "../assets/copyOne.webp";
import bImg2 from "../assets/copyTwo.jpeg";
import bImg3 from "../assets/copyThree.png";

const Copy = () => {
  return (
    <div>
      <ServiceProps
        title="Copywriting"
        img={heroImg}
        alt="CopyImage"
        heading="Copywriting"
        underheading="Creating texts, which sell!"
        button="Inspect Now"
        nameA="Copywriting"
        descA="Copywriting is the art and science of writing text to persuade a person or a group of people to take action. It's been around for decades, but in today's world, with information overload and the demand for mobile-friendly copy, it has never been more important."
        imgA={aboutImg}
        bImg1={bImg1}
        bName1="Attention-grabbing"
        bTitle1="Attention-grabbing"
        bDesc1="Can you remember the last sign you saw that stood out and made you feel uncomfortable because it made you think? Our experience proofs that there’s no better way to make an impact than with a sense-making sign."
        bImg2={bImg2}
        bName2="Strong Diction"
        bTitle2="Strong Diction"
        bDesc2="It's important to stand up for what you believe in, especially when you feel like others are wrong. That's why we're always thinking about vocabulary handling - the words being used, and what they say about our values."
        bImg3={bImg3}
        bName3="Any Type"
        bTitle3="Any Type"
        bDesc3="Our Team is always down for creating advertisements, public relations texts, product descriptions, or any other written content for any kind of client."
        bDesc4="Perfecting your copy might mean greater engagement and sales. Simply ask us about any topic and we'll be glad to help!"
        bButton="Improve your copy"
        price="Pricing depends on the specific needs of the client - the type of the copy(e.g. Blog, Email, Social Post, Cover Letter, etc..) and it's length. For more information - contact us to
        offer an individual proposal."
      />
    </div>
  );
};

export default Copy;
