Ask the startup questions to begin a new prototype session:

1. Have you started the Figma desktop app with the correct frame selected?
2. What is the Figma frame link for the MCP to connect to?
3. What should we name this new prototype?
4. Is this a new prototype, or are you working on an existing one?

After getting answers, proceed with creating the prototype using the Figma MCP and design system components.

## Development steps

### 0. Check the required MCPs are installed

Figma: `scli claude mcp add --transport http figma http://127.0.0.1:3845/mcp`
Chrome dev tools: `scli claude mcp add chrome-devtools npx chrome-devtools-mcp@latest`

### 1. Start the dev server and open it in a browser with chrome-devtools MCP

Start the browser from chrome-devtools MCP so the designer can get visual feedback sooner.

```bash
pnpm dev  # Starts dev server at http://localhost:3000
```

Claude always checks for errors in the files it edited before starting the server.
Claude also uses chrome-devtools to open the app in the browser. It will resolve any errors it sees there, either on screen in the console.
Claude always describes in plain English what it is doing, so that the designer can understand.

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

All design system components available from `@safetyculture/sc-web-ui`, `@safetyculture/icons-react` and `@safetyculture/illustrations-react`.

- SideSheet (with HeaderDefaultLayout, BodyDefaultLayout)
- PolymorphicButton
- Typography
- Badge
- Table
- And many more...

Claude will look up the documentation at https://sandpit-app.safetyculture.com/storybook/sc-web-ui/index.html?path=/docs/documentation-getting-started--docs to learn how to use the components, get code snippets and prop names.

## Publishing

If the designer asks to publish/share/deploy/etc the prototypes, push the code, run the `pnpm run deploy` script and share the url `https://[your-username].github.io/design-prototypes/`.
