import { Sidebar } from './components/Sidebar'
import { useState, useEffect } from 'react'
import Chatbox from './components/Chatbox'
import { Data } from './components/interfaces';

function App() {
  const [isSidebarShown, setIsSidebarShown] = useState<boolean>(false);
  const [currentChatId, setCurrentChatId] = useState<any>('');
  const [userData, setUserData] = useState<Data[]>(JSON.parse(localStorage.getItem('db') || '[]'));
  const [chatData, setChatData] = useState<Data | null>(null);

  useEffect(() => {
    const chat = userData.find((item: Data) => item.id === currentChatId)!;
    setChatData(chat);
  }, [userData, currentChatId])

  return (
      <>
        <Sidebar
          isSidebarShown={isSidebarShown}
          showSidebar={() => setIsSidebarShown(!isSidebarShown)}
          userData={userData}
          setUserData={setUserData}
          setCurrentChatId={setCurrentChatId}
          currentChatId={currentChatId}
          />
        <Chatbox 
          isSidebarShown={isSidebarShown}
          showSidebar={() => setIsSidebarShown(!isSidebarShown)}
          chatData={chatData}
          userData={userData}
          setUserData={setUserData}
          setCurrentChatId={setCurrentChatId}
          currentChatId={currentChatId}
          />
      </>
  )
}

export default App
