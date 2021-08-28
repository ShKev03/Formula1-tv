import Head from "next/head";
import { Container, H2, IFrame, Image } from "../styles";

export default function Home() {
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
                height="450px"
                width="100%"
                scrolling="no"
            ></IFrame>
        </Container>
    );
}
