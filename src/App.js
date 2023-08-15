import React, { useState } from "react";
import "./styles.css";
import PlayerData from "./PlayersDetail";
import { useEffect } from "react";
import PlayersDetail from "./PlayersDetail";

export default function App() {
  const [val, setVal] = useState("name");
  const PlayerDetails = PlayerData();
  const [data, setData] = useState(PlayerDetails);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const addToSelectedList = (player) => {
    setSelectedPlayers([...selectedPlayers, player]);
  };
  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter((user) => user !== player));
  };
  const sorting = (val) => {
    console.log(val);
    setData(
      data.slice().sort((a, b) => {
        return b[val] - a[val];
      })
    );
  };

  useEffect(() => {
    // sorting(val);
    // setSelectedPlayers(PlayerDetails);
  }, [PlayerDetails, val]);
  // console.log("data", PlayerDetails);
  return (
    <div className="App">
      <table>
        <h3>Players Details</h3>
        <tr>
          <th onClick={() => sorting("name")}>Name</th>
          <th>style</th>
          <th>batting</th>
          <th>bowling</th>
          <th>response</th>
        </tr>
        {data?.map((player, index) => (
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
