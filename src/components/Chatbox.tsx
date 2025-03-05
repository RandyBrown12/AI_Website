import { Box } from '@mui/material';
import { Textbar } from './Textbar';
import { ChatboxProps } from './interfaces';
import '../App.css';

const Chatbox = ({isSidebarShown, showSidebar, chatData, currentChatId, setCurrentChatId, setUserData, userData} : ChatboxProps) => {

    return ( 
        <Box sx={{
            width: '75%',
            display: 'flex',
            marginLeft: isSidebarShown ? "24%" : "14%",
            flexDirection: 'column',
            maxHeight: '87.5vh',
            overflowY: 'auto',
        }}>
            {chatData && chatData.chat.map(message => (
                <Box sx={{
                    display: 'flex',
                    justifyContent: message.sender === "User" ? 'flex-end' : 'flex-start',
                    padding: '10px',
                    flex: '1',
                }}>
                    <Box className={message.sender === "User" ? "chatbox-user" : "chatbox-bot"}>
                        {message.message}
                    </Box>
                </Box>
            ))}
            <Textbar 
                isSidebarShown={isSidebarShown}
                showSidebar={showSidebar}
                userData={userData}
                chatData={chatData}
                setUserData={setUserData}
                currentChatId={currentChatId}
                setCurrentChatId={setCurrentChatId}
                />
            </Box>
    );
}

export default Chatbox;