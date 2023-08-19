import Button from "../common/Button";
import { useState } from "react";
import CurrencyOptions from "../common/currencyOptions/CurrencyOptions";
import { Config } from "../../constants/Config";
import FloozIntegration from "../common/floozIntegration/FloozIntegration";

const BuyNow = () => {
  let contractAddress = Config.hzepContractAddress;
  const [showCurOpts, setShowCurOpts] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleBuyMenu = () => {
    setShowCurOpts(!showCurOpts);
  };

  return (
    <div className="buy-now-container">
      <video id="video-container" loop autoPlay muted>
        <source src={"/digital-pattern.mp4"} type="video/mp4" />
      </video>
      <div className="overlay" />
      <div className="buy-now-content-container">
        <div className="buy-left-section">
          <div className="buy-now-punch-line">
            <h1>The only Sustainably Scalable MEME Token</h1>
            <div className="buy-action-container">
              <Button outlined onClick={toggleBuyMenu}>
                BUY HZEP ON PANCAKESWAP NOW
              </Button>
              <CurrencyOptions
                showCurOpts={showCurOpts}
                toggleMenu={toggleBuyMenu}
              />
            </div>
            <div className="contract-info">
              <span>Contract Address: {contractAddress}</span>
              <br />
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={async () => {
                  if ("clipboard" in navigator) {
                    await navigator.clipboard.writeText(contractAddress);
                  } else {
                    document.execCommand("copy", true, contractAddress);
                  }
                  setCopied(true);
                }}
              >
                {copied ? "Copied to Clipboard" : "Copy Address"}
              </span>
            </div>
          </div>
          <div className="huge-marketing">
            <h1 className="huge-marketing-title">
              Partnership with biggest marketing platform
            </h1>
            <img
              src="/cmccoinbig-redact.png"
              className="marketing-img"
              alt="Marketing partner"
            />
          </div>
        </div>
        <div className="flooz-container">
          <FloozIntegration />
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
