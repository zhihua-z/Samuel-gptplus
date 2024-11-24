import {
    Box,
} from "@mui/material";

import LeftPanel from "./organisms/LeftPanel";
import RightPanel from "./organisms/RightPanel";


function App() {
    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <LeftPanel />
            <RightPanel />
        </Box>
    );
}

export default App;