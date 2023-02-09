import React, { useState } from "react";

// class Name extends Component {
//     state = { name: "Gourav Sharma!" };

//     setName(name) {
//         this.setState({ ...this.state, name});
//     }
//     render() {
//         return (
//             <>
//             <h1>The name is: {this.state.name}</h1>
//             <button onClick={() => this.setName("Gourav")}>Click Me!</button>
//             </>
//         );
//     }
// }

const Name = () => {
    const [state, setState] = useState({ name: "Gourav Sharma!" });

    let setName = (e) => {
        setState({ ...state, name: "Gourav"});
    };

    return (
        <>
        <h1>The name is: {state.name}</h1>
        <button onClick={setName}>Click Me!</button>
        </>
    );
};

export default Name;
