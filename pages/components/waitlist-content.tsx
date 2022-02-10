export default function WaitlistContent() {
  return (
    <>
      <section className="text-center">
        <article className="flex-column">
          <h3 className="font-bold">Waiting</h3>
          <div id="waiting" className="flex justify-center bg-salmon m-5 p-2 rounded"></div>
        </article>

        <article>
          <h3 className="font-bold">In Progress</h3>
          <div id="working" className="flex justify-center bg-lorange m-5 p-2 rounded"></div>
        </article>

        <article>
          <h3 className="font-bold">On Hold</h3>
          <div id="on-hold" className="flex justify-center bg-salmon m-5 p-2 rounded"></div>
        </article>

        <article>
          <h3 className="font-bold">Completed</h3>
          <div id="complete" className="flex justify-center bg-lorange m-5 p-2 rounded"></div>
        </article>
      </section>
    </>
  );
}