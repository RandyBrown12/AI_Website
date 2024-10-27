import { Textbar } from './components/Textbar'
import { Sidebar } from './components/Sidebar'
import { useState } from 'react'
import { Box } from '@mui/material'
import Chatbox from './components/Chatbox'

function App() {
  const [isSidebarShown, setIsSidebarShown] = useState(false)

  return (
      <Box sx={{
        display: 'flex'
      }}>
        <Sidebar 
          isSidebarShown={isSidebarShown} 
          showSidebar={() => setIsSidebarShown(!isSidebarShown)}
          />
        <Chatbox />
        <Textbar 
          isSidebarShown={isSidebarShown}
          showSidebar={() => setIsSidebarShown(!isSidebarShown)}
          />
      </Box>
  )
}

export default App
