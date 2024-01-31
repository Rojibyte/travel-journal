import globe from "../assets/globe.png";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center text-center w-full bg-blue-900 py-8">
      <img src={globe} alt="" className="size-6 mr-3" />
      <p className="text-base">my travel journal.</p>
    </div>
  );
}
