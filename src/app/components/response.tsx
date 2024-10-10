import AdjustableVerticalVector from "./vectorLine";

export function Response() {
  return (
    <div className="justify-center items-center text-center text-white">
      <div
        style={{ border: "2px solid white", padding: "20px", margin: "20px" }}
      >
        <p className="text-2xl">Will you be joining our wedding?</p>
        <div className="flex items-center justify-evenly text-xl space-between align-middle py-5">
          <div >
            <button>Yes</button>
          </div>
          {/* <Vector/> */}
          <AdjustableVerticalVector lineLength={50} />
          <div>
            <button>No</button>
          </div>
        </div>
        <p className="text-sm">
          Please choose your answer and move to next step
        </p>
        <p>_ _ _</p>
      </div>
      <div className="flex py-5 items-center justify-center">
        <AdjustableVerticalVector lineLength={200} />
      </div>
    </div>
  );
}
