import logo from './logo.svg';
import './App.css';
import { MockArray } from './Mock.js';

function App() {
  var isUserLoggedIn = true;
  if (isUserLoggedIn === true) {
    return (
      <>
        {MockArray.map(({ name, age }) => (
          <p key={name}>Tên sinh viên: {name}, tuổi: {age}.</p>
        ))}
      </>
    );
  } else {
    return <h1>Login Now</h1>;
  }
}

export default App;
