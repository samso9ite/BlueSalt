import { Outlet } from 'react-router-dom'
import Routes from './Routes';

function App() {
  return (
    <>
      <Routes />
      <Outlet />
    </>
  )
}

export default App
