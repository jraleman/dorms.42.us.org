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
      <section id="pagepiling" className="animsition" style={{ zIndex: 4242 }}>
        <div className="click-capture"></div>
        <Modal />
        <Navbar />
        <SidebarMenu />
        <Toolbar />
        <div className="pagepiling">
          <Banner />
          <Facilities />
          <FAQ />
          <Contact />
        </div>
      </section>
    );
  }
}

export default App;
