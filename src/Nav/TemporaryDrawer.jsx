import {Drawer} from "@mui/material";
import DrawerContent from "./DrawerContent";

export default function TemporaryDrawer({ drawerWidth, mobileOpen, onDrawerToggle}) {
    return (
        <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={onDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            <DrawerContent onDrawerToggle={onDrawerToggle} />
        </Drawer>
    );
}