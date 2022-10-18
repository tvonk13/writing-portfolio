import { Box, IconButton, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Email } from "@mui/icons-material";
import { useSinglePrismicDocument } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

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

const SocialIcon = styled(IconButton)(({theme}) => ({
    color: theme.palette.primary.light,
    transition: 'color 0.2s ease',
    '&:hover': {
        color: theme.palette.primary.main,
    }
}));

export default function DrawerContent({ onDrawerToggle }) {
    const [about] = useSinglePrismicDocument('about');

    return (
        <Box display="flex" justifyContent="center">
            <Stack py={{ xs: 2, sm: 5}} spacing={2}>
                <PrismicRichText
                    field={about?.data.name}
                    components={{
                        heading1: ({children}) => (
                            <Typography
                                variant="h3"
                                color="primary"
                                sx={{
                                    display: {xs: 'none', sm: 'block'},
                                    fontSize: {xs: '2.4rem', md: '3rem'}
                                }}
                            >
                                {children}
                            </Typography>
                        )
                    }}
                />
                <MenuItem variant="h5" component={Link} to="about" onClick={onDrawerToggle}>About</MenuItem>
                <Stack spacing={1}>
                    <MenuItem variant="h5" component={Link} to="work" onClick={onDrawerToggle}>Work</MenuItem>
                    <SubMenu title="Features" onDrawerToggle={onDrawerToggle} documentType="feature" />
                    <SubMenu title="Short Stories" onDrawerToggle={onDrawerToggle} documentType="short_story" />
                    <SubMenu title="Poetry" onDrawerToggle={onDrawerToggle} documentType="poem" />
                </Stack>
                <Stack direction="row" spacing={1}>
                    <SocialIcon href={about?.data.email.url} target={about?.data.email.target} rel="noopener" disableRipple>
                        <Email />
                    </SocialIcon>
                    <SocialIcon href={about?.data.instagram.url} target={about?.data.instagram.target} rel="noopener" disableRipple>
                        <InstagramIcon />
                    </SocialIcon>
                </Stack>
            </Stack>
        </Box>
    );
}