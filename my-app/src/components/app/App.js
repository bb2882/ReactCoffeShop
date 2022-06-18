import Explore from "../explore/explore";
import About from "../about/about";
import Best from "../best/best";
import Footer from "../footer/footer";

const App = () => {
    return (
        <div className='app'>
            <Explore/>
            <About/>
            <Best/>
            <Footer/>
        </div>
    )
}

export default App;
