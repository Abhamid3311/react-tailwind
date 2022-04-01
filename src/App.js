import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <h1 className='text-5xl'>WelCome to my Money pricing Academy</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
