import Card from "../common/card/Card";
import { useState } from "react";

const Tokenomics = () => {
  const [distFlip, setDistFlip] = useState({
    prelaunch: false,
    supply: false,
    liquidity: false,
  });

  const DetailItem = (rowName, rowValue) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <span style={{ fontSize: "12px", marginBottom: "4px" }}>{rowName}</span>
        <span
          style={{ fontSize: "12px", marginBottom: "4px", textAlign: "right" }}
        >
          {rowValue.map((line) => (
            <>
              {line}
              <br />
            </>
          ))}
        </span>
      </div>
    );
  };

  const flip = (target) => {
    let object;
    switch (target) {
      case "prelaunch":
        object = {
          prelaunch: !distFlip.prelaunch,
        };
        break;
      case "supply":
        object = {
          supply: !distFlip.supply,
        };
        break;
      case "liquidity":
        object = {
          liquidity: !distFlip.liquidity,
        };
        break;
      default:
        break;
    }
    setDistFlip((data) => ({ ...data, ...object }));
  };

  return (
    <div className="tokenomics-container" id="tokenomics">
      <div className="tok-title">Tokenomics</div>
      <div className="tok-sub-title">
        Hedge Zeppelin is a meme token at heart! $HZEP is a deflationary token
        designed to become more scarce over time. On chain holders of Hedge
        Zeppelin will see profit rising over time fueled by systematic and
        sustainable buyback and token burns; all that for simply holding Hedge
        Zeppelin tokens in your wallet.
      </div>
      <div className="highlight-container">
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "300px",
            }}
          >
            <img
              src='/checkmark-icon.png'
              style={{ width: "60px", height: "60px" }}
              alt="Checkmark"
            />
            100 Million total supply
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "300px",
            }}
          >
            <img
              src='/checkmark-icon.png'
              style={{ width: "60px", height: "60px" }}
              alt="Checkmark"
            />
            5% Buy/Transfer fees
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "300px",
            }}
          >
            <img
              src='/checkmark-icon.png'
              style={{ width: "60px", height: "60px" }}
              alt="Checkmark"
            />
            5% Sell fees
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "300px",
            }}
          >
            <img
              src='/checkmark-icon.png'
              style={{ width: "60px", height: "60px" }}
              alt="Checkmark"
            />
            50,000 HZEP Maximum sell per Hour
          </div>
        </Card>
      </div>
      <div className="tk-card-container">
        <Card>
          <div
            className="card-content"
            onMouseEnter={flip.bind(this, "prelaunch")}
            onMouseLeave={flip.bind(this, "prelaunch")}
          >
            <div className={"front" + (distFlip.prelaunch ? " flipF" : "")}>
              <img
                src='/icons8-capital-96.png'
                style={{ width: "180px", height: "120px", margin: "20px" }}
                alt="Capital"
              />
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Presale / Launch Details
              </span>

              <span style={{ fontSize: "12px" }}>Hover/Click for details</span>
            </div>
            <div className={"back" + (distFlip.prelaunch ? " unflipB" : "")}>
              <span style={{ marginBottom: "20px", fontWeight: "bold" }}>
                Tokens Distribution
              </span>
              <span
                style={{
                  borderTop: "1px solid #ffffff",
                  width: "100%",
                  marginBottom: "20px",
                }}
              ></span>
              {DetailItem("Private sale", ["15,000,000"])}
              {DetailItem("Listing & Liquidity", ["50,000,000"])}
            </div>
          </div>
        </Card>
        <Card>
          <div
            className="card-content"
            onMouseEnter={flip.bind(this, "supply")}
            onMouseLeave={flip.bind(this, "supply")}
          >
            <div className={"front" + (distFlip.supply ? " flipF" : "")}>
              <img
                src='/core-team.png'
                style={{ width: "180px", height: "120px", margin: "20px" }}
                alt="Core team"
              />
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Supply breakdown
              </span>

              <span style={{ fontSize: "12px" }}>Hover/Click for details</span>
            </div>
            <div className={"back" + (distFlip.supply ? " unflipB" : "")}>
              <span style={{ marginBottom: "20px", fontWeight: "bold" }}>
                Tokens Distribution
              </span>
              <span
                style={{
                  borderTop: "1px solid #ffffff",
                  width: "100%",
                  marginBottom: "20px",
                }}
              ></span>
              {DetailItem("Investment Wallet", ["15,000,000"])}
              {DetailItem("Team & Ops Wallet", ["5,000,000"])}
              {DetailItem("Marketing Wallet", ["5,000,000"])}
              {DetailItem("Locked", ["10,000,000"])}
            </div>
          </div>
        </Card>
        <Card>
          <div
            className="card-content"
            onMouseEnter={flip.bind(this, "liquidity")}
            onMouseLeave={flip.bind(this, "liquidity")}
          >
            <div className={"front" + (distFlip.liquidity ? " flipF" : "")}>
              <img
                src='/liquidity.png'
                style={{ width: "180px", height: "120px", margin: "20px" }}
                alt="Liquidity"
              />
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Liquidity pools
              </span>
              <span style={{ fontSize: "12px" }}>Hover/Click for details</span>
            </div>
            <div className={"back" + (distFlip.liquidity ? " unflipB" : "")}>
              <span style={{ marginBottom: "20px", fontWeight: "bold" }}>
                Tokens Distribution
              </span>
              <span
                style={{
                  borderTop: "1px solid #ffffff",
                  width: "100%",
                  marginBottom: "20px",
                }}
              ></span>
              {DetailItem("Initial Liquidity", ["10,000,000"])}
              {DetailItem("Liquidity Pairs", [
                "HZEP / BNB",
                "HZEP / BUSD",
                "HZEP / USDT",
              ])}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Tokenomics;
