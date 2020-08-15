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
    state = {
        follows: [0, 2, 4],
        heartIcon: ["heart", "heart", "heart", "heart", "heart", "heart"]
    };
    clear = () => {
        this.setState({follows: [0, 2, 4]})
    };
    twitterHover = () => {
        this.setState({follows: [1, 2, 4]})
    };
    facebookHover = () => {
        this.setState({follows: [0, 3, 4]})
    };
    googleHover = () => {
        this.setState({follows: [0, 2, 5]})
    };
    clickHeart = (index) => {
        let newHeartIcon = [...this.state.heartIcon];
        if (this.state.heartIcon[index] === "heart") {
            newHeartIcon[index] = "heartClicked";
            this.setState({heartIcon: newHeartIcon})
        } else {
            newHeartIcon[index] = "heart";
            this.setState({heartIcon: newHeartIcon})
        }
    };

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
                            <Bags
                                clickHeart={this.clickHeart}
                                heartIcon={this.state.heartIcon}
                            />
                            <Sunglasses
                                clickHeart={this.clickHeart}
                                heartIcon={this.state.heartIcon}
                            />
                        </div>

                        <PromisePanel/>
                        <BrandDiv/>
                        <EndingSection
                            twitter={this.twitterHover}
                            google={this.googleHover}
                            facebook={this.facebookHover}
                            logos={this.state.follows}
                            clear={this.clear}
                        />
                    </div>)
                }
            }/>
        </Router>)
    }
}

export default App;
