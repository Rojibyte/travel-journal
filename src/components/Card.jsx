export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={`../src/assets/${props.coverImg}`} alt="" srcset="" />
      <div className="cardContent">
        <div className="cardLocation">
          <img src="../src/assets/path.png" alt="" srcset="" />
          <span>{props.location}</span>
          <a
            href={props.link}
            target="_blank"
            className="text-gray-400"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <div className="cardDate">
          <span>{props.startDate} - </span>
          <span>{props.endDate}</span>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
