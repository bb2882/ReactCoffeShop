import Navbar from '../navbar/navbar'
import Pro from '../pro/pro'
import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <Navbar src={process.env.PUBLIC_URL + '/img/fourthvector.svg'} 
            add="footer"
            text1="Coffee house"
            text2="Our coffee"
            text3 ="For your pleasure"/>

            <Pro src={process.env.PUBLIC_URL + '/img/thirdvector.svg'} add=" black-line"/>
        </footer>
    )
}

export default Footer