import React, { useState } from "react";
import "./styles.css";
import PlayerData from "./PlayersDetail";
import { useEffect } from "react";

export default function App() {
  const PlayerDetails = PlayerData();
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const addToSelectedList = (player) => {
    setSelectedPlayers([...selectedPlayers, player]);
  };
  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter((user) => user !== player));
  };
  useEffect(() => {
    // setSelectedPlayers(PlayerDetails);
  }, []);
  console.log("data", PlayerDetails);
  return (
    <div className="App">
      <table>
        <h3>Players Details</h3>
        <tr>
          <th>Name</th>
          <th>style</th>
          <th>batting</th>
          <th>bowling</th>
          <th>response</th>
        </tr>
        {PlayerDetails?.map((player, index) => (
          <tr>
            <td>{player.name}</td>
            <td>{player.type}</td>
            <td>{player.batting}</td>
            <td>{player.bowling}</td>
            <button
              className="selectButton"
              onClick={() => addToSelectedList(player)}
            >
              select
            </button>
          </tr>
        ))}
      </table>
      <table>
        <h3>Selected Players Details</h3>

        <tr>
          <th>Name</th>
          <th>style</th>
          <th>batting</th>
          <th>bowling</th>
          <th>response</th>
        </tr>
        {selectedPlayers?.map((player, index) => (
          <tr>
            <td>{player.name}</td>
            <td>{player.type}</td>
            <td>{player.batting}</td>
            <td>{player.bowling}</td>
            <button
              className="removeButton"
              onClick={() => removePlayer(player)}
            >
              Remove
            </button>
          </tr>
        ))}
      </table>
    </div>
  );
}
