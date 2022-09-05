import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Provider } from "react-redux";
import configureStore from "../store/store";

const store = configureStore();
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <div className="md:w-11/12 mx-auto">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}
export default MyApp;

//
