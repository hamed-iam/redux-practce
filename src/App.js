import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import ChipsContainer from './components/ChipsContainer';
import CookieContainer from './components/CookieContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <ChipsContainer />
        <CookieContainer />
        <IceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
