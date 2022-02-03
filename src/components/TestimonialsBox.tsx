const TestimonialsBox = () => {
  return (
    <>
      <section className="p-8 rounded-3xl bg-gray-100 md:grid md:grid-cols-2 md:gap-4">
        <div>
          <p className="font-semibold text-xl text-blue-600 italic">
            Our Reviews
          </p>
          <p className="font-bold text-2xl">
            {" "}
            What our fucking Customers are Saying
          </p>
        </div>

        <div id="testimonialCard">
          <img
            src="../assets/images/ava-1.jpg"
            alt="testmonial avatar"
            id="testmonialAvatar"
            className="border border-2 border-green-500 rounded-full p-1"
            width={64}
            height={64}
          />
          <p id="testifierName" className="font-bold text-xl my-3">
            Amy Smith
          </p>
          <p id="testimony" className="text-lg">
            This is the best website i have ordered something fron. I highly
            reommend
          </p>
          <div id="testimonyNavButtons">
            <button className="p-4 mx-2 bg-gray-100 active:bg-gray-300 hover:bg-gray-200">
              Prev
            </button>
            <button className="p-4 mx-2 bg-gray-100 active:bg-gray-300 hover:bg-gray-200">
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsBox;
