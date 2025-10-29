# Design Prototypes - Claude Context

A simple app for designers to create interactive prototypes using React components. No coding experience required to get started!

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
- FooterDefaultLayout
- PolymorphicButton
- Typography
- Badge
- And more...

Look up the documentation at https://sandpit-app.safetyculture.com/storybook/sc-web-ui/index.html?path=/docs/documentation-getting-started--docs to learn how to use the components, get code snippets and prop lists.

## Resources

- Storybook: https://sandpit-app.safetyculture.com/storybook/sc-web-ui/index.html?path=/docs/documentation-getting-started--docs
- Figma Dev Mode MCP: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server

## Prompting Tips

1. Name the sc-web-ui components you want to use
2. Copy code snippets from Storybook to start the prompt
3. For design adjustments, take screenshots and provide specific instructions
4. Use Figma Dev Mode MCP for better results than screenshots
