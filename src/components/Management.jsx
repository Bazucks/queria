import React from "react";
import ServiceProps from "./ServiceProps";
import heroImg from "../assets/smManagement.png";
import aboutImg from "../assets/smManageAbout.webp";
import bImg1 from "../assets/smManageOne.avif";
import bImg2 from "../assets/smManageTwo.webp";
import bImg3 from "../assets/smManageThree.png";

const Management = () => {
  return (
    <div>
      <ServiceProps
        title="Media Management"
        img={heroImg}
        alt="ManagementImage"
        heading="Social Media Management"
        underheading="Bring your content to the next level!"
        button="Inspect Now"
        nameA="Social Media Management"
        descA="Have you ever struggled managing your social media?... No more Worries! Let our team compose impressive content, post on your behalf, and manage your social networks while simultaneously enhancing your online presence, increasing followers, and gaining more likes. Whether you're a content creator, influencer, or  business owner, we can provide the proper support needed to take your social media game up a notch!"
        imgA={aboutImg}
        bImg1={bImg1}
        bName1="For All Platforms"
        bTitle1="All Platforms"
        bDesc1="Network management tends to be important like never before. Luckily, there're experts that can do the work at a decent price. You pick the platform, we carry it out."
        bImg2={bImg2}
        bName2="Multi Manage"
        bTitle2="Multi Manage"
        bDesc2="Boost your overall online reputation with expert strategies, tailored to your business goals. Plus, we'll make sure each post is optimized for better performance with just the right images and tags. Imagine the possibilities!"
        bImg3={bImg3}
        bName3="Sudden Results"
        bTitle3="Sudden Results"
        bDesc3="Get your brand the attention it deserves, no matter of its current state. All the tools needed to build a strong social media presence with a growing audience that matters."
        bDesc4="Take advantage of our extensive experience in managing social networks and attract thousands of followers into your range."
        bButton="Let's do it"
        price="Pricing depends on the specific needs of the client - the period of subscription, the features included, amount of revisions, and so on.. However, our prices are easy to predict. For more information - contact us to
        create an individual proposal."
      />
    </div>
  );
};

export default Management;
