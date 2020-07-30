import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import TopPart from "./components/TopPart";
import Search from "./components/Search";
import Video from "./components/Video";
import Bags from "./components/Bags";
import Sunglasses from "./components/Sunglasses";
import PromisePanel from "./components/PromisePanel";
import BrandDiv from "./components/BrandDiv";
import EndingSection from "./components/EndingSection";

class App extends Component {
    render() {
        return (<Router>

            <Route path="/E-commerce" exact render={
                () => {

                    document.title = "Blackbox";
                    return (<div>
                        <div className="backgroundGradient">

                        </div>
                        <div className="introduction">
                            <TopPart
                            />
                            <Search
                            />
                            <Video
                            />
                        </div>
                        <div className="products">
                            <Bags/>
                            <Sunglasses/>
                        </div>

                            <PromisePanel/>
                            <BrandDiv/>
                            <EndingSection/>
                    </div>)
                }
            }/>
        </Router>)
    }
}

export default App;
