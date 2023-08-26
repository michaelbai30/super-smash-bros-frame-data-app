// import React and Bootstrap
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import components
import Logo from "./Logo";
import FrameData from "./FrameData";

// import non-character images
import frameDataImg from "./imgs/frame_data_img.png";
import githubLogo from "./imgs/github_logo.png";
import SSBU from "./imgs/SSBU.png";
import homeLogo from "./imgs/home_logo.png";

// import frame data (JSON), render, and logo
import marioData from "./frames/mario.json";
import marioRender from "./imgs/mario_render.png";
import marioLogo from "./imgs/mario_logo.webp";
import donkeykongData from "./frames/donkeykong.json";
import donkeykongRender from "./imgs/donkeykong_render.png";
import donkeykongLogo from "./imgs/donkeykong_logo.webp";
import captainfalconData from "./frames/captainfalcon.json";
import captainfalconRender from "./imgs/captainfalcon_render.png";
import captainfalconLogo from "./imgs/captainfalcon_logo.webp";
import foxData from "./frames/fox.json";
import foxRender from "./imgs/fox_render.png";
import foxLogo from "./imgs/fox_logo.webp";
import jigglypuffData from "./frames/jigglypuff.json";
import jigglypuffRender from "./imgs/jigglypuff_render.png";
import jigglypuffLogo from "./imgs/jigglypuff_logo.webp";
import kirbyData from "./frames/kirby.json";
import kirbyRender from "./imgs/kirby_render.png";
import kirbyLogo from "./imgs/kirby_logo.webp";
import linkData from "./frames/link.json";
import linkRender from "./imgs/link_render.png";
import linkLogo from "./imgs/link_logo.webp";
import luigiData from "./frames/luigi.json";
import luigiRender from "./imgs/luigi_render.png";
import luigiLogo from "./imgs/luigi_logo.webp";
import nessData from "./frames/ness.json";
import nessRender from "./imgs/ness_render.png";
import nessLogo from "./imgs/ness_logo.webp";
import pikachuData from "./frames/pikachu.json";
import pikachuRender from "./imgs/pikachu_render.png";
import pikachuLogo from "./imgs/pikachu_logo.webp";
import samusData from "./frames/samus.json";
import samusRender from "./imgs/samus_render.png";
import samusLogo from "./imgs/samus_logo.webp";
import yoshiData from "./frames/yoshi.json";
import yoshiRender from "./imgs/yoshi_render.png";
import yoshiLogo from "./imgs/yoshi_logo.webp";

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname === "/" ? "/" : window.location.pathname
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Nav to a given path
  const navigateTo = (path) => {
    setCurrentPath(path);
    window.history.pushState({}, "", path);
  };

  // Necessary data for each character
  const characters = [
    {
      data: marioData, // JSON
      render: marioRender, // Render
      logo: marioLogo, // Logo
      altText: "Mario Logo", // Alt text for logo
      link: "/mario-frame-data" // URL path to character's page
    },
    {
      data: donkeykongData,
      render: donkeykongRender,
      logo: donkeykongLogo,
      altText: "DK Logo",
      link: "/donkeykong-frame-data"
    },
    {
      data: linkData,
      render: linkRender,
      logo: linkLogo,
      altText: "Link Logo",
      link: "/link-frame-data"
    },
    {
      data: samusData,
      render: samusRender,
      logo: samusLogo,
      altText: "Samus Logo",
      link: "/samus-frame-data"
    },
    {
      data: yoshiData,
      render: yoshiRender,
      logo: yoshiLogo,
      altText: "Yoshi Logo",
      link: "/yoshi-frame-data"
    },
    {
      data: kirbyData,
      render: kirbyRender,
      logo: kirbyLogo,
      altText: "Kirby Logo",
      link: "/kirby-frame-data"
    },
    {
      data: foxData,
      render: foxRender,
      logo: foxLogo,
      altText: "Fox Logo",
      link: "/fox-frame-data"
    },
    {
      data: pikachuData,
      render: pikachuRender,
      logo: pikachuLogo,
      altText: "Pikachu Logo",
      link: "/pikachu-frame-data"
    },
    {
      data: luigiData,
      render: luigiRender,
      logo: luigiLogo,
      altText: "Luigi Logo",
      link: "/luigi-frame-data"
    },
    {
      data: nessData,
      render: nessRender,
      logo: nessLogo,
      altText: "Ness Logo",
      link: "/ness-frame-data"
    },
    {
      data: captainfalconData,
      render: captainfalconRender,
      logo: captainfalconLogo,
      altText: "Captain Falcon Logo",
      link: "/captainfalcon-frame-data"
    },
    {
      data: jigglypuffData,
      render: jigglypuffRender,
      logo: jigglypuffLogo,
      altText: "Jigglypuff Logo",
      link: "/jigglypuff-frame-data"
    }
  ];

  // filter character sbased on user's search term
  const filteredCharacters = characters.filter((character) =>
    character.altText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // set whether the modal visible or not?
  const [showAboutModal, setShowAboutModal] = useState(false);

  const AboutModal = () => (
    <div className="modal-background">
      <div className="modal-content">
        <h1>About & Help</h1>

        <h3>About the App</h3>
        <p>
          The purpose of this app is to serve as a user-friendly referential
          database for the attributes of a fighter's moves and stats in the
          platform fighting Super Smash Bros. Ultimate for the Nintendo Switch.
        </p>

        <h3>Using the App</h3>
        <p>
          Use the search bar to find a specific fighter's page or simply click
          on their logo to navigate to the page.
        </p>

        <h3>What is Super Smash Bros Ultimate?</h3>
        <p>
          Super Smash Bros Ultimate (SSBU) is the fifth installment in the Super
          Smash Bros. platform fighter series. The series has garned a sizeable
          competitive community, including many tournaments from locals and
          regionals to international super majors. For a deeper dive, visit the{" "}
          <a
            href="https://www.ssbwiki.com/Super_Smash_Bros._Ultimate"
            target="_blank"
            rel="noopener noreferrer"
          >
            SmashWiki page
          </a>
          .
        </p>

        <h3>Understanding Frame Data</h3>
        <p>
          In fighting games, speed is measured through "frames" or a single
          still image. SSBU runs at 60 fps, meaning that each frame represents
          1/60th of a second. For instance, when a move's startup is 10 frames,
          it takes 1/6th of a second before the move can hit the opponent after
          pressing the attack button.
        </p>
        <p>
          {" "}
          A deep understanding of frame data is crucial for competitive players,
          as they are able to better understand the strengths and weaknesses of
          each fighter and how to play around their various moves.
        </p>

        <h3>Key Terms</h3>
        <p>Here's a breakdown of some terms you might come across:</p>
        <ul>
          <li>
            <strong>Weight:</strong> How resistant a character is to knockback.
            Heavier characters have a higher weight.
            <li>
              <strong>Gravity:</strong> How fast characters fall when airborne
              measured in units/frame^2.
            </li>
          </li>
          <li>
            <strong>Walk & Run Speed:</strong> The speed at which character
            walks and runs measured in units/frame.
          </li>

          <li>
            <strong>Grab Speed:</strong> How fast a character can grab the
            opponent measured in frames.
          </li>
          <li>
            <strong>Fastest Out of Shield (OoS) Option:</strong> The fastest
            move that can be used by the character after shielding. For some
            characters, a second, more practical option is provided.
          </li>
          <li>
            <strong>Startup Frame:</strong> How fast it takes for a move to
            become active (first able to hit the opponent).
          </li>
          <li>
            <strong>Active Frames:</strong> The frames in which the move is able
            to hit the opponent.
          </li>
          <li>
            <strong>Frames End Lag:</strong> Amount of unactionable recovery
            frames after a move finishes. Higher = worse.
          </li>
          <li>
            <strong>Frames on Shield:</strong> Amount of advantage or
            disadvantage on shield. For instance, a move that is -10 on shield
            means that the opponent can act 10 frames faster than the player.
            Lower = worse.
          </li>
          <li>
            <strong>Base Damage:</strong> Amount of damage a move does without
            additional factors taken into account.
          </li>
        </ul>

        <h3> Acknowledgements </h3>
        <p>
          Frame data was gathered from{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/16fmsoqDoQaR1eteVk2uuzIH2DB4iQHVrqiG8VRbRA7Q/edit#gid=123650910"
            target="_blank"
            rel="noopener noreferrer"
          >
            this Google spreadsheet
          </a>{" "}
          as well as webscraped from{" "}
          <a
            href="https://www.ssbwiki.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ssbwiki.com
          </a>{" "}
          individual character pages.
        </p>

        <h3>Future Work and Limitations</h3>
        <p>
          {" "}
          Please note that this application is a simple proof-of-concept for the
          first 12 fighters in Super Smash Bros. Ultimate. Future work would
          involve implementing pages for all 85 fighters in Super Smash Bros.
          Ultimate as well as including images / gifs of each move in question.{" "}
        </p>

        <button onClick={() => setShowAboutModal(false)}>Close</button>
      </div>
    </div>
  );

  // logic to determine which content to display based on current URL ath
  let content;
  let homepageClass = "";
  const character = characters.find((char) => currentPath === char.link);

  if (currentPath === "/") {
    // default homepage content configuration
    homepageClass = "homepage-background";
    content = (
      // homepage components
      <>
        <img
          src={SSBU}
          alt="SSBU Logo"
          className="logo"
          style={{ width: "500px", marginBottom: "-20px" }}
        />
        <img
          src={frameDataImg}
          alt="Frame Data"
          className="frame-data-logo"
          style={{ width: "300px", marginTop: "0px", marginBottom: "40px" }}
        />

        <input
          type="text"
          id="searchBar"
          placeholder="Search for a character..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "500px", margin: "20px auto" }}
        />
        <div className="logo-grid">
          {filteredCharacters.map((character, index) => (
            <Logo
              key={index}
              image={character.logo}
              altText={character.altText}
              linkTo={character.link}
            />
          ))}
        </div>
      </>
    );
  } else if (character) {
    // display frame data content for selected character
    content = (
      <FrameData characterData={character.data} renderImg={character.render} />
    );
  } else {
    // 404 error
    content = <div>Page not found.</div>;
  }

  return (
    <div className={`App ${homepageClass}`}>
      {showAboutModal && <AboutModal />}
      {currentPath === "/" && (
        <>
          <button
            className="top-button about-button"
            onClick={() => setShowAboutModal(true)}
          >
            About
          </button>

          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px"
            }}
          >
            <a
              href="https://github.com/michaelbai30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLogo}
                alt="GitHub"
                className="github-logo"
                style={{ cursor: "pointer", width: "60px", height: "60px" }}
              />
            </a>
          </div>
        </>
      )}
      {currentPath !== "/" && (
        <a href="/" className="home-button">
          <img src={homeLogo} alt="Home" />
        </a>
      )}
      {content}
    </div>
  );
}
