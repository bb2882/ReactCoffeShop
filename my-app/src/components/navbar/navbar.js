const Navbar = ({src, add, text1, text2, text3}) => {
    const classNames = add + '_nav'
    return (
        <div className={classNames}>
        <div className={classNames + '-block text-image'}>
            <img src={src} alt="" />
            <span className={classNames + '-text'}>{text1}</span>
        </div>
        <div className={classNames + '-block'}>
            <span className={classNames + '-text'}>{text2}</span>
        </div>
        <div className={classNames + '-block'}>
            <span className={classNames + '-text'}>{text3}</span>
        </div>
    </div>
    )
}

export default Navbar