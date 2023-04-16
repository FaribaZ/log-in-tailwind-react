import React from "react";

const LoginForm = () => {
  return (
    <div className="w-72 mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
      <form>
        <label className="block mb-2">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 mt-1 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mt-1 border border-gray-300 rounded"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 px-4 rounded shadow-md hover:bg-purple-600 mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
