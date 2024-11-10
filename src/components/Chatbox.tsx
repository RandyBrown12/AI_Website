import { Box } from '@mui/material';
import { Textbar } from './Textbar';
import { ChatboxProps } from './interfaces';


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
                    <Box sx= {{
                        backgroundColor: message.sender === "User" ? '#f0f0f0' : '#ffffff',
                        borderRadius: '25px',
                        padding: '16px',
                        maxWidth: '60%',
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-wrap',
                    }}>
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