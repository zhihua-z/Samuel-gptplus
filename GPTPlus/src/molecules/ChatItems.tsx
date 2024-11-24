import {
    Typography,
    Stack,
    Box,
} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import ApiIcon from '@mui/icons-material/Api';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// export {NewChatItem, ChatHistoryItem, HistoryTitle}

export const NewChatItem = () => {
    return (
        <Box
            sx={{ pl: 2, pr: 2, pt: 1, pb: 1, display: 'flex', justifyContent: 'space-between' }}
        >
            <Stack spacing={1} direction={"row"}>
                <ApiIcon color="#FFFFFF" />
                <Typography>New Chat</Typography>
            </Stack>
            <CreateIcon color="#FFFFFF" />
        </Box>
    )
}
export const ChatHistoryItem = ({ text }) => {
    return (
        <Box
            sx={{ pl: 2, pr: 2, pt: 1, pb: 1, display: 'flex', justifyContent: 'space-between' }}
        >
            <Typography>{text}</Typography>
            <MoreHorizIcon />
        </Box>
    )
}

export const HistoryTitle = () => {
    return (
        <Typography
            fontSize={32}
            fontWeight={600}
            sx={{ pl: 2, pr: 2, pt: 1, pb: 1, display: 'flex', justifyContent: 'space-between' }}
        >
            History
        </Typography>
    )
}


export const Chat = ({ content }: { content: string }) => {
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

export const ChatHistory = () => {
    return (
        <Stack spacing={2} direction="column">
            <Chat content={"No Chat History Yet"} />
        </Stack>
    );
};