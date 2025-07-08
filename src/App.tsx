import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExamplePrototype from './pages/ExamplePrototype'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example-prototype" element={<ExamplePrototype />} />
          {/* Add more prototype routes here */}
        </Routes>
    </Router>
  )
}

export default App
