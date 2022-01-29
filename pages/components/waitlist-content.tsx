import { waiting, working, complete } from "../../public/scripts/waitlist";

export default function WaitlistContent() {
  return (
    <>
      <section>
        <article>
          <h3>Waiting</h3>
          <div id="waiting"></div>
        </article>

        <article>
          <h3>In Progress</h3>
          <div id="working"></div>
        </article>

        <article>
          <h3>Completed</h3>
          <div id="complete"></div>
        </article>
      </section>
    </>
  );
}

// Table for clients Waiting
let waitTable: string = '<table>';
waitTable += '<tr><th>Name</th></tr>'

waiting.forEach(function(item){
  waitTable += `
  <tr>
  <td>${item.name}</td>
  </tr>
  `;
});

waitTable += '</table>';

// Table for works in progress
let workTable: string = '<table>';
workTable += '<tr><th>Name</th></tr>'

working.forEach(function(item){
  workTable += `
  <tr>
  <td>${item.name}</td>
  </tr>
  `;
});

workTable += '</table>';

// Table for completed works
let doneTable: string = '<table>';
doneTable += '<tr><th>Name</th><th>Commission</th></tr>'

complete.forEach(function(item){
  doneTable += `
  <tr>
  <td>${item.name}</td>
  <td>${item.work}</td>
  </tr>
  `;
});

doneTable += '</table>';

if (typeof window === 'object') {
  document.getElementById('waiting')!.innerHTML = waitTable;
  document.getElementById("working")!.innerHTML = workTable;
  document.getElementById("complete")!.innerHTML = doneTable;
}