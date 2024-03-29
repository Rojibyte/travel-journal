import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./data";

const Cards = Data.map((card) => {
  return <Card key={card.id} {...card} />;
});

function App() {
  return (
    <>
      <Navbar />
      <section className="p-8">{Cards}</section>
    </>
  );
}

export default App;
