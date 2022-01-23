const Newsletter = () => {
  return (
    <>
      <section className=" my-8 rounded-3xl bg-gray-100 p-24" id="newsletter">
        <div className="text-center mb-8">
          <span className="font-semibold text-blue-600 italics">
            -Our Newsletter
          </span>
          <p className="text-3xl font-bold text-gray-800">
            Sign Up to our Newsletter
          </p>
        </div>
        <div className="text-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className=" sm:block mb-2 bg-gray-50 focus:ring-4 focus:ring-green-800  active:border-opacity-0 lg:text-2xl hover:ring-1 mr-3 px-8 py-3 rounded-full"
          />
          <button className="bg-green-500 rounded-full font-semibold text-white lg:text-xl px-4 py-2 lg:px-8 lg:py-3 hover:bg-green-600 transition duration-200 ring-4 ring-green-300">
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
