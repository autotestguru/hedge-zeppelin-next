import SpaceSection from "../common/spacemap/SpaceSection";
import SpaceWrapper from "../common/spacemap/SpaceWrapper";

const Roadmap = () => {
  const roadmapItems = [
    {
      title: "Mar 2023 - May 2023",
      status: "IN PROGRESS",
      phases: [
        {
          id: 1.1,
          text: "Community Based Meme Concept - Hedge Zeppelin Created\nBuild Core Team & Advisors\nHedgie is Born 🦔",
          status: "DONE",
        },
        {
          id: 1.2,
          text: "Contract with Crypto Marketing Company to handle marketing\nBuild & Publish Website",
          status: "DONE",
        },
        {
          id: 1.3,
          text: `Develop Contract\nConduct Initial Audit`,
          status: "IN PROGRESS",
        },
      ],
    },
    {
      title: "Jun 2023 - Aug 2023",
      status: "NOT STARTED",
      phases: [
        {
          id: 2.1,
          text: "Release Official Press Documents\nBuild Socials & Community",
          status: "NOT STARTED",
        },
        {
          id: 2.2,
          text: "Presale on Pinksale and/or other platforms\nWhitelist Distribution\nMajor Marketing Campaign",
          status: "NOT STARTED",
        },
        {
          id: 2.3,
          text: "Multi-Chain Launch\nDEX Listings\nCMC & CG Listing",
          status: "NOT STARTED",
        },
      ],
    },
    {
      title: "Sep 2023 - Feb 2024",
      status: "NOT STARTED",
      phases: [
        {
          id: 3.1,
          text: "Featured in Crypto Magazine\nMassive marketing campaign\nCollaboration with media celebs and reputed influencers",
          status: "NOT STARTED",
        },
        {
          id: 3.2,
          text: "Certik Audit\nMajor CEX Listing",
          status: "NOT STARTED",
        },
        {
          id: 3.3,
          text: "E-commerce Usecase\nCollaboration with Investment Partners\nNFT Project Release",
          status: "NOT STARTED",
        },
      ],
    },
    {
      title: "Mar 2024 and beyond",
      status: "NOT STARTED",
      phases: [
        {
          id: 4.1,
          text: "Additional CEX Listings",
          status: "NOT STARTED",
        },
        {
          id: 4.2,
          text: "Cutting Edge Utilities\nInvestments for the future",
          status: "NOT STARTED",
        },
      ],
    },
  ];

  return (
    <div className="roadmap-site-container" id="roadmap">
      <div className="tok-title">Our Roadmap</div>
      <SpaceWrapper>
        {roadmapItems.map((item) => {
          return (
            <SpaceSection
              id={item.title}
              title={item.title}
              status={item.status}
              phases={item.phases}
            />
          );
        })}
      </SpaceWrapper>
    </div>
  );
};

export default Roadmap;
