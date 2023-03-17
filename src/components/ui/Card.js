function Card(props) {
  return (
    <div className="bg-white overflow-hidden rounded-xl drop-none transition-all hover:drop-shadow-2xl">
        {props.children}
    </div>
  );
}

export default Card;
