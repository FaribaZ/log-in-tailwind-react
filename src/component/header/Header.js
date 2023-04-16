import { Fragment } from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Fragment>
      <header>
        <h1 className="text-slate-50 text-2xl md:mx-auto mx-auto bg-fuchsia-900 p-5">
          A Typical Page: Just as a practice👩‍💻
        </h1>
      </header>
      <Navigation />
    </Fragment>
  );
};

export default Header;
