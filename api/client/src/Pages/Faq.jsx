import React from "react";
import Bottombar from "../Components/Bottombar";
import Topbar from "../Components/Topbar";
import "./faq.scss";
export default function Faq() {
  return (
    <div className="faqpg">
      <Topbar />

      <div className="fondo">
        <div className="cuerpo">
          <img
            src="https://raw.githubusercontent.com/luamoris/react-faq-card-info/a8bb6248c30bae08f077566df122ac83c23a3532/src/img/illustration-woman-online-desktop.svg"
            alt="icon"
            className="img"
          />
          <div className="texto">
            <h3 className="titulo">FAQ</h3>
            <br />
            <br />
            <br />
            <div className="lista">
              {/* <div className= "item">
                            <div className= "item_header">
                            <h4 className= "pregunta-q">How do we avoid spam on our site ?</h4>
                                <br/>
                             
                                <p className= "pregunta-a">We manually verify each seller and allow only one entry per email so that same user cannot upload more than one account.</p>
                                
                            </div>
                           
                        </div> */}
              <div className="item">
                <div className="item_header">
                  <h4 className="pregunta-q">Do you need to Sign Up ?</h4>
                  <br />

                  <p className="pregunta-a">
                    No, Seller and buyer just needs to provide their contact
                    details, that too is kept private with us.{" "}
                  </p>
                </div>
              </div>

              <div className="item">
                <div className="item_header">
                  <h4 className="pregunta-q">
                    What happens after you list an item ?
                  </h4>
                  <br />

                  <p className="pregunta-a">
                    After listing we personally contact seller and buyer,
                    confirms the deal and finally the payment is transferred.{" "}
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="item_header">
                  <h4 className="pregunta-q">Do we charge something ?</h4>
                  <br />

                  <p className="pregunta-a">
                    Yeah we charge just 2% of the amount.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Bottombar />
    </div>
  );
}
