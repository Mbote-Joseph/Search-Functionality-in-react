import { useState } from "react";
import "./Search.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

let Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [cart, setCart] = useState([]);
  //   const list = [];
  const [isOpen, setIsOpen] = useState(false);

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
  const onAdd = (item) => {
    // e.preventDefault();
    setCart([
      ...cart,
      [
        {
          id: item.id,
          name: item.name,
          imageUrl: item.imageUrl,
          price: item.price,
          description: item.description,
        },
      ],
    ]);
    // console.log(list);
  };

  console.log(cart);
  console.log(cart.length);

  if (cart.length > 0) {
    let total = 0;
    let prices = [];
    for (let i = 0; i < cart.length; i++) {
      prices.push(cart[i].price);
    }

    total = prices.reduce((acc, item) => {
      return acc + item;
    });

    console.log(`Total Price ${total}`);
  }

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
              <button className="btn btn-primary" onClick={() => onAdd(item)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
          <button onClick={() => setIsOpen(false)}>Close</button>
          {filteredData.map((item) => {
            // console.log(item);
            return (
              <div key={item.id} className="card-item">
                <h4 className="card-header"> {item.name} </h4>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.description}</p>
                <h5>${item.price}</h5>
              </div>
            );
          })}
        </Modal>
      </div>
    </div>
  );
};

export default Search;
