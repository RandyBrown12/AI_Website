import { Sidebar } from './components/Sidebar'
import { useState } from 'react'
import Chatbox from './components/Chatbox'


function App() {
  const [isSidebarShown, setIsSidebarShown] = useState(false)

  return (
      <>
        <Sidebar 
          isSidebarShown={isSidebarShown} 
          showSidebar={() => setIsSidebarShown(!isSidebarShown)}
          />
        <Chatbox isSidebarShown={isSidebarShown} showSidebar={() => setIsSidebarShown(!isSidebarShown)}/>
      </>
  )
}

export default App
