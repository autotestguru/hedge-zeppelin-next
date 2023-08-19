import { useState, useEffect } from "react";
import { Config } from "../../constants/Config";

const WhatIsThis = () => {
  const [marketData, setMarketData] = useState({
    "Unit Price": "",
    "24hr Volume": "",
    "Market cap": "",
  });

  const fetchMarketData = async () => {
    const requestParams = {
      ids: "ripple",
      vs_currencies: "usd",
      include_market_cap: true,
      include_24hr_vol: true,
    };

    const requestOptions = {
      method: "GET",
      headers: { accept: "application/json" },
    };
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(
          requestParams.ids
        )}&vs_currencies=${encodeURIComponent(
          requestParams.vs_currencies
        )}&include_market_cap=${encodeURIComponent(
          requestParams.include_market_cap
        )}&include_24hr_vol=${encodeURIComponent(
          requestParams.include_24hr_vol
        )}`,
        requestOptions
      );
      const data = await response.json();
      setMarketData({
        "Unit Price": data.ripple.usd,
        "24hr Volume": data.ripple.usd_24h_vol,
        "Market cap": data.ripple.usd_market_cap,
      });
    } catch (err) {
      console.log("Error occurred while fetching market data");
      console.log(err);
      setMarketData({
        "Unit Price": "",
        "24hr Volume": "",
        "Market cap": "",
      });
    }
  };

  useEffect(() => {
    Config.enableCoinGeckoAPI && fetchMarketData();
  }, []);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

  return (
    <div className="whatisthis" id="whatisthis">
      <div className="left-side">
        <div className="moving-image">
          <img src="/hedgie_nobg.png" alt="Hedgie" className="banner-image" />
        </div>
      </div>
      <div className="right-side">
        <h1 className="title-text">HEDGE Zeppelin</h1>
        <h2 className="sub-title-text">What is this?</h2>
        <div className="sub-text">
          Hedge Zeppelin is here to provide a sustainable interaction with the
          cryptocurrency world. Our team, which has a perfect knowledge of risk
          management and portfolio management, will be able to offer you a token
          with the perfect safety/profit balance.
        </div>
        <div className="market-data-container">
          <div className="market-data-title">*Live Market data</div>
          <div className="mak-data-unit">
            <div className="madata-header">Unit Price</div>
            <div className="madata-data">
              {formatter.format(marketData["Unit Price"])}
            </div>
          </div>
          <div className="mak-data-unit">
            <div className="madata-header">24hrs Volume</div>
            <div className="madata-data">
              {formatter.format(marketData["24hr Volume"])}
            </div>
          </div>
          <div className="mak-data-unit">
            <div className="madata-header">Market Cap</div>
            <div className="madata-data">
              {formatter.format(marketData["Market cap"])}
            </div>
          </div>
          <div className="market-data-disc">
            <strong>
              * There is a limit to how many times data can be retrieved from
              the server. If the price shows $0 please refresh after few minutes
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsThis;
