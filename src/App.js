import React from 'react';

import Banner from './sections/Banner';
import Facilities from './sections/Facilities';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

class App extends React.Component {
  render () {
    return (
      <div className="pagepiling">
        <Banner />
        <Facilities />
        <FAQ />
        <Contact />
      </div>
    );
  }
}

export default App;
