import Head from "next/head";
import { useState } from "react";
import { Container, Fullscreen, H2, IFrame, Image } from "../styles";

export default function Home() {
    const [fullscrn, setFullscrn] = useState(false);
    const fullscreen = () => {
        setFullscrn(!fullscrn);
        console.log(fullscrn);
    };
    return (
        <Container>
            <Head>
                <title>F1 tv by Keval</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Image src="/logo.png" alt="" />
            <IFrame
                src="https://f1livegp.me/f1/live.php"
                frameborder="0"
                h={fullscrn ? "100vh" : "450px"}
                w={fullscrn ? "100vw" : "100%"}
                r={fullscrn ? "absolute" : "relative"}
                scrolling="no"
            ></IFrame>
            <Fullscreen
                r={fullscrn ? "absolute" : "relative"}
                onClick={fullscreen}
                brd={fullscrn}
            >
                Fullscreen
            </Fullscreen>
        </Container>
    );
}
