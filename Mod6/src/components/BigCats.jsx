import { useState } from "react";
import Singlecat from "./SingleCat";

const cats = [
  { name: "Cheetah", latinName: "Acinonyx jubatus", image: "" },
  { name: "Cougar", latinName: "Puma concolor", image: "" },
  { name: "Jaguar", latinName: "Panthera onca", image: "" },
  { name: "Leopard", latinName: "Panthera pardus", image: "" },
  { name: "Lion", latinName: "Panthera leo", image: "" },
  { name: "Snow leopard", latinName: "Panthera uncia", image: "" },
  { name: "Tiger", latinName: "Panthera tigris", image: "" },
];

const BigCats = () => {
  const [catsList, setCatsList] = useState(cats);

  //   Sorting and reversing list
  const sortAlphabetically = () => {
    const sortedCats = [...catsList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCatsList(sortedCats);
  };

  const reverseList = () => {
    const reversedCats = [...catsList].reverse();
    setCatsList(reversedCats);
  };

  //   Filter Panthera

  const filterPanthera = () => {
    const filteredCats = cats.filter(cat => cat.latinName.includes('Panthera'));
    setCatsList(filteredCats);
};

// Reset

const resetList = () => {
    setCatsList(cats)
}

  return (
    <>
      <div>
        {catsList.map((cat, index) => (
          <Singlecat key={index} cat={cat} />
        ))}

        {/* Buttons */}
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
        <button onClick={reverseList}>Reverse List</button>
        <button onClick={filterPanthera}>Filter Panthera</button>
        <button onClick={resetList}>Reset</button>
      </div>
    </>
  );
};

export default BigCats;
