import Waiting from "./waiting";

export default function WaitlistContent() {
  return (
    <>
      <section>
        <article>
          <h3>Waiting</h3>
          <Waiting/>
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