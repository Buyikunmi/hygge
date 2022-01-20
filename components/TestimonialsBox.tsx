const TestimonialsBox = () => {
  return (
    <>
      <section className="bg-gray-300">
        <div>
          <span>Our Reviews</span>
          <p>What our Customers are Saying</p>
        </div>

        <div id="testimonialCard">
          <img src="#" alt="testmonial avatar" id="testmonialAvatar" />
          <p id="testifierName">Amy Smith</p>
          <p id="testimony">
            This is the best website i have ordered something fron. I highly
            reommend
          </p>
        </div>

        <div id="testimonyNavButtons">
          <button className="p-4 mx-2 bg-gray-100 active:bg-gray-300 hover:bg-gray-200">
            Prev
          </button>
          <button className="p-4 mx-2 bg-gray-100 active:bg-gray-300 hover:bg-gray-200">
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default TestimonialsBox;
