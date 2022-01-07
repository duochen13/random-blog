import "./styles/App.css";
import HamburgerMenu from "./components/HamburgerMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Skill from "./components/Pages/Skill";
import Travel from "./components/Pages/Travel";
import Blog from "./components/Pages/Blog";
import BlogItemPage from "./components/Pages/BlogItemPage";
import Contact from "./components/Pages/Contact";
// blogs
import ReactBlogItemZero from "./components/Pages/blogs/ReactBlogItemZero";
import ReactBlogItemOne from "./components/Pages/blogs/ReactBlogItemOne";
import ReactBlogItemTwo from "./components/Pages/blogs/ReactBlogItemTwo";
import ReactBlogItemThree from "./components/Pages/blogs/ReactBlogItemThree";


function App() {
  return (
    <>
      <Router>
        <HamburgerMenu />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/skill" component={Skill} />
            <Route path="/travel" component={Travel} />

            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/0" component={ReactBlogItemZero} />
            <Route path="/blog/1" component={ReactBlogItemOne} />
            <Route path="/blog/2" component={ReactBlogItemTwo} />
            <Route path="/blog/3" component={ReactBlogItemThree} />
            

            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;