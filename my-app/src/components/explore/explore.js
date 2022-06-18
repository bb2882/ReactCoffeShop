import Pro from '../pro/pro'
import Navbar from '../navbar/navbar'
import './explore.scss'

const Explore = () => {
    return (
        <section className="explore">

            <Navbar 
            src={process.env.PUBLIC_URL + '/img/vector.svg'} 
            add="explore"
            text1="Coffee house"
            text2="Our coffee"
            text3 ="For your pleasure"/>

            <h1 className="explore_caption">Everything You Love About Coffee</h1>

            <Pro src={process.env.PUBLIC_URL + "/img/secondvector.svg"} add=''/>

            <div className="explore_descs">
                <h2 className="explore_desc">We make every day full of energy and taste</h2>
                <h2 className="explore_desc">Want to try our beans?</h2>
                <div className="explore_more">More</div>
            </div>
        </section>
    )
}

export default Explore