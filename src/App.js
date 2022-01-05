import "./styles/App.css";
import HamburgerMenu from "./components/HamburgerMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Travel from "./components/Pages/Travel";
import Blog from "./components/Pages/Blog";
import BlogItemPage from "./components/Pages/BlogItemPage";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <HamburgerMenu />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/travel" component={Travel} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:blogId" component={BlogItemPage} />
            
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;