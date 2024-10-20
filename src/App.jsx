import { useState } from "react";
import "./App.css";
import "./mainsection.css";
import { Header } from "./header";
import { MainSection } from "./MainSection";
import "./customerlist.css";
import { CustomerSelection } from "./CustomerSelection";


function App() {
  return (
    <>
      <Header />
      <div className="main">
        <MainSection
          figure={[47, 17, 63, 4]}
          percent={["3.90%", "2.90%"]}
          theDate="from last week"
        />
      </div>
      <CustomerSelection
        fullName={[
          "Caden Morse",
          "Satino Marsh",
          "Kristin Zavala",
          "Kristin Williams",
          "Cannon Paul",
          "Marlee Merritt",
        ]}
        email={[
          "cadenmorsh@live.com",
          "satinomarch@comcast.net",
          "krisinzavala@sbsglobal.net",
          "willamskristin@me.com",
          "paulcannon@yahoo.com",
          "marmerritt@icoud.com",
        ]}
        billing={[
          "June 12 2023",
          "August 01 2023",
          "January 14 2023",
          "March 08 2023",
          "February 19 2023",
          "December 30 2023",
        ]}
        plan={["team", "basic", "team", "basic", "basic", "team"]}
        amount={[
          "$5.000",
          "$19.000",
          "$14.000",
          "$5.700",
          "$7.200",
          "$13.800",
        ]}
        user={[10, 44, 32, 12, 18, 30]}
        details={['View Details ...']}
      />
      
    </>
  );
}

export default App;
