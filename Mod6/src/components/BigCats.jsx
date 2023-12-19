import { useState } from "react";
import Singlecat from "./SingleCat";
import AddCatForm from "./AddCatForm";

const cats = [
  { name: "Cheetah", latinName: "Acinonyx jubatus", image: "/cheetah.webp" },
  { name: "Cougar", latinName: "Puma concolor", image: "/cougar.webp" },
  { name: "Jaguar", latinName: "Panthera onca", image: "/jaguar.jpeg" },
  { name: "Leopard", latinName: "Panthera pardus", image: "leopard.jpeg" },
  { name: "Lion", latinName: "Panthera leo", image: "/lion.jpeg" },
  {
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: "/snow leopard.jpeg",
  },
  { name: "Tiger", latinName: "Panthera tigris", image: "tiger.jpeg" },
];

const BigCats = () => {
  const [catsList, setCatsList] = useState(cats);

  //   Sorting Alphabetically
  const sortAlphabetically = () => {
    const sortedCats = [...catsList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCatsList(sortedCats);
  };

  //   Reverse List
  const reverseList = () => {
    const reversedCats = [...catsList].reverse();
    setCatsList(reversedCats);
  };

  //   Filter Panthera

  const filterPanthera = () => {
    const filteredCats = cats.filter((cat) =>
      cat.latinName.includes("Panthera")
    );
    setCatsList(filteredCats);
  };

  // Reset
  const resetList = () => {
    setCatsList(cats);
  };

  // Add New Cat
  const addNewCat = (newCat) => {
    setCatsList([...catsList, newCat]);
  };

  // Delete Cat
  const deleteCat = (catName) => {
    setCatsList(catsList.filter((cat) => cat.name !== catName));
  };

  return (
    <>
      {/* //   Pass the addNewCat function as a prop to the AddCatForm component */}
      <AddCatForm onAddCat={addNewCat} />

      <div className="cat-list">
        {catsList.map((cat, index) => (
          <Singlecat key={index} cat={cat} onDelete={deleteCat} />
        ))}
      </div>

      {/* Buttons */}
      <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      <button onClick={reverseList}>Reverse List</button>
      <button onClick={filterPanthera}>Filter Panthera</button>
      <button onClick={resetList}>Reset</button>
    </>
  );
};

export default BigCats;
