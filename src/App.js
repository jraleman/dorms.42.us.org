import React from 'react';

import Banner from 'containers/Banner';
import Facilities from 'containers/Facilities';
import FAQ from 'containers/Faq';
import Contact from 'containers/Contact';

class App extends React.Component {
  render() {
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
