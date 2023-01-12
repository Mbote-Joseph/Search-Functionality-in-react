import { useState } from "react";
import "./Search.css";

let Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  console.log(data);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm.toLowerCase());
    setFilteredData(
      data.filter((item) =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  //   {filteredData.map((item) => {
  //     return <li key={item.id}>{item}</li>;
  //   })}

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="form-control form-group"
      />

      <br />
      <ul>
        {filteredData.map((item) => {
          return (
            <div key={item.id} className="card-item">
              <h4 className="card-header"> {item.name} </h4>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.description}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
