import Header from './components/Header/Header';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import './App.css';

function App() {

  const routeResult = useRoutes(routes);

  return (
    <div className="App container-fluid">
     <Header />
     {routeResult}
    </div>
  );
}

export default App;
