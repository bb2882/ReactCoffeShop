import './card.scss'

const Card = ({src, desc, price}) => {
    return (
        <div className="best_card">
            <div className="best_card-img">
                <img src={src} alt="" />
            </div>
            <div className="best_card-desc">{desc}</div>
            <div className="best_card-price">{price}</div>
        </div>
    )
}

export default Card