import logo from './logo.svg';
import './main.css';

import Header from './components/Header/Header';
import PostImage from './components/PostImage/PostImage';
import PostContent from './components/PostContent/PostContent';
import Box from './components/Box/Box';
function App() {
  return (
    <div className="App">
      <Header/>

      <div className='posts-container'>
        <div className='post'>
         <PostImage/>
         <PostContent/>
        </div>
        <div className='post'>
         <PostImage/>
         <PostContent/>
        </div>
      </div>

      <div className='box-container'>
        <Box/>
        <Box/>
        <Box/>
      </div>

    </div>
  );
}

export default App;
