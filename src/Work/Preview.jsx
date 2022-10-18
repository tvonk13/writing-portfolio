import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { PrismicRichText } from "@prismicio/react";

export default function Preview({ documentType, document }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 2,
                mt: 1,
                borderRadius: 1,
                textDecoration: 'none',
                color: 'text.primary',
                transition: 'background-color 0.2s ease',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#ececec',
                }
            }}
            component={Link}
            to={`/${documentType}/${document?.uid}`}
        >
            <PrismicRichText
                field={document?.data.title}
                components={{heading1: ({children}) => <Box fontWeight={700}>{children}</Box>}}
            />
            {document.data.date &&
                <Box fontSize="0.875rem" color="#999" mb={-1}>
                    {new Date(document.data.date).toLocaleDateString('en-us',
                        { year: 'numeric', month: 'short', day: 'numeric' })}
                </Box>
            }
            <PrismicRichText
                field={document?.data.description}
                components={{paragraph: ({children}) => <Box mt={2}>{children}</Box>}}
            />
        </Box>
    )
}