import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Box,
    TextField,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { ChatHistory } from "../molecules/ChatItems";

const RightPanel = () => {
    return (
        <Stack direction="column">
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


            <Box sx={{ width: 1210, height: "100vh", backgroundColor: "#D3D3D3" }}>
                <h1>Hello! How Can I Help You?</h1>
                <ChatHistory />

                <Box sx={{ display: "flex", alignItems: "center", pl: 2, mt: 3, width: "100%" }}>
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
    )
}

export default RightPanel