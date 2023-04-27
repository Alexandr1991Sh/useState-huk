import React, {useState} from 'react';
import './App.css';

function App() {
    // let a = 1
    let [a, setA] = useState(1)
    const increase = () => {
        setA(++a)
        console.log(a++)
    }

    const del = () => {
        setA(a = 0)
    }

    return (
        <div className="App">
            <button onClick={increase}>Push My</button>
            <button onClick={del}>0</button>
            <div>
                {a}
            </div>
        </div>
    );
}

export default App;
