import { Provider } from 'react-redux';
import './App.css';
import IceCreamContainer from './components/IceCreamContainer';
import CookieContainer from './components/CookieContainer';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <IceCreamContainer />
        <CookieContainer />
      </Provider>
    </div>
  );
}

export default App;
