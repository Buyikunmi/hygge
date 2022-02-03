import { BreadCrumb, Footer, InputWidget } from "../components";

const Login = () => {
  const doLogin = () => {
    alert("Logged in successfully");
  };
  return (
    <>
      {/* Begin Breadcrumb Section */}
      <BreadCrumb />
      {/*  End Breadcrumb Section */}
      <div className="text-center justify-center ">
        <p className="font-semibold text-blue-500 italic ">-Login</p>
        <h2 className="text-2xl font-bold">Login into your Account</h2>
      </div>

      <div className="container mb-12 px-6 py-3 rounded-3xl mx-auto sm:w-9/12 md:w-6/12 lg:w-5/12">
        <div className="">
          <form action="">
            <InputWidget name="email" type="email" title="Email Address" />
            <InputWidget name="password" type="password" title="Password" />
            <div className="my-4">
              <input
                type="checkbox"
                name="remember"
                className="text-green-400 bg-green-400mr-2"
              />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <button
              className="bg-green-500 text-white px-6 py-3 font-semibold rounded-full w-full text-xl mb-2 "
              onClick={doLogin}
            >
              Login
            </button>
          </form>
        </div>
        {/* begin helper buttons */}
        <div className="flex justify-center">
          <button className=" bg-white px-6 py-3 rounded-full font-semibold border tranisition duration-200 text-xl ease-out hover:border-gray-800">
            Create Account
          </button>
          <button className=" underline px-6 py-3 rounded-full font-semibold tranisition duration-200 text-xl ease-in-out hover:text-green-600 ">
            Forgot Password?
          </button>
        </div>
      </div>
      {/* end helper buttons  */}
      {/* begin footer section */}
      <Footer />
      {/* end footer section */}
    </>
  );
};

export default Login;
