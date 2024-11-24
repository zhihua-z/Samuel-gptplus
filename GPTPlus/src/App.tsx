import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SendIcon from '@mui/icons-material/Send';


import { Typography, Button, Stack, Box, TextField, IconButton } from '@mui/material'

const Chat = ({ content }) => {
    return (
        <Typography
            sx={{
                width: 400,
                pl: 2, pr: 2,
                pt: 1, pb: 1,
                borderRadius: 8,
                backgroundColor: '#999999',
            }}
        >
            {content}
        </Typography>
    )
}

const ChatHistory = () => {
    return (
        <Stack spacing={2} direction="column">
            <Chat content={"hahahaha"} />
            <Chat content={"The error remote closed connection during a git push usually indicates a network or authentication issue. Here are some quick steps to troubleshoot:"} />
            <Chat content={"hahahaha"} />
        </Stack>
    )
}

function App() {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }

    return (
        <>
            <Stack spacing={0} direction="row">

                <Box
                    sx={{
                        width: 300,
                        height: '100vh',
                        p: 2,
                        border: '1px solid red', // width, style, color
                    }}
                >
                    <Typography>This Box renders as an HTML section element.</Typography>
                </Box>
                <Box
                    sx={{
                        width: 800,
                        height: '100vh',
                    }}
                >
                    <ChatHistory />
                    <TextField
                        id="standard-helperText"
                        defaultValue=""
                        helperText="enter your prompt here"
                        variant="standard"
                        sx={{
                            mt: 3
                        }}
                    />
                    <IconButton>
                        <SendIcon fontSize='large' sx={{mt: 0.5}}/>
                    </IconButton>
                </Box>
            </Stack>
        </>
    )
}

export default App
