import globe from "../assets/globe.png";

export default function () {
  return (
    <div className="flex justify-center items-center text-center w-full bg-blue-900 py-6">
      <img src={globe} alt="" className="size-14 mr-3" />
      <h1 className="text-3xl">my travel journal.</h1>
    </div>
  );
}
