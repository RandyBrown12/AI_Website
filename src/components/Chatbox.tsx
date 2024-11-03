import { Box } from '@mui/material';
import { Textbar } from './Textbar';

interface ChatboxProps {
    isSidebarShown: boolean;
    showSidebar: () => void;
}

let chat = [
    {sender: "User", message: "Hello there!"},
    {sender: "Bot", message: "How are you?"},
    {sender: "User", message: "I am fine, thank you!"},
    {self: "Bot", message: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},
];

chat = [
    ...chat,
    ...chat,
    ...chat,
];

const Chatbox = ({isSidebarShown, showSidebar} : ChatboxProps) => {
    return ( 
        <Box sx={{
            width: '75%',
            display: 'flex',
            marginLeft: isSidebarShown ? "24%" : "14%",
            flexDirection: 'column',
            maxHeight: '87.5vh',
            overflowY: 'auto',
        }}>
            {chat.map(chat => (
                <Box sx={{
                    display: 'flex',
                    justifyContent: chat.sender === "User" ? 'flex-end' : 'flex-start',
                    padding: '10px',
                    flex: '1',
                }}>
                    <Box sx= {{
                        backgroundColor: chat.sender === "User" ? '#f0f0f0' : '#ffffff',
                        borderRadius: '25px',
                        padding: '16px',
                        maxWidth: '60%',
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-wrap',
                    }}>
                        {chat.message} 
                    </Box>
                </Box>
            ))}
            <Textbar 
                isSidebarShown={isSidebarShown}
                showSidebar={showSidebar}
                />
            </Box>
    );
}

export default Chatbox;