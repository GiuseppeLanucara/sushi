import Navbar from './components/navbar';
import Card from './components/card';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Cosa vuole ordinare oggi?</h1>
        <hr />
        <div className='row'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

    </>


  );
}

export default App;
