import MainContext from './MainContext';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import BrandsData from './brands.json'
import { useEffect, useState } from 'react';
import Copied from './components/Copied';
import { forceCheck } from 'react-lazyload';
// import {
//   BrowserRouter as Router, 
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Collection from './components/Collection';

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

    useEffect(() => {
      setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
    }, [search])

    useEffect(() => {
      forceCheck();
    }, [brands])

    const data = {
      brands,
      selectedBrands,
      setSelectedBrands,
      setCopied,
      search, 
      setSearch
    }


    const router = createBrowserRouter([
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/collection/:slugs",
        element: <Collection />,
      },
    ]);

  return (
    <>
    <MainContext.Provider value={data}>
      {copied && <Copied color={copied}/>}
      <Sidebar />
      <RouterProvider router={router} />

    </MainContext.Provider>
    </>
  );
}

export default App;
