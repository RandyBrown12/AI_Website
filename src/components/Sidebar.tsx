import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { SidebarProps, Data } from './interfaces';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MessageIcon from '@mui/icons-material/Message';

export const Sidebar = ({isSidebarShown, showSidebar, userData, setUserData, currentChatId, setCurrentChatId}: SidebarProps) => {
  
  const handleDelete = (id: string) => {
  
    if(id === currentChatId) {
      setCurrentChatId('');
    }
      const filteredData = userData.filter((data: Data) => data.id !== id);
      localStorage.setItem('db', JSON.stringify(filteredData));
      setUserData(filteredData);
  }

  const handleClearChat = () => {
    setCurrentChatId('');
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
              onClick = {() => setCurrentChatId(item.id)}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              }>
              <ListItemText
                primary={item.title}
                secondary={`Created on: ${item.timestamp} `}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};
