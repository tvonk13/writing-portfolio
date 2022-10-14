import {Drawer} from "@mui/material";
import DrawerContent from "./DrawerContent";

export default function PermanentDrawer({ drawerWidth }) {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display:{ xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
        >
            <DrawerContent />
        </Drawer>
    );
}