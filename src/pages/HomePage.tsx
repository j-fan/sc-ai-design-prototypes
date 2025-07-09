import { Link } from 'react-router-dom'

function HomePage() {

  return (
    <div>
      <h1>Design Prototypes</h1>

      <ul>
        <li><Link to="/example-prototype">Example Prototype</Link></li>
        <li><Link to="/schedule-side-sheet-prototype">Cursor: Schedule Side Sheet Prototype</Link></li>
        <li><Link to="/inspection-schedule">Copilot: Inspection Schedule Prototype</Link></li>
        <li><Link to="/side-sheet-with-mcp">SideSheet with MCP Prototype</Link></li>
        <li><Link to="/side-sheet-without-sc-web-ui">SideSheet without sc-web-ui Prototype</Link></li>
        {/* Add links to new prototypes here */}
      </ul>
    </div>
  )
}

export default HomePage
