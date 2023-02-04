import { useContext } from "react";
import {GrSearch} from "react-icons/gr";
import MainContext from "../MainContext";

function Search () {

    //const {search, setSearch} = useContext(MainContext);

    return(
        <div className="search">
            <div className="icon">
                <GrSearch />
            </div>
            <input type="text" placeholder="Search Brands"></input>
        </div>
    )
}

export default Search;