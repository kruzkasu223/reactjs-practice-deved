// function App(){
//   const time = new Date().toLocaleDateString();
//   return(
//     React.createElement('div', null, [
//       React.createElement('h1', {style:{color:'red'}}, time),
//       React.createElement('button', null, 'Submit'),
//     ])
//   )
// }

function App() {
    const time = new Date().toLocaleString();
    const buttonStyle = { color: "red", fontSize: 20 };
    const alertH = () => {
        alert("from React...");
    };
    return (
        <div>
            <Tweet />
            <h1>{time}</h1>
            <button style={buttonStyle} onClick={alertH}>
                Submit
            </button>
        </div>
    );
}

//Create Another Component
function Tweet() {
    return (
        <div>
            <h2>Tweet</h2>
            <p>This is not that complicated</p>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
