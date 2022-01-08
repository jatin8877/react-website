import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <h1 className="mb-4">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className=" card-container  mx-auto">
                {Sdata.map((elem, idx) => {
                  return (
                    <Card key={idx} imgsrc={elem.imgsrc} title={elem.title} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
