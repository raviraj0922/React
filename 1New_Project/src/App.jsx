
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextprovider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>My first project on react</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
