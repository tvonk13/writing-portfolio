import { Stack } from "@mui/material";
import OverviewSection from "./OverviewSection";

export default function WorkOverview() {
    return (
        <Stack
            height="100%"
            spacing={5}
        >
            <OverviewSection sectionTitle="Essays" documentType="essay" />
            <OverviewSection sectionTitle="Shorts" documentType="short" />
            <OverviewSection sectionTitle="Poetry" documentType="poem" />
        </Stack>
    );
}