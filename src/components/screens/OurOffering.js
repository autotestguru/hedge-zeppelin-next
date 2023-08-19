import Card from "../common/card/Card";

const OurOffering = () => {
  return (
    <div className="offering-container" id="offering">
      <div className="tok-title">Our offerings</div>
      <div className="tok-sub-title">
        We are not promising an enormous and unsustainable reward, as most of
        the Crypto Projects in the space, but with a variety of different income
        value streams, from the early adoption of cutting-edge Projects and
        technologies to the structural taxation of the transactions, we can keep
        the token price rising through systematic buybacks and burns. These
        funds will be generated using the taxes and revenue from variety of
        crypto investments.
      </div>
      <div className="multi-stream">
        <div className="card-investment">
          <div className="card-stretch">
            <div className="card-con">
              <Card>
                <div className="stream-list">
                  <div className="stream-list-item">
                    <img
                      src='/investment-bullet.png'
                      className="bullet"
                      alt="Investment bullet"
                    />
                    <div>
                      Acquiring stake in early key projects with huge growing
                      potential.
                    </div>
                  </div>
                  <div className="stream-list-item">
                    <img
                      src='/investment-bullet.png'
                      className="bullet"
                      alt="Investment bullet"
                    />
                    <div>
                      Diversified portfolios in revenue generating assets across
                      multiple blockchain to manage risk and assured returns.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="stream-title">Investments</div>
          </div>
        </div>
        <div className="card-investment">
          <div className="card-stretch">
            <div className="card-con">
              <Card>
                <div className="stream-list">
                  <div className="stream-list-item">
                    <img
                      src='/investment-bullet.png'
                      className="bullet"
                      alt="Investment bullet"
                    />
                    <div>
                      Partnership with "Cryptazon" initiative, ensuring rewards
                      for each purchase on the platform.
                    </div>
                  </div>
                  <div className="stream-list-item">
                    <img
                      src='/investment-bullet.png'
                      className="bullet"
                      alt="Investment bullet"
                    />
                    <div>
                      Prime spot in Cryptomag and other marketing avenues,
                      ensuring reach and steady growth of our community.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="stream-title" style={{ width: "265px" }}>
              Collaborations
            </div>
          </div>
        </div>
        {/* <div className="card-investment">
          <div className="card-stretch">
            <div className="card-con">
              <Card>
                <div className="stream-list">
                  <div className="stream-list-item">
                    <img
                      src={require("./../../assets/images/investment-bullet.png")}
                      className="bullet"
                      alt="Investment bullet"
                    />
                    <div>
                      Part of fees reinvested into assets to further bolster
                      revenue streams ensuring protction against deflation, thus
                      guaranteeing ever increasing token price.
                    </div>
                  </div>
                  <div className="stream-list-item">
                    <img
                      src={require("./../../assets/images/investment-bullet.png")}
                      className="bullet"
                      alt="Investment bullet"
                    />
                    <div>
                      Fund further utilities and development initiatives.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="stream-title" style={{ width: "140px" }}>
              Trading
            </div>
          </div>
        </div> */}
      </div>
      <div className="dividend">
        <div className="tok-sub-title">
          The total revenue generated from the various income streams, will be
          used to support buyback and burns that in turn raise the token price.
          This mechanism will provide an additional incentive for the investors
          to hold on to their bags for longer period.
        </div>
        {/* <div className="formula-container">
          <Card>
            <div className="formula">
              X (amount of Revenue) = (X amount of Holders) / (Number of Tokens
              * Holding Time Factor)
            </div>
          </Card>
        </div>
        <div className="tok-sub-title">
          The Dividend will be distributed on a pre-arranged monthly basis and
          the holders will be able to profit from it, without affecting their
          holding time calculation ratio. This will limit the selling pressure
          of the token, while providing a monthly returns to our loyal holders.
        </div> */}
      </div>
    </div>
  );
};

export default OurOffering;
