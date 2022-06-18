import './best.scss'
import Card from '../card/card'

const Best = () => {
    return (
        <section className="best">

            <h2 className="best_caption">Our best</h2>

            <div className="best_cards">
                <Card src={process.env.PUBLIC_URL + '/img/firstcard.jpg'} desc="Solimo Coffee Beans 2 kg" price="10.73$"/>
                <Card src={process.env.PUBLIC_URL + '/img/secondcard.jpg'} desc="Presto Coffee Beans 1 kg" price="15.99$"/>
                <Card src={process.env.PUBLIC_URL + '/img/thirdcard.jpg'} desc="AROMISTICO Coffee 1 kg" price="6.99$"/>
            </div>
        </section>
    )
}

export default Best