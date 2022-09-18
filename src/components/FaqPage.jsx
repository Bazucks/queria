import React, { useEffect, useState } from "react";
import FaqLayout from "./FaqLayout";
import FaqLogo from "../assets/queria_base.png";

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const title = "FAQ";
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="relative top-[80px] w-full bg-slate-200 dark:bg-slate-900 h-fit items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-4 -mb-4 pt-6">
        <img src={FaqLogo} alt="QueriaLogo" className="w-24" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium dark:text-white py-4 mb-3 text-center">
          FAQ <span className="text-green text-10xl -ml-1"></span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <FaqLayout
          title="How do I place an order?"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          To create an order, contact us via email or using our{" "}
          <a href="/form">Submission Form</a>, describing your needs. We'll then
          answer you back as soon as possible.
        </FaqLayout>
        <FaqLayout
          title="What is the Delivery Time?"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          Most of the Services are delivered within a day or two. However,
          there's no prefixed delivery time, because it depends on the specific
          project.
          <br />
          <br />
          For more info contact us about the object of work.
        </FaqLayout>

        <FaqLayout
          title="What Payment Methods do you provide?"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          We're currently supporting payments via{" "}
          <italic className="italic font-medium">
            Stripe, Paypal & Ethereum.
          </italic>
        </FaqLayout>

        <FaqLayout
          title="How many revisions do I have?"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          Each Service has at least 2 FREE revisions available. However, the
          amount of revisions, one can possess, depends on the individual
          contract concluded with the client.
        </FaqLayout>

        <FaqLayout
          title="How do I cancel a service?"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          To cancel a verified order, you need to contact our support,
          indicating the order ID and its name.
        </FaqLayout>

        <FaqLayout
          title="Am I Eligible for getting a refund?"
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          Yes, if you're not satisfied with the revisions you have, you can
          either receive more, or get a refund. Each service has up to{" "}
          <strong className="font-medium"> 30 days Money Back Guarantee</strong>
          !
        </FaqLayout>
      </div>
    </div>
  );
};

export default FaqPage;
