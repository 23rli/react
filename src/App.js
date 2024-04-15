
import './App.css';

function App() {
  return(
    <MyButton />
  );
}

function MyButton(){
  return (
    <button>I'm a Button</button>
  );
}

function AboutPage(){
  return (
    <>
    <h1>About Page</h1>
    <p>Hello! <br/> How are you? </p>;
    <img className = "avatar"/>
    </>
  );
}

export default App;
