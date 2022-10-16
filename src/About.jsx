import {Box, Stack, Typography} from "@mui/material";
import { useEffect } from "react";
import { useSinglePrismicDocument, PrismicRichText } from "@prismicio/react";

export default function About() {
    const [document] = useSinglePrismicDocument('about');

    useEffect(() => {
        window.scrollTo({top: 0});
    }, []);

    return (
        <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }} alignItems={{ xs: 'center', lg: 'flex-start' }}>
            <Box width={{ xs: '90%', lg: '50%'}} mr={{ xs: 0, lg: 10}} mb={{ xs: 2, lg: 0 }} maxWidth={500}>
                {document?.data.profile_image.url &&
                    <img
                        src={document?.data.profile_image.url}
                        alt="profile"
                        style={{ width: '100%' }}
                    />
                }
            </Box>
            <Stack spacing={1} width={{ xs: '90%', lg: '50%'}}>
                <PrismicRichText
                    field={document?.data.about}
                    components={{
                        paragraph: ({children}) => <Typography>{children}</Typography>,
                        heading1: ({children}) => <Typography variant="h1">{children}</Typography>,
                        heading2: ({children}) => <Typography variant="h2">{children}</Typography>,
                        heading3: ({children}) => <Typography variant="h3">{children}</Typography>,
                        heading4: ({children}) => <Typography variant="h4">{children}</Typography>,
                        heading5: ({children}) => <Typography variant="h5">{children}</Typography>,
                        heading6: ({children}) => <Typography variant="h6">{children}</Typography>,
                    }}
                />
            </Stack>
        </Box>
    );
}