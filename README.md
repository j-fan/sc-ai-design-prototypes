# Design Prototypes

A simple app for designers to create interactive prototypes using React components. No coding experience required to get started!

## What You Need

- A computer with Node.js installed. Install here https://nodejs.org/en
- Basic familiarity with using the terminal/command line

## Getting Started

### 1. Install Everything

Open your terminal and run this command to install all the tools needed:

```bash
pnpm install
```

*This downloads all the code libraries your app needs. You only need to do this once (or when someone adds new tools).*

## Working with Your App

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

```tsx
function MyAwesomePrototype() {
  return (
    <div>
      <h1>My Awesome Prototype</h1>
      <p>Your design content goes here!</p>
      {/* Add your sc-web-ui components here */}
    </div>
  )
}

export default MyAwesomePrototype
```

### 2. Add the Route

In `src/App.tsx`, add your new prototype:

```tsx
// Add import at the top
import MyAwesomePrototype from './pages/MyAwesomePrototype'

// Add route in the Routes section
<Route path="/my-awesome-prototype" element={<MyAwesomePrototype />} />
```

