import {GrSearch} from "react-icons/gr";

function Search () {
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