import { Textbar } from './components/Textbar'
import { Sidebar } from './components/Sidebar'
import { useState } from 'react'
import { Box } from '@mui/material'
import Chatbox from './components/Chatbox'

function App() {
  const [isSidebarShown, setIsSidebarShown] = useState(false)

  return (
      <>
        <Sidebar 
          isSidebarShown={isSidebarShown} 
          showSidebar={() => setIsSidebarShown(!isSidebarShown)}
          />
        <Chatbox isSidebarShown={isSidebarShown}/>
        <Textbar 
          isSidebarShown={isSidebarShown}
          showSidebar={() => setIsSidebarShown(!isSidebarShown)}
          />
      </>
  )
}

export default App
