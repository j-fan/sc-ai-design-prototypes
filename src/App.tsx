import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExamplePrototype from './pages/ExamplePrototype'
import ScheduleSideSheetPrototype from './pages/ScheduleSideSheetPrototype'

import { ConfigProvider as UIConfigProvider, defaultConfig } from '@safetyculture/sc-web-ui'

function App() {
  return (
    <UIConfigProvider config={defaultConfig}>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example-prototype" element={<ExamplePrototype />} />
          <Route path="/schedule-side-sheet-prototype" element={<ScheduleSideSheetPrototype />} />
          {/* Add more prototype routes here */}
        </Routes>
    </Router>
    </UIConfigProvider>
  )
}

export default App
