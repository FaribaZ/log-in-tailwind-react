import { Fragment, useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import LoginForm from "./component/Login/LoginForm";
import Welcome from "./component/UI/Welcome";
function App() {
  const [logIn, setLogIn] = useState(false);
  const logInHandler = (email, password) => {
    setLogIn(true);
    alert("hey");
  };

  return (
    <Fragment>
      <Header />
      <main>{logIn ? <Welcome /> : <LoginForm onClick={logInHandler} />}</main>
    </Fragment>
  );
}

export default App;
