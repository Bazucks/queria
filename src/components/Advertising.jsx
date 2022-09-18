import React from "react";
import ServiceProps from "./ServiceProps";
import heroImg from "../assets/smAds.png";
import aboutImg from "../assets/smAdsAbout.avif";
import bImg1 from "../assets/smAdsOne.png";
import bImg2 from "../assets/smAdsTwo.avif";
import bImg3 from "../assets/smAdsThree.avif";

const Advertising = () => {
  return (
    <div>
      <ServiceProps
        title="Advertising"
        img={heroImg}
        alt="AdvertisingImage"
        heading="Social Media Marketing"
        underheading="Show off the people easily, with well-managed and optimized advertising. Get ahead of the competition, at the best price!"
        button="Inspect Now"
        nameA="Social Media Marketing"
        descA="Digital Marketing is the fastest way for your business to reach new customers worldwide. The success of an advertising campaign depends on the preliminary strategy for its implementation. We take the necessary time to determine which is the most appropriate communication channel, and so to achieve the goals you set for yourself."
        imgA={aboutImg}
        bImg1={bImg1}
        bName1="Analytics"
        bTitle1="Analytical Research"
        bDesc1="What are the current trends? What stuff is nowadays impressful?... Most users want to stumble across content adding value to them."
        bImg2={bImg2}
        bName2="Audience Targeting"
        bTitle2="Audience Targeting"
        bDesc2="Defining the proper auditory and tracing content, targeting their specific interests, problems and needs."
        bImg3={bImg3}
        bName3="Reaching Methods"
        bTitle3="Reaching Methods"
        bDesc3="Every business is unique. Testing different strategies and measuring their results allows us to find the ones, that might be most successful for you."
        bDesc4="Need a professional social-media marketing for your Business? If you set a proposal today, you can have your first new customers in a matter of hours."
        bButton="I Want It"
        price="Pricing depends on the specific needs of the client - the selection of
        a campaign and the numerous communication channels we can use, the
        different markets we want to reach, the duration of the campaign and a
        number of other parameters. However, our prices are easy to predict.
        They include an initial fee for creating the campaign and a percentage
        of the budget that is managed. For more information - contact us to
        offer an individual proposal."
      />
    </div>
  );
};

export default Advertising;
