import React from "react";
import App from "./App";
import First from "./component/First";
import Second from "./component/Second";
import Third from "./component/Third";

function Main() {
  return (
    <>
      <div className="main">
        <div className="main1">
          <First />
        </div>
        <div className="main2">
          <Second />
        </div>
        <div className="main3">
          <Third />
        </div>
      </div>
      <div>
        <App />
      </div>
    </>
  );
}

export default Main;
