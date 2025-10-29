import { Typography } from "@safetyculture/sc-web-ui";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Typography variant="titleLarge">Design Prototypes</Typography>

      <ul>
        <li>
          <Link to="/example-prototype">Example Prototype</Link>
        </li>
        <li>
          <Link to="/schedule-side-sheet-prototype">
            Cursor: Schedule Side Sheet Prototype
          </Link>
        </li>
        <li>
          <Link to="/inspection-schedule">
            Copilot: Inspection Schedule Prototype
          </Link>
        </li>
        <li>
          <Link to="/side-sheet-with-mcp">
            Copilot: SideSheet with MCP Prototype
          </Link>
        </li>
        <li>
          <Link to="/side-sheet-without-sc-web-ui">
            Copilot: SideSheet without sc-web-ui Prototype
          </Link>
        </li>
        <li>
          <Link to="/tailwind-side-sheet">
            Copilot: Tailwind Side Sheet Prototype
          </Link>
        </li>
        <li>
          <Link to="/schedule-details-with-claude-code">
            Claude Code + MCP + DS: Schedule Details Prototype
          </Link>
        </li>
        <li>
          <Link to="/notifications-settings">
            Claude Code + MCP + DS: Notifications Settings Prototype
          </Link>
        </li>
        {/* Add links to new prototypes here */}
      </ul>
    </div>
  );
}

export default HomePage;
