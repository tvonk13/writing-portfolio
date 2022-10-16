import { Box, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

const MenuItem = styled(Typography)(({theme}) => ({
    color: theme.palette.primary.light,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    marginBottom: 1,
    '&:hover': {
        color: theme.palette.primary.main,
    }
}));

export default function DrawerContent({ onDrawerToggle }) {
    return (
        <Box display="flex" justifyContent="center">
            <Stack py={{ xs: 2, sm: 5}} spacing={2}>
                <Typography
                    variant="h3"
                    color="primary"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        fontSize: {xs: '2.4rem', md: '3rem'}
                    }}
                >
                    Nick Vonk
                </Typography>
                <MenuItem variant="h5" component={Link} to="about" onClick={onDrawerToggle}>About</MenuItem>
                <Stack spacing={1}>
                    <MenuItem variant="h5" component={Link} to="work" onClick={onDrawerToggle}>Work</MenuItem>
                    <SubMenu title="Features" onDrawerToggle={onDrawerToggle} documentType="feature" />
                    <SubMenu title="Short Stories" onDrawerToggle={onDrawerToggle} documentType="short_story" />
                    <SubMenu title="Poetry" onDrawerToggle={onDrawerToggle} documentType="poem" />
                </Stack>
                <MenuItem variant="h5" component={Link} to="contact" onClick={onDrawerToggle}>Contact</MenuItem>
            </Stack>
        </Box>
    );
}