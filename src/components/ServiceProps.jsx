import React, { useEffect } from "react";
import SAbout from "./ServiceComps/SAbout";
import SCTA from "./SCTA";
import SExpertise from "./ServiceComps/SExpertise";
import SHero from "./ServiceComps/SHero";
import SBenefits from "./ServiceComps/SBenefits";

const ServiceProps = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div className="w-full">
      <SHero
        img={props.img}
        alt={props.alt}
        heading={props.heading}
        underheading={props.underheading}
        button={props.button}
      />
      <SAbout nameA={props.nameA} descA={props.descA} imgA={props.imgA} />
      <SBenefits
        bImg1={props.bImg1}
        bName1={props.bName1}
        bTitle1={props.bTitle1}
        bDesc1={props.bDesc1}
        bImg2={props.bImg2}
        bName2={props.bName2}
        bTitle2={props.bTitle2}
        bDesc2={props.bDesc2}
        bImg3={props.bImg3}
        bName3={props.bName3}
        bTitle3={props.bTitle3}
        bDesc3={props.bDesc3}
        bDesc4={props.bDesc4}
        bButton={props.bButton}
        pricing={props.price}
      />
      <SExpertise />
      <SCTA />
    </div>
  );
};

export default ServiceProps;
