import { TextareaAutosize, Box } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendIcon from '@mui/icons-material/Send';
import HistoryIcon from '@mui/icons-material/History';
import { useRef } from "react";

interface TextbarProps {
    isSidebarShown: boolean;
    showSidebar: () => void;
}

export const Textbar = ({ isSidebarShown, showSidebar } : TextbarProps) => {

    const inputRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = ()  => {
        alert(`Message: ${inputRef.current?.value}`)
        inputRef.current!.value = ''
    }

    const handleFileSubmit = () => {
        alert('File sent')
    }

    return (
            <Box sx={{
                width: '70%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                border: '1px solid black',
                borderRadius: '25px',
                position: 'absolute',
                bottom: '15px',
                left: '15%',
                marginLeft: isSidebarShown ? "10%" : "0%"
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
                    outline: 'none'
                }}
                />
                <SendIcon sx={{paddingLeft: '10px' }} onClick={handleSubmit}/>
        </Box>
    );
};