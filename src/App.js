import './App.css';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const App = ()=> {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="container">
        <Nav />
        <Main />
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
