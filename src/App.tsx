import './App.css'
import  Header   from './components/Header'
import Banner from './components/Banner'
import MainLayout from './components/MainLayout';

function App() {
  

  return (
    <div className="my-4 space-y-2 flex flex-col flex-grow px-3">
      <Header />
      <Banner />
      <MainLayout />
     

    </div>
  );
}


export default App
