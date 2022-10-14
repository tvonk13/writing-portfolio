import { Box, Collapse, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRounded from "@mui/icons-material/KeyboardArrowUpRounded";

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

const SubMenuItem = styled(Typography)(({theme}) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('xs')]: {
        maxWidth: 150,
    },
    [theme.breakpoints.up('sm')]: {
        maxWidth: 200,
    },
    '&:hover': {
        color: theme.palette.primary.light,
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
                    <SubMenu title="Features" onDrawerToggle={onDrawerToggle} />
                    <SubMenu title="Short Stories" onDrawerToggle={onDrawerToggle} />
                    <SubMenu title="Poetry" onDrawerToggle={onDrawerToggle} />
                </Stack>
                <MenuItem variant="h5" component={Link} to="contact" onClick={onDrawerToggle}>Contact</MenuItem>
            </Stack>
        </Box>
    );
}

function SubMenu({ title, onDrawerToggle }) {
    const [open, setOpen] = useState(false);

    const handleToggleMenu = () => setOpen(prevState => !prevState);

    return (
        <Stack pl={2} spacing={1}>
            <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={handleToggleMenu}>
                <Typography variant="h6">{title}</Typography>
                {open ? <KeyboardArrowUpRounded /> : <KeyboardArrowDownRoundedIcon/>}
            </Box>
            <Collapse in={open}>
                <Stack pl={2} spacing={1}>
                    <SubMenuItem component={Link} to="/work/item1" onClick={onDrawerToggle}>How about a longer name that might wrap</SubMenuItem>
                    <SubMenuItem component={Link} to="/work/item2" onClick={onDrawerToggle}>Item 2</SubMenuItem>
                    <SubMenuItem component={Link} to="/work/item3" onClick={onDrawerToggle}>Item 3</SubMenuItem>
                </Stack>
            </Collapse>
        </Stack>
    )
}