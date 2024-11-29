import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { SidebarProps, Data } from './interfaces';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MessageIcon from '@mui/icons-material/Message';
import FileDownload from '@mui/icons-material/FileDownload';

export const Sidebar = ({isSidebarShown, showSidebar, userData, setUserData, currentChatId, setCurrentChatId}: SidebarProps) => {
  
  const handleDelete = (id: string) => {
    
    if(id === currentChatId) {
      setCurrentChatId("");
    }

    const filteredData = userData.filter((data: Data) => data.id !== id);
    localStorage.setItem('db', JSON.stringify(filteredData));
    setUserData(filteredData);
  }

  const handleClearChat = () => {
    setCurrentChatId('');
  }

  const exportTextFile = () => {
    const currentData = userData.find(chat => chat.id === currentChatId);
    if(!currentData) {
      return;
    }
    console.table(currentData.chat);
    const blob = new Blob([JSON.stringify(currentData.chat)], { type: "application/json" });
    const link = document.createElement("a");
    link.download = "output_history.txt";
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <Drawer
      anchor="left"
      open={isSidebarShown}
      onClose={() => showSidebar()}
      PaperProps={{
        sx: {
          width: "20%",
          gap: 2,
        }
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "transparent"
          }
        }
      }}
    >
      <div>
        <Typography variant="h6" sx={{ padding: 2 }}>
          AI History
        </Typography>
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleClearChat()}>
                <MessageIcon />
              </IconButton>
            }>
            <ListItemText
              primary="Create a new chat: "
            />
          </ListItem>
          {userData && userData.map((item: Data) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton edge="end" onClick={() => exportTextFile()}>
                    <FileDownload />
                  </IconButton>
                </>
              }>
              <ListItemText
                primary={item.title}
                onClick = {() => setCurrentChatId(item.id)}
                secondary={`Created on: ${item.timestamp} `}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};
