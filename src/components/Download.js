import { useContext, useState } from "react";
import MainContext from "../MainContext";
import {GrLink, GrDownload, GrClose} from "react-icons/gr"; 


function Download () {
    const {selectedBrands, setSelectedBrands} = useContext(MainContext)
    const [downloadUrl, setDownloadUrl] = useState();

    const getLink = () => {
        prompt(`Here's the URL to share`, `http://localhost:3005/collections/${selectedBrands.join(',')}`)
    }

    return(
          <div className="download">
              <div className="actions">
                <a href={downloadUrl}>
                    <GrDownload />
                </a>
                <button onClick={getLink}>
                    <GrLink />
                </button>
              </div>
              <div className="selected" onClick={() => setSelectedBrands([])}>
                <GrClose />
                {selectedBrands.length} brands collected
              </div>
              
          </div>
    )
}

export default Download;