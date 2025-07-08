import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Design Prototypes</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Start building your design prototypes with React components!
          </p>
        </div>
        <p className="read-the-docs">
          Add your sc-web-ui components and create amazing prototypes
        </p>
      </div>
    </div>
  )
}

export default App
