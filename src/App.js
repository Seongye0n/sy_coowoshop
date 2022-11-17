import './App.css';
import Header from './layouts/Header';
import Menubar from './layouts/Menubar';
import Coowo from './components/Coowo';
import Reservation from './components/Reservation';
import Review from './components/Review';
import News from './components/News';
import Footer from './layouts/Footer';

function App() {
  return (
    <>
      <Header />
      <Menubar />
      <Coowo />
      <Reservation />
      <Review />
      <News />
      <Footer/>
      {console.log(window.innerWidth)}
    </>
  );
}

export default App;
