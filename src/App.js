import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const App = () => {
  // useEffect(async () => {
  //   await fetch('/api')
  //     .then((res) => res)
  //     .then((result) => {
  //       return result.json();
  //     })
  //     .then((r) => {
  //       console.log(r);
  //     });
  // }, []);

  useEffect(async () => {
    await fetch('/api')
      .then((result) => {
        return result.json();
      })
      .then((r) => {
        console.log(r);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
