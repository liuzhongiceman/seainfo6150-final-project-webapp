import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { isEmpty } from 'lodash';

import Home from "./Home/Home";
import Error from "./Error/Error";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Categories from './Categories/Categories';
import Post from './Post/Post';
import HowItWorks from './HowItWorks/HowItWorks';
import ContactUs from './ContactUs/ContactUs';
import TrustSafety from './TurstSafety/TrustSafety';
import AboutUs from './AboutUs/AboutUs';



const App = () => {
  
  const [posts, setPosts] = useState({});
  const [pageData, setPageData] = useState({});
  
  const loadData = async () => {
      const response = await fetch("https://demo0243101.mockable.io/");
      const data = await response.json();
      setPosts(data);
  }
  
  const loadPagesData = async () => {
    const response = await fetch("https://demo9223558.mockable.io/");
    const data = await response.json();
    setPageData(data);
}
  
  useEffect(() => {
      if (isEmpty(posts)) {
          loadData();
          loadPagesData();
      }
  },[posts])
  
  const fetchData = () => {
    let listItems = [];
    Object.keys(posts).map((category) => {
      Object.keys(posts[category]).map((key, index) => {
        listItems.push(posts[category][key]);
      });
    });
    return listItems;
  }
  
  const fetchCategories = () => {
    let categories = [];
    Object.keys(posts).map((category) => {
        categories.push(category);
    });
    return categories;
  }
  
  return (
    <Router>
      <div>
          <Header />
          <Switch>
            
            <Route path="/" exact render={() => <Home posts={fetchData()} categories={fetchCategories()} />} />
            
            <Route path="/categories/:category" exact render={({ match }) => (<Categories posts={posts} category={match.params.category} /> )} />
             
            <Route path="/posts/:postId" exact render={({ match }) => (<Post categories={fetchCategories()} posts={fetchData()} postId={match.params.postId}/> )} />
            
            <Route path="/HowItWorks" exact render={() => <HowItWorks pageData={pageData} />} />
            
            <Route path="/TrustSafety" exact render={() => <TrustSafety pageData={pageData} />} />
            
            <Route path="/ContactUs" exact render={() => <ContactUs pageData={pageData} />} />
            
            <Route path="/AboutUs" exact render={() => <AboutUs pageData={pageData} />} />
            
            <Route component={Error} />
            
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
