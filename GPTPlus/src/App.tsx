import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Box,
  TextField,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CreateIcon from '@mui/icons-material/Create';
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Chat = ({ content }: { content: string }) => {
  return (
    <Typography
      sx={{
        width: 400,
        pl: 2,
        pr: 2,
        pt: 1,
        pb: 1,
        borderRadius: 3,
        backgroundColor: "#999999",
      }}
    >
      {content}
    </Typography>
  );
};

const ChatHistory = () => {
  return (
    <Stack spacing={2} direction="column">
      <Chat content={"No Chat History Yet"} />
    </Stack>
  );
};

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <AppBar position="static" sx={{ width: 235, backgroundColor: "#3f51b5" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <IconButton sx={{ ml: "auto" }}>
            <CreateIcon
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </IconButton>
          </Toolbar>
        </AppBar>

        <AppBar position="static" sx={{ width: 1210, backgroundColor: "#1e88e5" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              ChatGPT
            </Typography>
            <IconButton color="inherit" sx={{ ml: "auto" }}>
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
        </Box>
      </Drawer>

      <Stack spacing={2} direction="row">
        <Box
          sx={{ width: 188, height: "100vh", p: 2}}
        >
          History.
        </Box>

        <Box sx={{ width: 1210, height: "100vh", backgroundColor: "#D3D3D3"}}>
          <h1>Hello! How Can I Help You?</h1>
          <ChatHistory />
         
          <Box sx={{ display: "flex", alignItems: "center", pl:2, mt: 3, width: "100%"}}>
            <TextField
              id="standard-helperText"
              defaultValue="Message ChatGPT"
              helperText="Enter your prompt here"
              variant="standard"
              sx={{
                flexGrow: 1,     
                mr: 1,                  
                textAlign: "center",      
                maxWidth: 400,          
              }}
            />
            <IconButton sx={{ padding: 0 }}>
              <SendIcon
                sx={{
                  width: 45,
                  height: 45,
                }}
              />
            </IconButton>
          </Box>

          </Box>
        </Stack>
    </>
  );
}

export default App;