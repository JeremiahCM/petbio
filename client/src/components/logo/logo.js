/* eslint-disable arrow-body-style */
import mainImage from "../../images/PetBioNav.png"
import './logo.css'

/**
 * Shows the logo for the application.
 */
const mainLogo = () => {
    return <img src={mainImage} alt="" className="mainLogo"/>
}

export default mainLogo;