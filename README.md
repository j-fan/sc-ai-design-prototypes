# Design Prototypes

A simple app for designers to create interactive prototypes using React components. No coding experience required to get started!

## What You Need

1. Have Node.js installed. Install here https://nodejs.org/en
2. Have pnpm installed. Run this command on your terminal: `npm install -g pnpm@latest-10`

For development use either:

- A code editor with AI integration such as Cursor, VSCode or Windsurf.

OR

- Claude code with Figma MCP and chrome-devtools MCP. (Best results)

## Getting Started

### 1. Figma Dev Mode MCP

Follow the [instructions here](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server) to connect the Figma Dev Mode MCP to your code editor. This step is optional, you can upload screenshots of designs to the prompt instead, but the Figma MCP yields much better results.

### 2. Get access to private SafetyCulture packages

sc-web-ui is a private package containing the web implementation of the design system. Log in to NPM by following the instructions [here](<https://safetyculture.atlassian.net/wiki/spaces/ENG/pages/11371232/HOW+TO+use+NPM+private+packages#Authentication-(Logging-in)>).

### 3. Install Everything

Open your terminal and run this command to install all the tools needed:

```bash
pnpm install
```

_This downloads all the code libraries your app needs. You only need to do this once (or when someone adds new tools)._

## Working with Your App

### Quick Start with Claude Code

If you're using Claude Code, simply type `/proto` to start the interactive prototype creation workflow. Claude will guide you through:

1. Connecting to your Figma design
2. Naming your prototype
3. Building the interactive components

### Starting Your App - `pnpm dev`

This starts your app so you can see it and make changes in real-time.

```bash
pnpm dev
```

**What happens:**

- Your app opens in a web browser at `http://localhost:3000`
- Every time you save a file, the page automatically updates
- Perfect for designing and testing your prototypes

## Creating New Prototypes

Each prototype gets its own page and URL. Here's how to add a new one:

### 1. Create Your Prototype File

Create a new file in `src/pages/` with your prototype name:

- File: `src/pages/MyAwesomePrototype.tsx`
- URL will be: `/#/my-awesome-prototype` (note the hash)

## Deployment (Sharing Your Prototypes)

### Deploy to GitHub Pages

GitHub Pages is a free hosting service that lets you share your prototypes with anyone via a URL.

#### One-Command Deploy

```bash
pnpm deploy
```

**What happens:**

1. Builds your app (compiles all your code)
2. Pushes the built files to a `gh-pages` branch
3. GitHub automatically hosts it for you

**First-time setup:**

1. Make sure your code is pushed to GitHub
2. After running `pnpm deploy`, go to your GitHub repository
3. Go to **Settings** → **Pages**
4. Under "Source", select `gh-pages` branch
5. Click **Save**

Your app will be live at: `https://[your-username].github.io/design-prototypes/`
