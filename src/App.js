import MainContext from './MainContext';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import BrandsData from './brands.json'
import { useEffect, useState } from 'react';
import Copied from './components/Copied';

function App() {

    const brandsArray = [];

    Object.keys(BrandsData).map(key => {
        brandsArray.push(BrandsData[key])
    });

    const [brands, setBrands] = useState(brandsArray) 
    const [selectedBrands, setSelectedBrands] = useState([])
    const [copied, setCopied] = useState(false)
    const [search, setSearch] = useState('');

    useEffect(() => {
      console.log(selectedBrands)
    }, [selectedBrands])

    useEffect(() => {
      if(copied) {
        const timeout = setTimeout(() => {
          setCopied(false)
        }, 500)
        return() => {
          clearTimeout(timeout)
        }
      }
    }, [copied])

    const data = {
      brands,
      selectedBrands,
      setSelectedBrands,
      setCopied,
      search, 
      setSearch
    }


  return (
    <>
    <MainContext.Provider value={data}>
      {copied && <Copied color={copied}/>}
      <Sidebar />
      <Content />
    </MainContext.Provider>
    </>
  );
}

export default App;
