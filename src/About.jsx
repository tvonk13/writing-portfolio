import {Box, Stack, Typography} from "@mui/material";
import { useEffect } from "react";
import { useSinglePrismicDocument, PrismicRichText } from "@prismicio/react";

export default function About() {
    const [document] = useSinglePrismicDocument('about');

    useEffect(() => {
        window.scrollTo({top: 0});
    }, []);

    return (
        <Stack
            alignItems="center"
            height="100%"
            spacing={{ xs: 2, sm: 5}}
        >
            <Box width={{ xs: '75%', sm: '60%', lg: '50%', xl: '40%'}}>
                <img src={document?.data.profile_image.url} alt="profile" style={{ width: '100%', borderRadius: '50%'}} />
            </Box>
            <PrismicRichText
                field={document?.data.about}
                components={{
                    paragraph: ({children}) => (
                        <Typography>
                            {children}
                        </Typography>
                    )
                }}
            />
        </Stack>
    );
}