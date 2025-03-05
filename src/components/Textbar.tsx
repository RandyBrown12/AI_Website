import { TextareaAutosize, Box, Stack, IconButton } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import HistoryIcon from '@mui/icons-material/History';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TextbarProps, Data } from "./interfaces";

export const Textbar = ({ isSidebarShown, showSidebar, currentChatId, setCurrentChatId, userData, setUserData} : TextbarProps) => {

    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [preview, setPreview] = useState<string>('');
    const [lock, setLock] = useState<boolean>(false);

    const handleSubmit = () => {
        if(lock) {
            window.alert("Please wait for the bot to respond before sending another message");
            return;
        }

        setLock(true);

        const inputValue = inputRef.current?.value;
        if(!inputValue) return;

        const dateFormat = new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        let newChatInformation = null;
        let newUID = null;
        if(!currentChatId) {
            newUID = uuidv4();
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
        chatBotResponse(newChatInformation, newUID ? newUID : currentChatId);
        inputRef.current!.value = '';
    }

    const chatBotResponse = async (currentChat: Data[], chatId: string) => {
        try {
            const response = await fetch('http://127.0.0.1:8000', {
                method: "POST",
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: inputRef.current!.value
            });
            if(!response.ok) {
                throw new Error('Failed to fetch');
            }

            const responseData = await response.text();
            const newChatInformation = currentChat.map((data: Data) => {
                if(data.id === chatId) {
                    return {
                        ...data,
                        chat: [...data.chat, {
                            sender: "Bot",
                            message: responseData
                        }]
                    }
                }
                return data;
            })
            localStorage.setItem('db', JSON.stringify(newChatInformation));
            setUserData(newChatInformation);
        } catch (error) {
            console.log(error);
        } finally {
            setLock(false);
        }
    }

    const handleImageSubmit = (event : React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        event.target.value = '';
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    }

    const handleDeleteImage = () => {
        setPreview('');
    }

    return (
        <Box sx={{
            backgroundColor: 'white',
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '25px',
            position: 'absolute',
            bottom: '30px',
            left: '15%',
            marginLeft: isSidebarShown ? "10%" : "0%",
            zIndex: 1,
            }}
        >
            <Box>
                {preview && 
                        <>
                            <img src={preview}
                            alt="Preview"
                            style={{ 
                                width: '50px', 
                                height: '50px', 
                                zIndex: 0, 
                                backgroundSize: 'cover',
                                border: '1px solid black',
                            }}
                            />
                            <IconButton sx= {{
                                position: 'absolute',
                                left: '53px',
                                top: '5px',
                                padding: '0px',
                                zIndex: 1,    
                                backgroundColor: 'red',
                                border: '1px solid black',
                                "& .MuiSvgIcon-root": {
                                    fontSize: '15px',
                                },
                                "&&:hover": {
                                    backgroundColor: 'red',
                                }
                            }}
                            size="small"
                            onClick={handleDeleteImage}>
                                <CloseIcon />
                            </IconButton>
                        </>
                }
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
                }}>
                <HistoryIcon sx={{paddingRight: '10px'}} onClick={showSidebar} />
                <Stack>
                    <input 
                        type="file"
                        id="file"
                        accept="image/*" 
                        style={{ display: 'none' }}
                        onChange={handleImageSubmit}
                    /> 
                    <label style={{paddingRight: '10px', paddingTop: '5px'}} htmlFor="file">
                        <AttachFileIcon/>
                    </label>
                </Stack>
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
                <SendIcon sx={{paddingLeft: '10px'}} onClick={handleSubmit}/>
            </Box>
        </Box>
    );
};