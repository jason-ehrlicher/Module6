const Greeting = ({name, children}) => {
    return (
        <div>
            {children ? children : `Hello ${name || 'World'}`}
        </div>
    )
};

export default Greeting;
