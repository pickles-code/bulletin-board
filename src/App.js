import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads')
      .then(res => {
        setPosts(res.data);
        console.log(res.data);
      })
  }, [])


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

      <ul>
        {
          posts.map(post => <li key={post.id}> {post.title} </li>)
        }
      </ul>
    </div>
  );
}

export default App;
