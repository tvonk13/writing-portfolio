import { PrismicRichText } from '@prismicio/react';
import { useState } from 'react';
import { Box, Collapse, Stack, styled, Typography } from '@mui/material';
import KeyboardArrowUpRounded from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Link } from 'react-router-dom';
import { getDemoWorkByType } from "../demoInfo";

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

export default function SubMenu({ documentType, title, onDrawerToggle}) {
    const documents = getDemoWorkByType(documentType);
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
                    {documents?.length <= 0 ?
                        "Coming Soon!" :
                        documents?.map((document, index) =>
                            <SubMenuItem
                                key={index}
                                component={Link}
                                to={`/${documentType}/${document.uid}`}
                                onClick={onDrawerToggle}
                            >
                                <PrismicRichText
                                    field={document.data.title}
                                    components={{heading1: ({children}) => <span>{children}</span>}}
                                />
                            </SubMenuItem>
                        )
                    }
                </Stack>
            </Collapse>
        </Stack>
    )
}