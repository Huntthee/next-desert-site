export default function WaitlistContent() {
  return (
    <>
      <section className="text-center">
        <article className="flex-column">
          <h3 className="font-bold bg-salmon w-fit m-auto px-2 rounded-t">
            Waiting
          </h3>
          <div
            id="waiting"
            className="flex justify-center bg-salmon mb-5 mr-5 ml-5 p-2 rounded"
          ></div>
        </article>

        <article>
          <h3 className="font-bold bg-lorange w-fit m-auto px-2 rounded-t">
            In Progress
          </h3>
          <div
            id="working"
            className="flex justify-center bg-lorange mb-5 mr-5 ml-5 p-2 rounded"
          ></div>
        </article>

        <article>
          <h3 className="font-bold bg-salmon w-fit m-auto px-2 rounded-t">
            On Hold
          </h3>
          <div
            id="on-hold"
            className="flex justify-center bg-salmon mb-5 mr-5 ml-5 p-2 rounded"
          ></div>
        </article>

        <article>
          <h3 className="font-bold  bg-lorange w-fit m-auto px-2 rounded-t">
            Completed
          </h3>
          <div
            id="complete"
            className="flex justify-center bg-lorange mb-5 mr-5 ml-5 p-2 rounded"
          ></div>
        </article>
      </section>
    </>
  );
}