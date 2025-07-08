import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExamplePrototype from './pages/ExamplePrototype'

import { ConfigProvider as UIConfigProvider, defaultConfig } from '@safetyculture/sc-web-ui'

function App() {
  return (
    <UIConfigProvider config={defaultConfig}>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example-prototype" element={<ExamplePrototype />} />
          {/* Add more prototype routes here */}
        </Routes>
    </Router>
    </UIConfigProvider>
  )
}

export default App
