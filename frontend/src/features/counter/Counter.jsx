import reactLogo from '../../assets/react.svg';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from './counterSlice';



export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <a href="https://react.dev">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <p>Count: {count}</p>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}