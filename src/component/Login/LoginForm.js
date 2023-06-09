import Button from "../UI/Button";
import Card from "../UI/Card";
const LoginForm = (props) => {
  const logInHandler = () => {
    props.onClick();
  };
  return (
    <Card>
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
        <Button onClick={logInHandler} />
      </form>
    </Card>
  );
};

export default LoginForm;
