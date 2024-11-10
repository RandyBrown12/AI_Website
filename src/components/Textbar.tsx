import { TextareaAutosize, Box } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendIcon from '@mui/icons-material/Send';
import HistoryIcon from '@mui/icons-material/History';
import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TextbarProps, Data } from "./interfaces";

export const Textbar = ({ isSidebarShown, showSidebar, currentChatId, setCurrentChatId, userData, setUserData} : TextbarProps) => {

    const inputRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = () => {
        const inputValue = inputRef.current?.value;
        if(!inputValue) return;

        const dateFormat = new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        let newChatInformation = null;
        if(!currentChatId) {
            let newUID = uuidv4();
            newChatInformation = [...userData, {
                id: newUID,
                title: newUID,
                timestamp: dateFormat,
                chat: [
                    {
                        sender: 'User',
                        message: inputRef.current!.value
                    }
                ]
                }]
            setCurrentChatId(newUID);
        } else {
            newChatInformation = userData.map((data: Data) => {
                if(data.id === currentChatId) {
                    return {
                        ...data,
                        chat: [...data.chat, {
                            sender: 'User',
                            message: inputRef.current!.value
                        }]
                    }
                }
                return data;
            })
        }
        localStorage.setItem('db', JSON.stringify(newChatInformation));
        setUserData(newChatInformation);
        
        inputRef.current!.value = '';
    }

    const handleFileSubmit = () => {
        alert('File sent')
    }

    return (
            <Box sx={{
                backgroundColor: 'white',
                width: '70%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                border: '1px solid black',
                borderRadius: '25px',
                position: 'absolute',
                bottom: '30px',
                left: '15%',
                marginLeft: isSidebarShown ? "10%" : "0%",
                zIndex: 1,
                }}>
                <HistoryIcon sx={{paddingRight: '10px' }} onClick={showSidebar} />
                <AttachFileIcon sx={{paddingRight: '10px' }} onClick={handleFileSubmit} />
                <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Enter message here for the chatbot"
                ref={inputRef}
                maxRows={3}
                style={{ 
                    width: "100%",
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    resize: 'none',
                    border: 'none',
                    outline: 'none',
                }}
                maxLength={1000}
                />
                <SendIcon sx={{paddingLeft: '10px' }} onClick={handleSubmit}/>
        </Box>
    );
};