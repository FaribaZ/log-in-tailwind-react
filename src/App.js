import { Fragment } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Navigation from "./component/header/Navigation";
import LoginForm from "./component/Login/LoginForm";

function App() {
  return (
    <Fragment>
      <Header />
      <LoginForm />
    </Fragment>
  );
}

export default App;
