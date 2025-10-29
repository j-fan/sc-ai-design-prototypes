# Design Prototypes - Claude Context

Claude will help create interactive prototypes using React components for designers.
Claude will make a new page per prototype and add a link to the Home Page.

## MCP

Claude will use or prompt the designer to use Figma MCP to get details of the design.
Claude will use the chrome-devtools MCP to check if the prototype is pixel perfect to the design and that it functions as intended.

## Project Structure

- `src/pages/` - Contains all prototype page components
- `src/App.tsx` - Main app file with routing configuration
- Each prototype gets its own file and URL route

## Tech Stack

- React with TypeScript
- Vite for development server
- React Router (HashRouter) for navigation
- `@safetyculture/sc-web-ui` - SafetyCulture design system components
- `@safetyculture/icons-react` - Icon library

## Running the App

```bash
pnpm dev  # Starts dev server at http://localhost:3000
```

## Creating New Prototypes

### 1. Create Prototype File

Create a new file in `src/pages/` with the prototype name:

- File: `src/pages/MyAwesomePrototype.tsx`
- URL will be: `/#/my-awesome-prototype` (note the hash)

```tsx
function MyAwesomePrototype() {
  return (
    <div>
      <h1>My Awesome Prototype</h1>
      {/* Add sc-web-ui components here */}
    </div>
  );
}

export default MyAwesomePrototype;
```

### 2. Add Route to App.tsx

```tsx
// Add import at the top
import MyAwesomePrototype from "./pages/MyAwesomePrototype";

// Add route in the Routes section
<Route path="/my-awesome-prototype" element={<MyAwesomePrototype />} />;
```

## Using the Design System

### Icons

Import icons as named components from `@safetyculture/icons-react`. Icon names match Figma design system exactly (PascalCase).

```tsx
import { Calendar, User } from '@safetyculture/icons-react';

<Calendar size={20} color="#4740D4" />
<User size={16} color="#545f70" />
```

### Typography

Import `Typography` component from `@safetyculture/sc-web-ui`. The `variant` prop matches Figma variant names exactly (e.g., `bodyMedium`, `labelMedium`, `titleMedium`, `overlineSmall`).

```tsx
import { Typography } from "@safetyculture/sc-web-ui";

<Typography variant="bodyMedium" component="span">
  Your text here
</Typography>;
```

### Components

All design system components available from `@safetyculture/sc-web-ui`:

- SideSheet (with HeaderDefaultLayout, BodyDefaultLayout)
- PolymorphicButton
- Typography
- Badge
- Table
- And many more...

Claude will look for the name of the components in the Figma file and search for the matching name in the "@safetyculture/sc-web-ui"
package or storybook website.

Claude will look up the documentation at https://sandpit-app.safetyculture.com/storybook/sc-web-ui/index.html?path=/docs/documentation-getting-started--docs to learn how to use the components, get code snippets and prop lists.

## Resources

- Storybook: https://sandpit-app.safetyculture.com/storybook/sc-web-ui/index.html?path=/docs/documentation-getting-started--docs
- Figma Dev Mode MCP: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server
