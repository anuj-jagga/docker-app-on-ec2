import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>Welcome to My React App!</h1>
        <form className='form' centered = "true">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <button type="submit">Submit</button>
        </form>
        {/* <p>Deploy by Anuj</p> */}
      </div>
    </>
  )
}

export default App