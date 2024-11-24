import { useState } from "react";

import {
    AppBar,
    Toolbar,
    IconButton,
    Stack,
    Box,
    Drawer
} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import MenuIcon from "@mui/icons-material/Menu";

import { NewChatItem, HistoryTitle, ChatHistoryItem } from "../molecules/ChatItems";


const LeftPanel = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };
    return (
        <Stack direction="column" sx={{ minWidth: 235 }}>
            <AppBar id={"leftbar"} position="static" sx={{ width: '100%', backgroundColor: "#3f51b5" }}>
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

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 235 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                </Box>
            </Drawer>

            <HistoryTitle />
            <NewChatItem />
            <ChatHistoryItem text={"First question"} />
            <ChatHistoryItem text={"Second question"} />
            <ChatHistoryItem text={"Third question"} />
        </Stack>
    )
}

export default LeftPanel