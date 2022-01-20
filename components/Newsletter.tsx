const Newsletter = () => {
  return (
    <>
      <section className="bg-gray-100 p-5" id="newsletter">
        <span>Our Newsletter</span>
        <p>Sign Up to our Newsletter</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="bg-red-50 ring-1 mr-3"
        />
        <button className="bg-green-500 text-white">Sign Up</button>
      </section>
    </>
  );
};

export default Newsletter;
