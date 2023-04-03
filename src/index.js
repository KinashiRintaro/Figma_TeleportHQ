import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import MacBookAir2 from './views/mac-book-air2'
import MacBookAir10 from './views/mac-book-air10'
import MacBookAir11 from './views/mac-book-air11'
import MacBookAir7 from './views/mac-book-air7'
import MacBookAir12 from './views/mac-book-air12'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={MacBookAir2} exact path="/mac-book-air2" />
        <Route component={MacBookAir10} exact path="/mac-book-air10" />
        <Route component={MacBookAir11} exact path="/mac-book-air11" />
        <Route component={MacBookAir7} exact path="/mac-book-air7" />
        <Route component={MacBookAir12} exact path="/mac-book-air12" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
