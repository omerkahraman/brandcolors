import { getContrastYIQ } from "../helpers"

export default function Brand({brand}) {
    return(
        <div className="brand">
            <h5>{brand.title}</h5>
            <div className="brand-color">
                {brand.colors.map(color => (
                <span style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>{color}</span>
                ))}
            </div>
        </div>
    )
}