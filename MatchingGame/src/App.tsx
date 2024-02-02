
import './App.css'
import Match from './components/Matching'
function App()  { 

  return (
    <><div className='container'>
    <h1 style={{color:"green"}}>Slot Machine Game</h1>
    <Match x= '😄' y= '😄' z= '😄'></Match>
    <Match x='😠' y='👽' z= '🔧'></Match>
    <Match x= '😲' y= '😲' z= '😲'></Match>
      <Match x= '👍' y= '😋' z= '😲'></Match>
    <Match x= '❌' y= '💛' z= '😲'></Match>
    </div>
    </>
  )
}

export default App
