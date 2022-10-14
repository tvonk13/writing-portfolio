import {useState} from "react";
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PermanentDrawer from "./PermanentDrawer";
import TemporaryDrawer from "./TemporaryDrawer";

const drawerWidth = { sm: 275, md: 375 };

export default function Nav() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{display: { sm: 'none' }}}
            >
                <Toolbar sx={{ px: 3 }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Nick Vonk
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: drawerWidth, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <TemporaryDrawer drawerWidth={300} mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
                <PermanentDrawer drawerWidth={drawerWidth} />
            </Box>
        </>
    );
}