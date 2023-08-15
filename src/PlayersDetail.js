export default function PlayersDetail() {
  const PlayerData = [
    {
      name: "rahul",
      type: "batsman",
      batting: 70,
      bowling: 20
    },
    {
      name: "mani",
      type: "batsman",
      batting: 95,
      bowling: 50
    },
    {
      name: "kohli",
      type: "batsman",
      batting: 90,
      bowling: 30
    },
    {
      name: "rohit",
      type: "batsman",
      batting: 85,
      bowling: 40
    },
    {
      name: "bhuvaneswar",
      type: "bowler",
      batting: 30,
      bowling: 80
    },
    {
      name: "chahal",
      type: "bowler",
      batting: 20,
      bowling: 90
    },
    {
      name: "surya",
      type: "batsman",
      batting: 86,
      bowling: 10
    },
    {
      name: "pandya",
      type: "all ronder",
      batting: 70,
      bowling: 60
    },
    {
      name: "jadeja",
      type: "all rounder",
      batting: 70,
      bowling: 70
    }
  ];
  console.log("player data oin player details:", PlayerData);

  return PlayerData;
}
// return PlayerData;
