const LoginForm = () => {
  return (
    <div className="w-72 mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <form>
        <label className="bold">
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 mb-2 rounded border border-gray-400"
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="w-full border rounded border-gray-400 p-2 mb-2 "
          />
        </label>
        <button
          type="submit"
          className="w-full bg-fuchsia-300 rounded py-2 px-4 hover:text-white mt-3"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
