import './main.css';

import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Boxes from './components/Boxes/Boxes';

function App() {
  return (
    <div className="App">
      <Header title='Lorem Ipsum'/>
      <Posts />
      <Boxes/>
    </div>
  );
}

export default App;
