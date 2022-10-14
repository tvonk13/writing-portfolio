import { Stack } from "@mui/material";
import OverviewSection from "./OverviewSection";

export default function WorkOverview() {
    return (
        <Stack
            height="100%"
            spacing={5}
        >
            <OverviewSection sectionTitle="Features" documentType="feature" />
            <OverviewSection sectionTitle="Short Stories" documentType="short_story" />
            <OverviewSection sectionTitle="Poetry" documentType="poem" />
        </Stack>
    );
}