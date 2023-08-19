import styles from "./App.module.css";
import Button from "./../components/common/Button";
import Navbar from "./../components/navbar/Navbar";
import ContactUs from "./../components/screens/ContactUs";
import Next from "./../components/screens/Next";
import OurOffering from "./../components/screens/OurOffering";
import Team from "./../components/screens/Team";
import Tokenomics from "./../components/screens/Tokenomics";
import WhatIsThis from "./../components/screens/WhatIsThis";
import { useEffect, useState } from "react";
import Roadmap from "./../components/screens/Roadmap";
import BuyNow from "./../components/screens/BuyNow";
import CurrencyOptions from "./../components/common/currencyOptions/CurrencyOptions";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showCurOpts, setShowCurOpts] = useState(false);
  useEffect(() => {
    const visibilityOnScrollHandler = () => {
      window.pageYOffset > 100 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", visibilityOnScrollHandler);
    return () => {
      window.removeEventListener("scroll", visibilityOnScrollHandler);
    };
  }, []);

  const toggleBuyMenu = () => {
    setShowCurOpts(!showCurOpts);
  };

  return (
    <div className={styles.App}>
      <Navbar />
      <BuyNow />
      <WhatIsThis />
      <Tokenomics />
      <OurOffering />
      <Roadmap />
      <Team />
      <Next />
      <ContactUs />
      {showButton && (
        <>
          <div className={styles.currencyoptfixedright}>
            <CurrencyOptions
              showCurOpts={showCurOpts}
              alignment="bottomToTop"
              toggleMenu={toggleBuyMenu}
            />
          </div>
          <div className={styles.buynowfixedright}>
            <Button outlined={false} onClick={toggleBuyMenu}>
              Buy HZEP
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
