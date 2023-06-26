
import Energy from './energy';
import Water from './water';
import Garbage from './garbage';

import './App.css';

function App() {
  return (
    <div className="App">
      <div classname="header"></div>

      <div className='apartment'>
        <input type="text" placeholder="enter apartment name" />
        <div>

          <Energy />
          <Water />
          <Garbage />
        </div>

      </div>

    </div>
  );
}

export default App;
