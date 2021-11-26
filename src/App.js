import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <Fragment>
      <Header />
      {!isLoggedIn &&<Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
