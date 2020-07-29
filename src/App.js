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

class App extends Component {
    render() {
        return (<Router>
            <Route path="/E-commerce" exact render={
                () => {
                    document.title = "Blackbox";
                    return (<div>
                        <TopPart
                        />
                        <Search
                        />
                        <Video
                        />
                    </div>)
                }
            }/>
        </Router>)
    }
}

export default App;
