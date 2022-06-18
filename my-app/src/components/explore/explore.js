
import './explore.scss'

const Explore = () => {
    return (
        <div className="explore">

            <div className="explore_nav">
                <div className="explore_text-image explore_nav-block">
                    <img src={process.env.PUBLIC_URL + '/img/vector.svg'} alt="" />
                    <span className='explore_nav-text'>Coffee house</span>
                </div>
                <div className='explore_nav-block'>
                    <span className='explore_nav-text'>Our coffee</span>
                </div>
                <div className='explore_nav-block'>
                    <span className='explore_nav-text'>For your pleasure</span>
                </div>
            </div>

            <h1 className="explore_caption">Everything You Love About Coffee</h1>

            <div className="explore_pro">
                <div className="line"></div>
                <img src={process.env.PUBLIC_URL + '/img/secondvector.svg'} alt="" />
                <div className="line"></div>
            </div>

            <div className="explore_descs">
                <h2 className="explore_desc">We make every day full of energy and taste</h2>
                <h2 className="explore_desc">Want to try our beans?</h2>
                <div className="explore_more">More</div>
            </div>
        </div>
    )
}

export default Explore