import "./home.css";
import Calculator from "../Calculator/Calculator";
function Home(props) {
  return (
    <div className="align-center">
      <h1>Welcome to the calculator </h1>
      <div>
        <button className="button-class">Open Calculator</button>
        <button className="button-class">History</button>
        <Calculator />
      </div>
    </div>
  );
}

export default Home;
