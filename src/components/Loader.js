import ContentLoader from "react-content-loader";

function Loader () {
     return(
        <ContentLoader 
            speed={2}
            width={340}
            height={84}
            viewBox="0 0 340 84"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="49" y="108" rx="3" ry="3" width="140" height="11" /> 
            <rect x="-1" y="9" rx="0" ry="0" width="70" height="40" /> 
            <rect x="73" y="8" rx="0" ry="0" width="70" height="40" /> 
            <rect x="148" y="7" rx="0" ry="0" width="70" height="40" />
        </ContentLoader>
     )
}

export default Loader;