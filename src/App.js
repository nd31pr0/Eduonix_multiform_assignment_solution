import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { Divider } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Divider />
      <Footer/>
    </div>
  );
}

export default App;
