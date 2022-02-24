import About from "../components/About";
import Gbedu from "../components/cards/gbedu";
import Mono from "../components/cards/mono";
import PiggyVest from "../components/cards/piggyvest";
import Spleet from "../components/cards/spleet";
import Brass from "../components/cards/brass";
import Connect from "../components/Connect";


function HomePage() {
    return (
        <div>
            <About />
            <Gbedu />
            <PiggyVest />
            <Mono />
            <Brass />
            <Spleet />
            <Connect /> 
            
        </div>
    );
}

export default HomePage;