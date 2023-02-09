import React, { useState } from "react";

// class Name extends Component {
//     state = { name: "Sarfaraz Ali!" };

//     setName(name) {
//         this.setState({ ...this.state, name});
//     }
//     render() {
//         return (
//             <>
//             <h1>The name is: {this.state.name}</h1>
//             <button onClick={() => this.setName("Sarfaraz")}>Click Me!</button>
//             </>
//         );
//     }
// }

const Name = () => {
    const [state, setState] = useState({ name: "Sarfaraz Ali!" });

    let setName = (e) => {
        setState({ ...state, name: "Sarfaraz"});
    };

    return (
        <>
        <h1>The name is: {state.name}</h1>
        <button onClick={setName}>Click Me!</button>
        </>
    );
};

export default Name;