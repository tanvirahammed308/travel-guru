const Booking = () => {
  return (
    <div className="my-28 mx-auto container grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-7 items-center">
      <div className="md:w-[450px] mx-3">
        <h1 className=" text-4xl font-bold z-20 py-5">Cox's bazar</h1>
        <p>
          <small className="font-semibold">
            Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
            known for its very long, sandy beachfront, stretching from Sea Beach
            in the north to Kolatoli Beach in the south. Aggameda Khyang
            monastery is home to bronze statues and centuries-old Buddhist
            manuscripts. South of town, the tropical rainforest of Himchari
            National Park has waterfalls and many birds. North, sea turtles
            breed on nearby Sonadia Island.
          </small>
        </p>
      </div>
      <div className="w-[500px]">
        
        <form action="" className="border mx-5 p-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Origin</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[400px]"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Destination</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[400px] "
            />
          </label>
          <div className="flex gap-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">From</span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">To</span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
