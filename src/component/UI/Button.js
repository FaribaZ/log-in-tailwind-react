const Button = (props) => {
  return (
    <div>
      <button
        type="submit"
        className="w-full bg-fuchsia-300 rounded py-2 px-4 hover:text-white mt-3"
        onClick={props.onClick}
      >
        Log in
      </button>
    </div>
  );
};

export default Button;
