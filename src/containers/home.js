import React, { Component} from 'react';
import Intro from '../components/intro';
import Banner from '../components/banner';
import Pricing from '../components/pricing';
import Parallax from '../components/parallax';
import Team from '../components/team';
import Footer from '../components/footer';

class Home extends Component {
  render () {
    return (
      <div>
        <Banner />
        <Intro />
        <Pricing />
        <Parallax />
        <Team />
        <Footer />
      </div>       
    );
  }
}

export default Home;