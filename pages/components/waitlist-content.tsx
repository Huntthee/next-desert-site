export default function WaitlistContent() {
  return (
    <>
      <section className="text-center lg:flex-wrap xl:flex xl:justify-center xl:mt-7">
        <div className="lg:flex lg:justify-center">
          <article className="lg:w-fit">
            <h3 className="font-bold bg-salmon w-fit m-auto px-2 rounded-t">
              Waiting
            </h3>
            <div
              id="waiting"
              className="flex justify-center bg-salmon mb-5 mr-5 ml-5 p-2 rounded lg:p-5"
            ></div>
          </article>

          <article className="lg:w-fit">
            <h3 className="font-bold bg-lorange w-fit m-auto px-2 rounded-t">
              In Progress
            </h3>
            <div
              id="working"
              className="flex justify-center bg-lorange mb-5 mr-5 ml-5 p-2 rounded lg:p-5"
            ></div>
          </article>

          <article className="lg:w-fit">
            <h3 className="font-bold bg-salmon w-fit m-auto px-2 rounded-t">
              On Hold
            </h3>
            <div
              id="on-hold"
              className="flex justify-center bg-salmon mb-5 mr-5 ml-5 p-2 rounded lg:p-5"
            ></div>
          </article>
        </div>


        <article className="max-h-10 overflow-auto lg:w-fit lg:m-auto xl:m-2">
          <h3 className="font-bold  bg-lorange w-fit m-auto px-2 rounded-t">
            Completed
          </h3>
          <div
            id="complete"
            className="flex justify-center bg-lorange mb-5 mr-5 ml-5 p-2 rounded lg:p-5"
          ></div>
        </article>
      </section>
    </>
  );
}