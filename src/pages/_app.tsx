import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="md:w-11/12 mx-auto">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;

//
