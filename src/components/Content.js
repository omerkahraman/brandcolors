import Search from "./Search";
import BrandsData from '../brands.json';
import { useState } from "react";
import Brand from "./Brand";

function Content () {
    
    const brandsArray = [];

    Object.keys(BrandsData).map(key => {
        brandsArray.push(BrandsData[key])
    });

    const [brand, setBrand] = useState(brandsArray)

    return (
        <main className="content">
            <div className="header">
                <Search />
            </div>
            <section className="brands">
                {brand.map(brand => (
                <Brand brand={brand} />
                ))}
            </section>
        </main>
    )
}   

export default Content;