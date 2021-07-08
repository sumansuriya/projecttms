import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { AdminList } from "./pages/AdminList";
import { AdminSignin } from "./pages/AdminSignin";
import { AdminSignUp } from "./pages/AdminSignUp";
import { AppNav } from "./pages/AppNav";
import { useSelector } from "react-redux";
function App() {
  const history = useHistory();
  const state = useSelector((state) => state);

  // Will chekck from the storage
  /*if (!state.authSuccess) {
    history.push("/user-signin");
  }*/
  const authSuccessFromStorage = localStorage.getItem("authSuccess");
  if (authSuccessFromStorage !== "1") {
    history.push("/admin-signin");
  }

  return (
    <>
      {authSuccessFromStorage === "1" && <AppNav />}

      <Route exact path="/" component={AdminSignin} />

      {/** Demo IN the Class */}
      <Route exact path="/admin-list" component={AdminList} />
      <Route exact path="/admin-signin" component={AdminSignin} />
      <Route exact path="/admin-signup" component={AdminSignUp} />
    </>
  );
}

export default App;
