import { Fragment, Suspense, useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import LoginForm from "./component/Login/LoginForm";
import Welcome from "./component/UI/Welcome";
import Navigation from "./component/header/Navigation";
function App() {
  const [logIn, setLogIn] = useState(true);
  const [navigation, setNavigation] = useState(false);

  const logInHandler = (email, password) => {
    setLogIn(false);
    setNavigation(true);
  };
  const logOutHandler = () => {
    setLogIn(true);
    setNavigation(false);
  };
  return (
    <Fragment>
      <Header />
      <main>
        {!logIn ? (
          <div>
            {navigation && <Navigation onClick={logOutHandler} />}
            <Welcome />
          </div>
        ) : (
          <LoginForm onClick={logInHandler} />
        )}
      </main>
    </Fragment>
  );
}

export default App;
