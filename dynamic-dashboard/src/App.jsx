import './App.css'
import DynamicDashboard from './Components/Dynamic-dashboard'
import Header from './Components/Header'

function App() {
  let userName = "Hero" 
  return (
    <div>
    <Header userName={userName} /> 
    <DynamicDashboard />
    </div>
  )
}

export default App
