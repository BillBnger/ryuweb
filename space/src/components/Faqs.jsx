import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Accordion } from "react-bootstrap";

export const Faqs = () => {
  // const content = (
  //   <p>
  //     It's a digital asset that represents real world objects & services like
  //     art, music, and games online.
  //   </p>
  // );
  const items = [
    {
      title: "Astro Army FAQ01",
      content: (
        <p>
          It's a digital asset that represents real world objects & services like
          art, music, and games online.
        </p>
      ),
    },
    {
      title: "Astro Army FAQ02",
      content: (
        <>
          <p>It's a digital asset that represents real world objects & services like
          art, music, and games online.
          </p>
        </>
      ),
    },
    {
      title: "Astro Army FAQ03",
      content: (
        <>
            <p>It's a digital asset that represents real world objects & services like
          art, music, and games online.
          </p>
        
        </>
      ),
    },
    {
      title: "Astro Army FAQ04",
      content: (
        <p>It's a digital asset that represents real world objects & services like
        art, music, and games online.
        </p>
      ),
    },
    {
      title: "Astro Army FAQ04",
      content: (
        <p>It's a digital asset that represents real world objects & services like
        art, music, and games online.
        </p>
      ),
    },
    {
      title: "Astro Army FAQ05",
      content: <p>72 Hours after the mint of the mint.</p>,
    },
    {
      title: "Astro Army FAQ06",
      content: (
        <p>It's a digital asset that represents real world objects & services like
        art, music, and games online.
        </p>
      ),
    },
    {
      title: "Astro Army FAQ07",
      content:   <p>It's a digital asset that represents real world objects & services like
      art, music, and games online.
      </p>,
    },
  
  ];
  return (
    <div
      className="container-fluid section bg "
      id="faqs"
      style={{
        backgroundSize: "cover",
       
      }}
    >
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
                            <span style={{color:'#000'}}> {item.title}</span>
                            <div>
                              <i className="faq-icon open-icon fa fa-plus"></i>{" "}
                              <i className="faq-icon close-icon  fa fa-minus hidden"></i>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body style={{color:'#000'}}>{item.content}</Accordion.Body>
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
