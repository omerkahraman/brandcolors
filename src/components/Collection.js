import { useParams, Link, useNavigate } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";
import Brand from "./Brand";
import MainContext from "../MainContext";
import { useContext, useEffect } from "react";
import LazyLoad from 'react-lazyload';
import Download from "./Download";

function Collection () {
    const {slugs} = useParams();
    const navigate = useNavigate();

    const {selectedBrands, setSelectedBrands, brands} = useContext(MainContext);  

    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    },[])

    const clearSelectedBrands = () => {
        setSelectedBrands([]);
        navigate('/')
    }

    return(
        <main className="content">
            <div className="header">

                <Link to='/' onClick={clearSelectedBrands}>
                    <a className="back-btn">
                    <GrLinkPrevious />
                    All Brands
                    </a>
                </Link>

                {selectedBrands.length !== 0 && <Download />}
            </div>
            <section className="brands">
                {selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug);
                    return(
                    <LazyLoad key={brand.slug} once={true} overflow={true} placeholder="Loading...">
                        <Brand brand={brand} />
                    </LazyLoad>
                    )
                })}
            </section>
        </main>
    )
}

export default Collection;