import { useState } from 'react'

function ExamplePrototype() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <h1>Example Prototype</h1>
      <p>This is an example prototype page. Replace this content with your own design.</p>
      
      <div>
        <h2>Interactive Example</h2>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
        />
        <p>You typed: {inputValue}</p>
      </div>
      
      <p>
        <strong>For designers:</strong> Create a new file like this one in the src/pages/ folder,
        then add a route in App.tsx to make it accessible.
      </p>
    </div>
  )
}

export default ExamplePrototype
