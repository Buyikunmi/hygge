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

        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;

//
