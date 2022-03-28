import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Accordion } from "react-bootstrap";

export const Faqs = () => {
  const content = (
    <p>
      It's a digital asset that represents real world objects & services like
      art, music, and games online.
    </p>
  );
  const items = [
    {
      title: "What are NFT?",
      content: (
        <p>
          It's a digital asset that represents real world objects & services
          like art, music, and games online.
        </p>
      ),
    },
    {
      title: "How can I buy RyuWorld NFTs?",
      content: <p>The Mint starts on May 1st, 2022. You need a place on the whitelist and a Metamask wallet.
        From May 3rd, 2022 everyone can purchase our NFT's.</p>,
    },
    {
      title: "Who are RyuWorld and what is our plan?",
      content: (
        <p>
          Our road map is posted in our discord, click{" "}
          <a
            href="https://discord.gg/EUBrXznj44"
            target={"_blank"}
            rel="noopener noreferrer nofollow"
          >
            Here
          </a>{" "}
          to read
        </p>
      ),
    },
    // {
    //   title: "How many whitelist spots are available?",
    //   content: (
    //     <p>
    //       Angry Falcon is an exclusive NFT collection of 10K Falcons NFT living
    //       on the Ethereum blockchain.
    //     </p>
    //   ),
    // },
    // {
    //   title: "What is MetaMask?",
    //   content: (
    //     <p>
    //       Falcons symbolize ambition, aspiration, freedom and victory. Our
    //       falcons are angry because we are fighting against our fears. We are
    //       coming angry, big & hungry SOON
    //     </p>
    //   ),
    // },
  ];
  return (
    <div className="container-fluid section " id="faqs">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h2 className="primary-heading center">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Accordion defaultActiveKey="0">
                {items.map((item, index) => {
                  return (
                    <ScrollAnimation
                      key={`faq-scroll${index}`}
                      animateIn="slideInUp"
                    >
                      <Accordion.Item key={`faq-item${index}`} eventKey={index}>
                        <Accordion.Header>
                          <div
                            className="d-flex justify-content-between"
                            style={{ flex: 1 }}
                          >
                            <span> {item.title}</span>
                            <div>
                              <i className="faq-icon open-icon fa fa-plus"></i>{" "}
                              <i className="faq-icon close-icon  fa fa-minus hidden"></i>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>{item.content}</Accordion.Body>
                      </Accordion.Item>
                    </ScrollAnimation>
                  );
                })}
              </Accordion>
            </div>
            <div className="col-md-3"></div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};
