export default function WaitlistContent() {
  return (
    <>
      <section className="text-center">
        <article className="flex-column">
          <h3 className="my-5 font-bold">Waiting</h3>
          <div id="waiting" className="flex justify-center bg-salmon"></div>
        </article>

        <article>
          <h3 className="my-5 font-bold">In Progress</h3>
          <div id="working" className="flex justify-center bg-lorange"></div>
        </article>

        <article>
          <h3 className="my-5 font-bold">On Hold</h3>
          <div id="on-hold" className="flex justify-center bg-salmon"></div>
        </article>

        <article>
          <h3 className="my-5 font-bold">Completed</h3>
          <div id="complete" className="flex justify-center bg-lorange"></div>
        </article>
      </section>
    </>
  );
}