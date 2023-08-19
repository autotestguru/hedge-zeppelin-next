import { Config } from "../../../constants/Config";

const FloozIntegration = () => {
  //0xfa134985a4d9D10DBf2d7dCf811055aA25d0807C
  const floozIFrame = `<iframe width="400" height="600" frameborder="0" src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=${Config.hzepContractAddress}&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=200&onRampTokenAddress=bnb&stakeDisabled=true&network=bsc&lightMode=false&primaryColor=%23a00495&backgroundColor=transparent&roundedCorners=10&padding=20"></iframe>`;
  return <div dangerouslySetInnerHTML={{ __html: floozIFrame }} />;
};

export default FloozIntegration;
