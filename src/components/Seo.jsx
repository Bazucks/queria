import React from "react";
import ServiceProps from "./ServiceProps";
import heroImg from "../assets/seo.png";
import aboutImg from "../assets/seoAbout.avif";
import bImg1 from "../assets/seoOne.webp";
import bImg2 from "../assets/seoTwo.avif";
import bImg3 from "../assets/seoThree.avif";

const Seo = () => {
  return (
    <div>
      <ServiceProps
        title="SEO"
        img={heroImg}
        alt="SeoImage"
        heading="Search Engine Optimization"
        underheading="Scale higher than ever!"
        button="Inspect Now"
        nameA="SEO"
        descA="In today's digital economy, it's more important than ever to rank highly in the browser's search engine. As the world's most popular one - Google, can determine whether a small business will thrive or perish. That's why we offer a full suite of SEO services to help your business get to the top search results. With our proficient team, you can feel confident that we'll achieve your goal."
        imgA={aboutImg}
        bImg1={bImg1}
        bName1="Audit"
        bTitle1="Audit"
        bDesc1="Pre-analyzing the technical part, and evaluating texts and structure will help us define the current User Experience satisfaction. We then adjust all of this so that we can ensure that by the start of the optimization (SEO) process, everything will be as effective as possible."
        bImg2={bImg2}
        bName2="Monitoring"
        bTitle2="Monitoring"
        bDesc2="Analyzing your rankings for keywords, phrases, and competitors to see what's working and what should be fixed on the moment."
        bImg3={bImg3}
        bName3="Scaling"
        bTitle3="Scaling"
        bDesc3="Tune up your site with on-page optimization and keyword research to rank higher on search engine results pages, while keeping awareness of everything about your traffic sources with detailed stats reports."
        bDesc4="Get your site ranking top spots for organic traffic and enjoy a steady stream of new leads. ⁣⁣"
        bButton="Go for it"
        price="Pricing depends on the specific needs of the client - number of pages, current stats and niche. For more information - contact us to
        create an individual proposal."
      />
    </div>
  );
};

export default Seo;
