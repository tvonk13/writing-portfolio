import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        window.scrollTo({top: 0});
    }, []);

    return <div>CONTACT</div>;
}