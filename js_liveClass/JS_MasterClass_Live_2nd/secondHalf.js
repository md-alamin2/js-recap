const name = "mizan bhai",
  score = 95,
  address = "Dhaka";
const objMentor = {
  name,
  score,
  address,
};

const records = [
  { name: "Tanzid", score: 56, address: "Dhaka" },
  { name: "Zihad", score: 35, address: "Barishal" },
  { name: "Maruf", score: 30, address: "Dhaka" },
  { name: "Shoshee", score: 80, address: "Barishal" },
  { name: "Rafi", score: 30, address: "Dhaka" },
];


const arr = [];
records.reduce((selection, playerStat)=>{

  // I will get the top class players
    const runs = playerStat?.score >= 35 ? playerStat?.score >= 60 ? "Top Class" : "Avg. Class" : "Not Top Class";
    
    runs === "Top Class" && arr.push(playerStat)
    return arr;
},{})

const opennerPlayer = arr.filter((player)=> player?.score > 50);
console.log(arr)
// console.log(opennerPlayer)
