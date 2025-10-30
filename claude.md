# Design Prototypes - Claude Context

Claude will help create interactive prototypes using React components for designers.
Claude will make a new page per prototype and add a link to the Home Page.
Claude always describes in plain English what it is doing, so that the designer can understand.

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

## Development steps

### 1. Start the dev server and open it in a browser with chrome-devtools MCP

```bash
pnpm dev  # Starts dev server at http://localhost:3000
```

Claude always checks for errors in the files it edited before starting the server.
Claude also uses chrome-devtools to open the app in the browser. It will resolve any errors it sees there, either on screen in the console.

### 2. Create Prototype File

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

### 3. Add Route to App.tsx

```tsx
// Add import at the top
import MyAwesomePrototype from "./pages/MyAwesomePrototype";

// Add route in the Routes section
<Route path="/my-awesome-prototype" element={<MyAwesomePrototype />} />;
```

Navigate to the prototype page so the user can see incremental changes in development. For example ``/#/my-awesome-prototype`

### 4. Implement the prototype

Claude will look for the name of the components in the Figma file and search for the matching name in the "@safetyculture/sc-web-ui"
package or storybook website.

All design system components available from `@safetyculture/sc-web-ui`:

- SideSheet (with HeaderDefaultLayout, BodyDefaultLayout)
- PolymorphicButton
- Typography
- Badge
- Table
- And many more...

Claude will look up the documentation at https://sandpit-app.safetyculture.com/storybook/sc-web-ui/index.html?path=/docs/documentation-getting-started--docs to learn how to use the components, get code snippets and prop names.

Tips for common design system components:

#### Icons

Import icons as named components from `@safetyculture/icons-react`. Icon names match Figma design system exactly (PascalCase).

```tsx
import { Calendar, User } from '@safetyculture/icons-react';

<Calendar size={20} color="#4740D4" />
<User size={16} color="#545f70" />
```

If a matching icon cannot be found, replace it with an emoji or omit it altogether.

#### Typography

Import `Typography` component from `@safetyculture/sc-web-ui`. The `variant` prop matches Figma variant names exactly (e.g., `bodyMedium`, `labelMedium`, `titleMedium`, `overlineSmall`).

```tsx
import { Typography } from "@safetyculture/sc-web-ui";

<Typography variant="bodyMedium" component="span">
  Your text here
</Typography>;
```

#### Illustrations

Illustrations are imported from `@safetyculture/illustrations-react`. Example: `import { ActionDeleted } from "@safetyculture/illustrations-react";`. The name of the illustration in Figma should match the name in the package exactly.
If no match is found, use an emoji that matches the context. Documentation on illustrations can be found here: https://sandpit-app.safetyculture.com/storybook/sc-web-ui/index.html?path=/docs/foundations-illustrations--docs

#### Loading state

Most components have a loading state. If not, use the Spinner component from `@safetyculture/sc-web-ui` for loading states. The `size` prop accepts CSS width values (e.g., "1rem", "2rem", "48px").

```tsx
import { Spinner } from "@safetyculture/sc-web-ui";

<Spinner size="2rem" />;
```

## Publishing

If the designer asks to publish/share/deploy/etc the prototypes, push the code, run the `pnpm run deploy` script and share the url `https://[your-username].github.io/design-prototypes/`.

## Startup behaviour

When a new coding session begins, always ask the user:

1. Have you started the Figma desktop app with the correct frame selected?
2. What is the Figma frame link for the MCP to connect to?
3. What should we name this new prototype?
4. [Any other question you want asked]
