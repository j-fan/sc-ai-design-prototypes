import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExamplePrototype from './pages/ExamplePrototype'
import ScheduleSideSheetPrototype from './pages/ScheduleSideSheetPrototype'
import InspectionSchedulePrototype from './pages/InspectionSchedulePrototype'
import SideSheetWithMcpPrototype from './pages/SideSheetWithMcpPrototype'
import SideSheetWithoutScWebUiPrototype from './pages/SideSheetWithoutScWebUiPrototype'
import TailwindSideSheetPrototype from './pages/TailwindSideSheetPrototype'
import ScheduleDetailsPrototype from './pages/ScheduleDetailsPrototype'
import NotificationsSettingsPrototype from './pages/NotificationsSettingsPrototype'

import { ConfigProvider as UIConfigProvider, defaultConfig } from '@safetyculture/sc-web-ui'

function App() {
  return (
    <UIConfigProvider config={defaultConfig}>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example-prototype" element={<ExamplePrototype />} />
          <Route path="/schedule-side-sheet-prototype" element={<ScheduleSideSheetPrototype />} />
          <Route path="/inspection-schedule" element={<InspectionSchedulePrototype />} />
          <Route path="/side-sheet-with-mcp" element={<SideSheetWithMcpPrototype />} />
          <Route path="/side-sheet-without-sc-web-ui" element={<SideSheetWithoutScWebUiPrototype />} />
          <Route path="/tailwind-side-sheet" element={<TailwindSideSheetPrototype />} />
          <Route path="/schedule-details" element={<ScheduleDetailsPrototype />} />
          <Route path="/notifications-settings" element={<NotificationsSettingsPrototype />} />
          {/* Add more prototype routes here */}
        </Routes>
    </Router>
    </UIConfigProvider>
  )
}

export default App
