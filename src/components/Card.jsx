export default function Card(props) {
  console.log(props);
  return (
    <div className="p-8 flex text-gray-950">
      <img
        src={`../src/assets/${props.coverImg}`}
        alt=""
        className="size-max mr-4"
      />
      <div className="cardContent">
        <div className="cardLocation text-xs flex items-center">
          <img src="../src/assets/path.png" alt="" className="size-max" />
          <span className="pl-1 pr-4 uppercase tracking-widest">
            {props.location}
          </span>
          <a
            href={props.link}
            target="_blank"
            className="text-gray-400 underline font-normal"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="text-2xl font-bold text-blue-950 pt-1 pb-2">
          {props.title}
        </h1>
        <div className="font-bold text-blue-950 pb-1">
          <span className="text-xs">{props.startDate} - </span>
          <span className="text-xs">{props.endDate}</span>
        </div>
        <p className="text-xs">{props.description}</p>
      </div>
    </div>
  );
}
