const waiting = [
  {
    name: "HeyCallMeClay",
  },

  {
    name: "TommyYoza",
  },

  {
    name: "bigmoose_12",
  },
  {
    name: "OnBumpers",
  },
  {
    name: "Notorious_BLT",
  },
  {
    name: "MelvinS0n",
  },
  {
    name: "T0xicLibra",
  },
  {
    name: "Jarl Maxi",
  },
  {
    name: "Overrrrit_",
  },
];

export default function Waiting() {
  // Table for clients Waiting
  let waitTable = "<table>";
  waitTable += "<tr><th>Name</th></tr>";

  waiting.forEach(function (item) {
    waitTable += `
    <tr>
    <td>${item.name}</td>
    </tr>
    `;
  });

  waitTable += "</table>";

  return (
    <>
      <Waiting/>
    </>
  )
}