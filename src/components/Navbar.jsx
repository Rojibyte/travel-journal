import globe from "../assets/globe.png";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center text-center w-full bg-blue-900 py-8">
      <img src={globe} alt="" className="size-14 mr-3" />
      <p className="text-3xl">my travel journal.</p>
    </div>
  );
}
