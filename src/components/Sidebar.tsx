import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';

const historyItems = [
  { id: 1, title: 'Hello World!', timestamp: '10:30 AM' },
  // Add more history items here
];

interface SidebarProps {
  isSidebarShown: boolean;
  showSidebar: () => void;
}

export const Sidebar = ({isSidebarShown, showSidebar}: SidebarProps) => {

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
          {historyItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.title}
                secondary={item.timestamp}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};
