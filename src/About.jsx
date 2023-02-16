import {Box, Stack, Typography} from "@mui/material";
import { useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import { demoAbout } from "./demoInfo";

export default function About() {
    const about = demoAbout;

    useEffect(() => {
        window.scrollTo({top: 0});
    }, []);

    return (
        <Box display="flex" flexDirection={{ xs: 'column', xl: 'row' }} alignItems={{ xs: 'center', xl: 'flex-start' }}>
            <Box
                flexShrink={0}
                width={{ xs: '70%', lg: '50%'}}
                mr={{ xs: 0, xl: 10}}
                mb={{ xs: 2, xl: 0 }}
                maxWidth={500}
            >
                {about?.data.profile_image.url &&
                    <img
                        src={about?.data.profile_image.url}
                        alt="profile"
                        style={{ width: '100%', borderRadius: '50%' }}
                    />
                }
            </Box>
            <Stack spacing={1}>
                <PrismicRichText
                    field={about?.data.about}
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