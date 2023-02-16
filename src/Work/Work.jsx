import { Box, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PrismicRichText, usePrismicDocumentByUID } from "@prismicio/react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function Work() {
    let {type, documentUid} = useParams();
    const [work] = usePrismicDocumentByUID(type, documentUid);
    const [numPages, setNumPages] = useState(0);
    const contentContainer = document.getElementById('content-container');
    const pdfWidth = contentContainer?.offsetWidth;

    useEffect(() => {
        window.scrollTo({top: 0});
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

    return (
        <Stack width="100%">
            <PrismicRichText
                field={work?.data.title}
                components={{heading1: ({children}) => <Typography variant="h5">{children}</Typography>}}
            />
            {work?.data.date &&
                <Box fontSize="0.875rem" color="#999" mb={1}>
                    {new Date(work?.data.date).toLocaleDateString('en-us',
                        { year: 'numeric', month: 'long', day: 'numeric' })}
                </Box>
            }
            {work?.data.pdf?.url ?
                (<Paper id="content-container" elevation={3} sx={{ marginTop: 2, minHeight: '100vh', maxWidth: 750 }}>
                    <Document file={work?.data.pdf.url} onLoadSuccess={onDocumentLoadSuccess} noData="" loading="">
                        {Array.from(new Array(numPages), (_el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                loading=""
                                width={pdfWidth}
                            />
                        ))}
                    </Document>
                </Paper>) :
                (<Typography>{work?.data.body}</Typography>)
            }
            {work?.data?.production_notes?.[0]?.text &&
                <Box mt={5}>
                    <Typography variant="h6">Production Notes</Typography>
                    <PrismicRichText field={work?.data?.production_notes}/>
                </Box>
            }
        </Stack>
    );
}