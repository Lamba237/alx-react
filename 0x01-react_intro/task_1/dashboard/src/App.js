import { getFullYear, getFooterCopy } from './utils';
import logo from './holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <>
    <div className="App-header">
      <img src={ logo } alt="holberton-logo" />
      <h1>School dashboard</h1>
    </div>

    <div className="App-body">
      <p>Login to access the full dashboard</p>

      <label for="email"  style={{
        marginRight: '10px'
      }}>Email: </label>
      <input type='email' id='email' name='email' />

      <label for="pwd" style={{
        marginLeft: '10px',
        marginRight: '10px'
      }}>Password: </label>
      <input type='password' id='pwd' name='pwd' />
      
      <button style={{
        marginLeft: '10px'
      }}>OK</button>
    </div>
  
    <div className="App-footer">
      <p>Copyright { getFullYear() } - { getFooterCopy(true) } </p>
    </div>
    </>
  );
}

export default App;
