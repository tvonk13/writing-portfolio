import { Box, Typography } from "@mui/material";
import Preview from "./Preview";
import { useEffect } from "react";
import { getDemoWorkByType } from "../demoInfo";

export default function OverviewSection({ sectionTitle, documentType }) {
    const documents = getDemoWorkByType(documentType);

    useEffect(() => {
        window.scrollTo({top: 0});
    }, []);

    return documents?.length <= 0
        ? <></>
        : (
            <Box display="flex" flexDirection="column">
                <Typography
                    variant="h6"
                    color="primary.light"
                    sx={{ borderBottom: '1px solid', borderColor: 'primary.light' }}
                >
                    {sectionTitle}
                </Typography>
                {documents?.map((document, index) =>
                    <Preview key={index} documentType={documentType} document={document} />
                )}
            </Box>
    );
}