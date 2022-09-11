import './App.css';
import Header from './components/header/Header';
import ServicesList from './components/serviceList/ServicesList';
import Search from './components/search/Search';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Search/>
      <div className='description'>
          <p>
          Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе. То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов.
          </p>
      </div>
      <ServicesList/>
    </div>
  );
}

export default App;
