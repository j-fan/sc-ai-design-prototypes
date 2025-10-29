import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExamplePrototype from "./pages/ExamplePrototype";
import ScheduleSideSheetPrototype from "./pages/ScheduleSideSheetPrototype";
import InspectionSchedulePrototype from "./pages/InspectionSchedulePrototype";
import SideSheetWithMcpPrototype from "./pages/SideSheetWithMcpPrototype";
import SideSheetWithoutScWebUiPrototype from "./pages/SideSheetWithoutScWebUiPrototype";
import TailwindSideSheetPrototype from "./pages/TailwindSideSheetPrototype";
import NotificationsSettingsPrototype from "./pages/NotificationsSettingsPrototype";
import ScheduleDetailsWithClaudeCode from "./pages/ScheduleDetailsWithClaudeCode";
import DemoForJosh from "./pages/DemoForJosh";

import {
  ConfigProvider as UIConfigProvider,
  defaultConfig,
} from "@safetyculture/sc-web-ui";

function App() {
  return (
    <UIConfigProvider config={defaultConfig}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example-prototype" element={<ExamplePrototype />} />
          <Route
            path="/schedule-side-sheet-prototype"
            element={<ScheduleSideSheetPrototype />}
          />
          <Route
            path="/inspection-schedule"
            element={<InspectionSchedulePrototype />}
          />
          <Route
            path="/side-sheet-with-mcp"
            element={<SideSheetWithMcpPrototype />}
          />
          <Route
            path="/side-sheet-without-sc-web-ui"
            element={<SideSheetWithoutScWebUiPrototype />}
          />
          <Route
            path="/tailwind-side-sheet"
            element={<TailwindSideSheetPrototype />}
          />
          <Route
            path="/notifications-settings"
            element={<NotificationsSettingsPrototype />}
          />
          <Route
            path="/schedule-details-with-claude-code"
            element={<ScheduleDetailsWithClaudeCode />}
          />
          <Route path="/demo-for-josh" element={<DemoForJosh />} />
          {/* Add more prototype routes here */}
        </Routes>
      </Router>
    </UIConfigProvider>
  );
}

export default App;
