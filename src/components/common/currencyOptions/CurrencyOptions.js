import { Config } from "../../../constants/Config";

const CurrencyOptions = ({ showCurOpts, toggleMenu, alignment }) => {
  const align = alignment === "bottomToTop" ? " dropdown-rev" : " dropdown";

  const navigateToURL = (link) => {
    window.open(link, "_blank");
    toggleMenu();
  };

  return (
    <div className={"currency-opt-container" + (showCurOpts ? align : "")}>
      <h3
        onClick={() =>
          navigateToURL(
            `https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=${Config.hzepContractAddress}`
          )
        }
      >
        I have BNB
      </h3>
      <h3
        onClick={() =>
          navigateToURL(
            `https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=${Config.hzepContractAddress}`
          )
        }
      >
        I have BUSD
      </h3>
      <h3
        onClick={() =>
          navigateToURL(
            `https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=${Config.hzepContractAddress}`
          )
        }
      >
        I have USDT
      </h3>
    </div>
  );
};

export default CurrencyOptions;
