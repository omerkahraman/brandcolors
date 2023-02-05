import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../MainContext";
import { useContext } from "react";
import LazyLoad from 'react-lazyload';

function Content () {

    const {brands} = useContext(MainContext)
    
    return (
        <main className="content">
            <div className="header">
                <Search />
            </div>
            <section className="brands">
                {brands.map(brand => (
                    <LazyLoad key={brand.slug} once={true} overflow={true} placeholder="Loading...">
                        <Brand brand={brand} />
                    </LazyLoad>
                ))}
            </section>
        </main>
    )
}   

export default Content;