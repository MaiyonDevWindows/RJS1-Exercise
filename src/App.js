import logo from './logo.svg';
import './App.css';

function App() {
  let isUserLoggedIn = true;
  const ArrayNumbers = [0, 1, 2, 3, 4, 5];
  var Object = {
    UserName: 'admin',
    Password: 'admin'
  };
  if (isUserLoggedIn === true) {
    return (
      <div>
        <h1>Hello User</h1>
        <p>Array: {ArrayNumbers.toString()}</p>
        <p>Object: {JSON.stringify(Object)}</p>
      </div>
    );
  } else {
    return <h1>Login Now</h1>;
  }
}

export default App;
