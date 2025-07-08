import { Link } from 'react-router-dom'

function HomePage() {

  return (
    <div>
      <h1>Design Prototypes</h1>

      <ul>
        <li><Link to="/example-prototype">Example Prototype</Link></li>
        <li><Link to="/schedule-side-sheet-prototype">Cursor: Schedule Side Sheet Prototype</Link></li>
        <li><Link to="/inspection-schedule">Copilot: Inspection Schedule Prototype</Link></li>
        {/* Add links to new prototypes here */}
      </ul>
    </div>
  )
}

export default HomePage
