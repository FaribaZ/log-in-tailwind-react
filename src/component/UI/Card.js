const Card = (props) => {
  return (
    <div className="w-72 mx-auto mt-8 p-4 bg-white shadow-md rounded">
      {props.children}
    </div>
  );
};

export default Card;
