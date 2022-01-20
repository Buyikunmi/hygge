import {BreadCrumb, Footer} from "../components/

const Login = () => {
  const doLogin = () => {
    alert("Logged in successfully");
  };
  return (
    <>
      {/* Begin Breadcrumb Section */}
      <BreadCrumb />
      {/*  End Breadcrumb Section */}
      <span>Login</span>
      <h2>Login into your Account</h2>

      <form action="">
        <div className="my-4">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" className="block" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="block" required />
        </div>
        <div className="my-4">
          <input type="checkbox" name="remember" className="mr-2" />
          <label htmlFor="remember">Remember Me</label>
        </div>

        <button className="bg-green-500 text-white" onClick={doLogin}>
          Login
        </button>
      </form>
      {/* begin helper buttons */}
      <div className="flex">
        <button className="bg-gray-300 mx-4">Create Account</button>
        <button>Forgot Password?</button>
      </div>
      {/* end helper buttons  */}
      {/* begin footer section */}
      <Footer />
      {/* end footer section */}
    </>
  );
};

export default Login;
