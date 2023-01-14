import { jsonData } from "./data.js";
import Search from "./Search.js";
import "./Home.css";

let Home = () => {
  //   console.log(jsonData);
  return (
    <div>
      <Search data={jsonData} />
    </div>
  );
};

export default Home;
