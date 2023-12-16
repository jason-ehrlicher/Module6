// Create a SingleCat component for rendering each
// individual cat, and add an image property for each one.

const Singlecat = ({cat}) => {
    return (
        <div>
            <h2>{cat.name}</h2>
            <p>{cat.latinName}</p>
            <img src={cat.image} alt={cat.name} style={{ width: '100px', height: '100px' }} />
        </div>
    );
};

export default Singlecat;