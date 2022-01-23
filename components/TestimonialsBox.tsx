const TestimonialsBox = () => {
  return (
    <>
      <section className="p-8 rounded-3xl bg-gray-100 lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <p className="font-semibold text-xl text-blue-600 italic">
            Our Reviews
          </p>
          <p className="font-bold text-2xl"> What our Customers are Saying</p>
        </div>

        <div id="testimonialCard">
          <img src="#" alt="testmonial avatar" id="testmonialAvatar" />
          <p id="testifierName">Amy Smith</p>
          <p id="testimony">
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
