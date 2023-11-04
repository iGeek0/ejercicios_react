import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  const showContent = false;
  if (showContent) {
    return(
      // <Lista></Lista>
      // Fragment
      // <Fragment> === <>
      <>
        <Header/>
        <Content/>
        <Footer/>
      </>
    )
  } else {
    return <h1>Contenido no disponible</h1>
  }
}

export default App