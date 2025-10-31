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
            Cursor from image only: Schedule Details Prototype
          </Link>
        </li>
        <li>
          <Link to="/inspection-schedule">
            Copilot from image only: Schedule Details Prototype
          </Link>
        </li>
        <li>
          <Link to="/side-sheet-without-sc-web-ui">
            Copilot + Figma MCP: Schedule Details Prototype
          </Link>
        </li>
        <li>
          <Link to="/side-sheet-with-mcp">
            Copilot + Figma MCP + DS: Schedule Details Prototype
          </Link>
        </li>
        <li>
          <Link to="/tailwind-side-sheet">
            Copilot + Tailwind: Schedule Details Prototype
          </Link>
        </li>
        <li>
          <Link to="/schedule-details-with-claude-code">
            Claude Code + MCP + DS: Schedule Details Prototype
          </Link>
        </li>
        <li>
          <Link to="https://www.figma.com/make/JoNkJK2CPAAdyOPLmGw37v/Notification-Settings-Prototype?node-id=0-1&p=f&t=imH4HdMBsXAiwUtY-0&fullscreen=1">
            Figma Make: Notifications Settings Prototype
          </Link>
        </li>
        <li>
          <Link to="/schedule-form-with-claude-code">
            Claude Code + MCP + DS: Schedule Form
          </Link>
        </li>
        <li>
          <Link to="https://www.figma.com/make/CkigFiTER64Cm25H2EPtSe/User-Testing-Prototype?node-id=0-1&p=f&t=jqrDgh7pBiehT7bD-0&fullscreen=1">
            Figma Make: Schedule Form
          </Link>
        </li>
        <li>
          <Link to="/schedule-form-with-cursor">Cursor: Schedule Form</Link>
        </li>
        <li>
          <Link to="/sign-up-form-with-claude-code">
            Claude Code + MCP + DS: Sign Up Form
          </Link>
        </li>
        <li>
          <Link to="/forgot-password">
            Claude Code + MCP + DS: Forgot Password Flow
          </Link>
        </li>
        <li>
          <Link to="/organization-settings">
            Claude Code + MCP + DS: Organization Settings (Notification Preferences)
          </Link>
        </li>
        {/* Add links to new prototypes here */}
      </ul>
    </div>
  );
}

export default HomePage;
