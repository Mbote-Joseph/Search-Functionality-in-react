import { useState } from "react";
import "./Search.css";

let Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [cart, setCart] = useState([]);
  //   const list = [];

  //   console.log(data);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // console.log(searchTerm.toLowerCase());
    setFilteredData(
      data.filter((item) =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  //   Adding item to the Cart list
  let onAdd = (item) => {
    // item.preventDefault();

    setCart([
      ...cart,
      {
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        price: item.price,
        description: item.description,
      },
    ]);
    // console.log(list);
  };

  console.log(cart);
  console.log(cart.length);

  // The rendering part
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
      <div className="display">
        {filteredData.map((item) => {
          return (
            <div key={item.id} className="card-item">
              <h4 className="card-header"> {item.name} </h4>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.description}</p>
              <h5>${item.price}</h5>
              <button className="btn btn-primary" onClick={onAdd}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
