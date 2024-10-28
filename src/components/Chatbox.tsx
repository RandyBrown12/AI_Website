import { Box } from '@mui/material';

interface ChatboxProps {
    isSidebarShown: boolean;
}

const Chatbox = ({isSidebarShown} : ChatboxProps) => {
    return ( 
        <Box sx={{
            width: '87%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '5%',
            marginLeft: isSidebarShown ? "10%" : "0%",
        }}>
            {/* Add UI here */}
            Hello Test
        </Box>
    );
}

export default Chatbox;