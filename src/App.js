import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";
import Routes from './pages/Routes';
import UserContextProvider from './context/UserContext';
import CountContextProvider from './context/CountContext';

function App() {
  return (
    <>
      <UserContextProvider>
        <CountContextProvider>
          <Routes />
        </CountContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
