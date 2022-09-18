import React, { useEffect } from "react";
import ToSLogo from "../assets/queria_base.png";

const TosPage = () => {
  
  const title = 'Terms of Service'
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="w-full h-fit md:h-full bg-slate-100 dark:bg-slate-800 relative top-[80px] drop-shadow-lg">
      <div className="py-6">
        <div className="flex flex-col md:flex-row justify-center">
          <img
            className="w-24 mx-auto md:mx-0 object-cover p-2"
            src={ToSLogo}
            alt="Queria Logo"
          />
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium dark:text-white py-4 mb-6 text-center">
            Terms of Service
          </h2>
        </div>
        <div className=" w-5/6 md:w-4/5 h-fit px-4 py-3 border border-violet-400/90 bg-slate-200 dark:bg-slate-700 rounded-lg mx-auto ">
          <ul className="mx-auto py-2 px-2 space-y-4 my-6">
            <li>
              <div className="text-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium dark:text-white py-2">
                  <span>1. </span>Subject
                </h3>
                <p className="text-md md:text-lg lg:text-xl font-normal dark:text-white py-4">
                  The Seller organizes the delivery of the product ordered by
                  the Users and guarantees the rights of the Customer provided
                  for by law, within the framework of good faith, accepted in
                  practice, consumer or commercial law criteria and conditions.
                  In order for the order to be completed by the User, the
                  Parties conclude a contract for the purchase and sale of
                  requested service. By virtue of the concluded contract for the
                  purchase and sale of product, the Seller undertakes to
                  organize the delivery and transfer of ownership of the product
                  specified by the User, and the User undertakes to pay the
                  Seller the previously announced remuneration for the product
                  and the delivery according to the conditions specified on the
                  Website and these Terms.
                </p>
              </div>
              <hr className="w-11/12 py-2 mx-auto" />
            </li>
            <li>
              <div className="text-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium dark:text-white py-2">
                  <span>2.</span> Traits of the Webpage
                </h3>
                <p className="text-md md:text-lg lg:text-xl font-normal dark:text-white py-4">
                  This Website represents a Digital Agency platform through
                  which Users have the opportunity to enter into contracts for
                  the purchase and delivery of Products offered by the Seller,
                  as well as:
                  <br />
                  <ul className="list-disc pl-10">
                    <li>
                      To review the goods, their characteristics, prices and
                      terms of delivery;
                    </li>
                    <li>
                      To enter into contracts with the Seller for the purchase
                      and delivery of the goods, offered through the Website;
                    </li>
                    <li>
                      To receive information about new services or other
                      promotions offered by through the Website;
                    </li>
                    <li>
                      To be notified of their rights under applicable laws and
                      to exercise those rights.
                    </li>
                  </ul>
                </p>
              </div>
              <hr className="w-11/12 py-2 mx-auto" />
            </li>
            <li>
              <div className="text-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium dark:text-white py-2">
                  <span>3.</span> Order Creation
                </h3>
                <p className="text-md md:text-lg lg:text-xl font-normal dark:text-white py-4">
                  The execution of the order (the conclusion of a purchase and
                  sale contract) is carried out through the following steps:
                  <ul className="list-decimal pl-12">
                    <li>
                      The user takes the decision to purchase products of their
                      choice;
                    </li>
                    <li>
                      The user heads up to the submission form in order to
                      declare the proposal;
                    </li>
                    <li>
                      The user fills in the required information and accepts the
                      Terms of Service;
                    </li>
                    <li>
                      The user clicks <span className="italic">SUBMIT</span> and
                      sends the proposal for a review by the Seller.
                    </li>
                  </ul>
                  After completing the order, the User will receive an email
                  response from the Seller for confirming the order and
                  processing further.
                </p>
              </div>
              <hr className="w-11/12 py-2 mx-auto" />
            </li>
            <li>
              <div className="text-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium dark:text-white py-2">
                  <span>4.</span>Prices & Payment Methods
                </h3>
                <p className="text-md md:text-lg lg:text-xl font-normal dark:text-white py-4">
                  All prices in the website are in{" "}
                  <span className="font-medium italic">USD</span>.
                  <br />
                  The user can pay the price for the individual goods at once in
                  one of the following ways:
                  <ul className="pl-12 list-disc">
                    <li> via Stripe, PayPal, Revolute, Skrill;</li>
                    <li> via BTC, Ethereum.</li>
                  </ul>
                  Upon acceptance of these Terms, the user requires payment to
                  the Seller in advance, in full, of the selling price of each
                  item ordered from the Website.
                </p>
              </div>
              <hr className="w-11/12 py-2 mx-auto" />
            </li>
            <li>
              <div className="text-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium dark:text-white py-2">
                  <span>5.</span> Delivery
                </h3>
                <p className="text-md md:text-lg lg:text-xl font-normal dark:text-white py-4">
                  The delivery time varies for each Service or Product,
                  depending on its specifications. The duration of the delivery,
                  however, starts from the moment concluding the contract,
                  unless the parties have agreed otherwise. The user will be
                  informed about the dispatch of his order automatically by his
                  e-mail or by telephone. If the Seller cannot fulfill the
                  contract because it does not have the ordered products
                  available, they are obliged to notify the User and refund the
                  amount paid by them.
                </p>
              </div>
              <hr className="w-11/12 py-2 mx-auto" />
            </li>
            <li>
              <div className="text-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium dark:text-white py-2">
                  <span>6.</span> Product Refund
                </h3>
                <p className="text-md md:text-lg lg:text-xl font-normal dark:text-white py-4">
                  The User has the right to withdraw from the concluded contract
                  within 30 days from the date of acceptance of the product by
                  the Seller, without owing compensation or penalty, when a
                  reason is stated. The User must notify the Seller of his wish
                  to withdraw from the contract or to replace a given product
                  clearly and unequivocally by contacting them via email or by
                  using the Form.
                </p>
              </div>
              <hr className="w-11/12 py-2 mx-auto" />
            </li>
            <li>
              <div className="text-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium dark:text-white py-2">
                  <span>7.</span> Condition Completeness
                </h3>
                <p className="text-md md:text-lg lg:text-xl font-normal dark:text-white py-4">
                  These Terms consist of all the clauses that make them up. The
                  failure to refer to any of these clauses shall not constitute
                  a waiver of these Terms. In case of invalidity of one of the
                  clauses, this does not result in the invalidity of the
                  remaining clauses. These Terms may be updated at any time
                  without special notice to Users. The Provider is not
                  responsible if the User has not read the latest version of
                  these Terms. By using the services of the Website, the User agrees to the Queria's ToS.
                </p>
              </div>
              <hr className="w-11/12 py-2 mx-auto" />
            </li>
          </ul>
          <p className="py-4 italic text-center text-slate-700 dark:text-slate-200">
            These Terms are dynamic and{" "}
            <span className="font-semibold italic">Queria</span> keeps the right
            to change them if needed.
          </p>
          <p className="pb-3 italic text-center text-slate-700 dark:text-slate-200">
            For any questions, make sure to contact Support.
          </p>
        </div>
      </div>
      {/* <footer className="text-center mt-12 text-lg py-3 text-slate-900/90 dark:text-white/80 bg-slate-200/90 dark:bg-slate-900 bottom-0 relative lg:absolute w-full h-16 items-center">
        &copy; Queria 2022. All rights Reserved.
      </footer> */}
      <br />
    </div>
  );
};

export default TosPage;
