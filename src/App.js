import React from 'react';

import Banner from './sections/Banner';
import Facilities from './sections/Facilities';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

import Modal from './components/Modal';
import Navbar from './components/Navbar';
import SidebarMenu from './components/SidebarMenu';
import Toolbar from './components/Toolbar';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="click-capture"></div>
        <SidebarMenu />
        <Modal />
        <Navbar />
        <Toolbar />
        <div className="pagepiling">
          <Banner />
          <Facilities />
          <FAQ />
          <Contact />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
