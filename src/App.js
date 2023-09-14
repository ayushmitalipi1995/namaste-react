import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * AppComponent
 *    HeaderComponnet
 *      - Logo
 *      - Nav Items
 *    BodyComponent
 *      - Search Bar
 *      - Restro Container
 *         - Restro Cards
 *              - Image
 *              - Name of res, Star Rating, Cuisines, delivery time
 *    FooterComponent
 *      - Copy Right
 *      - Links
 *      - Address
 *      - Contact
 */


const AppLayoutComponent = () => {
  //Main App Layout Container
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent />);
