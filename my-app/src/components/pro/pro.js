import './pro.scss'

const Pro = ({src, add}) => {
    let classNames = 'line' + add
    return (
        <div className='pro'>
            <div className={classNames}></div>
            <img src={src} alt="" />
            <div className={classNames}></div>
        </div>
    )
}

export default Pro;