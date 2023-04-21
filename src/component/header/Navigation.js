const Navigation = (props) => {
  const logOutHandler = () => {
    props.onClick();
  };

  return (
    <div className="absolute top-3 right-12 mt-3">
      <a href="/" className="m-2  text-white	">
        Users
      </a>
      <a href="/" className="m-2 text-white	">
        Admin
      </a>
      <button
        className="rounded border-1 bg-fuchsia-300  rounded py-2 px-4  text-center ml-2 drop-shadow-md hover:text-white "
        onClick={logOutHandler}
      >
        Log out
      </button>
    </div>
  );
};

export default Navigation;
