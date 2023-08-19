import Card from "../common/card/Card";
import { GiCaptainHatProfile } from "react-icons/gi";

const Team = () => {
  return (
    <div className="team" id="team">
      <div className="tok-title">Meet the Crew</div>
      <div className="team-container">
        <div className="team-card-container">
          <Card>
            <div className="team-card">
              <img
                src='/drew-bio-pic.jpeg'
                className="team-img"
                alt="CEO"
              />
              <div className="team-title">Captain</div>
              <div className="team-email">drew@hedgezeppelin.com</div>
              <div className="team-desc">
                Awarded his pilot’s license from Hedgehog University in May
                2023. When Capt. Drew is not flying zeppelin projects to the
                moon, he enjoys scuba diving, collecting construction equipment,
                and traveling. He and wis beloved wife reside in Hedgeville
                Burrow with their 4 hedgehogs.
              </div>
            </div>
          </Card>
        </div>
        <div className="team-card-container">
          <Card>
            <div className="team-card">
              <img
                src='/george-bio-pic.jpeg'
                className="team-img"
                alt="COO"
              />
              <div className="team-title">Chief Engineer</div>
              <div className="team-email">george@hedgezeppelin.com</div>
              <div className="team-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </div>
            </div>
          </Card>
        </div>
        <div className="team-card-container">
          <Card>
            <div className="team-card">
              <img
                src='/john-bio-pic.jpeg'
                className="team-img"
                alt="CFO"
              />
              <div className="team-title">Chief Financial Officer </div>
              <div className="team-email">john@hedgezeppelin.com</div>
              <div className="team-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </div>
            </div>
          </Card>
        </div>
        <div className="team-card-container">
          <Card>
            <div className="team-card">
              <img
                src='/guru-bio-pic.jpeg'
                className="team-img"
                alt="CTO"
              />
              <div className="team-title">Chief Technology Officer</div>
              <div className="team-email">guru@hedgezeppelin.com</div>
              <div className="team-desc">
                Completed degree in aviation technology from Hedgeville
                institute of aviation and technology in Jan 2023. When he is not
                establishing communication, tracking beacons or maintaining
                cloud security, he spend his time with his wife and hoglet in
                suburban gardens of hedgezuala.
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="tok-title">Our flight advisors</div>
      <div className="team-container marketing">
        <div className="team-card-container">
          <Card>
            <div className="team-card market-card">
              <img
                src='/nathan-bio-pic.jpeg'
                className="team-img"
                alt="CEO"
              />
              <div className="team-title">Chief Marketing Officer</div>
              <div className="team-email">nathan@hedgezeppelin.com</div>
              <div className="team-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </div>
            </div>
          </Card>
        </div>
        <div className="team-card-container">
          <Card>
            <div className="team-card market-card">
              <img
                src='/colin-bio-pic.jpeg'
                className="team-img"
                alt="CEO"
              />
              <div className="team-title">First Marketing Officer</div>
              <div className="team-email">colin@hedgezeppelin.com</div>
              <div className="team-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </div>
            </div>
          </Card>
        </div>
        <div className="team-card-container">
          <Card>
            <div className="team-card market-card">
              <img
                src='/greg-bio-pic.jpeg'
                className="team-img"
                alt="CEO"
              />
              <div className="team-title">Chief Security Officer</div>
              <div className="team-email">greg@hedgezeppelin.com</div>
              <div className="team-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="tok-title">Open flight deck positions</div>
      <div className="team-container marketing">
        <Card>
          <div className="open-team-position">
            <p>
              <GiCaptainHatProfile style={{ marginRight: "10px" }} />
              First Navigator of Socials
            </p>
            <p>
              {" "}
              <GiCaptainHatProfile style={{ marginRight: "10px" }} />
              First Electrician
            </p>
            <p>
              {" "}
              <GiCaptainHatProfile style={{ marginRight: "10px" }} />
              Radio Operator
            </p>
            <p>
              {" "}
              <GiCaptainHatProfile style={{ marginRight: "10px" }} />
              Digital Communications Officer
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Team;
