import React from "react";
import "./styles.css";

// component to display frame data of a given character
const FrameData = ({ characterData, renderImg }) => {
  const {
    Character,
    MiscInfo,
    GroundMoves,
    AerialMoves,
    SpecialMoves
  } = characterData;

  // transform DonkeyKong and CaptainFalcon key to have spaces in between
  const formatCharacterName = (name) => {
    const exceptions = {
      DonkeyKong: "Donkey Kong",
      CaptainFalcon: "Captain Falcon"
    };

    return exceptions[name] || name;
  };

  // render component
  return (
    <div
      className={Character.toLowerCase()}
      style={{ textAlign: "center", padding: "100px" }}
    >
      {/* Display character image */}
      <img
        src={renderImg}
        alt={`${Character} Render`}
        style={{ width: "300px", display: "block", margin: "auto" }}
      />

      {/* Display character name */}
      <h1 className="data-title">
        {formatCharacterName(Character)}'s Frame Data
      </h1>

      {/* Misc Data */}
      <h3>Character Data</h3>
      <table style={{ margin: "auto" }}>
        <tbody>
          {Object.keys(MiscInfo).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{MiscInfo[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Ground Moves */}
      <div className="table-container">
        <h2 className="move-type-title">Ground Moves</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Move</th>
              <th>Startup Frame</th>
              <th>Active Frame</th>
              <th>Frames End Lag</th>
              <th>Frames On Shield</th>
              <th>Base Damage</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(GroundMoves).map((move) => (
              <tr key={move}>
                <td>{move}</td>
                <td>{GroundMoves[move].StartupFrame}</td>
                <td>{GroundMoves[move].ActiveFrame}</td>
                <td>{GroundMoves[move].FramesEndLag}</td>
                <td>{GroundMoves[move].FramesOnShield}</td>
                <td>{GroundMoves[move].BaseDamage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Aerial Moves */}
      <div className="table-container">
        <h2 className="move-type-title">Aerial Moves</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Move</th>
              <th>Startup Frame</th>
              <th>Active Frame</th>
              <th>Frames End Lag</th>
              <th>Frames On Shield</th>
              <th>Autocancels</th>
              <th>Base Damage</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(AerialMoves).map((move) => (
              <tr key={move}>
                <td>{move}</td>
                <td>{AerialMoves[move].StartupFrame}</td>
                <td>{AerialMoves[move].ActiveFrame}</td>
                <td>{AerialMoves[move].FramesEndLag}</td>
                <td>{AerialMoves[move].FramesOnShield}</td>
                <td>{AerialMoves[move].Autocancels.join(", ")}</td>
                <td>{AerialMoves[move].BaseDamage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Special Moves */}
      <div className="table-container">
        <h2 className="move-type-title">Special Moves</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Move</th>
              <th>Startup Frame</th>
              <th>Active Frame</th>
              <th>Frames End Lag</th>
              <th>Frames On Shield</th>
              <th>Base Damage</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(SpecialMoves).map((move) => (
              <tr key={move}>
                <td>{move}</td>
                <td>{SpecialMoves[move].StartupFrame}</td>
                <td>{SpecialMoves[move].ActiveFrame}</td>
                <td>{SpecialMoves[move].FramesEndLag}</td>
                <td>{SpecialMoves[move].FramesOnShield}</td>
                <td>{SpecialMoves[move].BaseDamage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FrameData;
