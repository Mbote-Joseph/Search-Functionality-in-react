import { jsonData } from "./data.js";
import Search from "./Search.js";

let Home = () => {
  //   console.log(jsonData);
  return <Search data={jsonData} />;
};

export default Home;
