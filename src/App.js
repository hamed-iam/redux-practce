import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <IceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
