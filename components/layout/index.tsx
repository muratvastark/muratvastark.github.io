import Head from "next/head";
import { FC, ReactNode } from "react"

interface ILayout {
    children?: ReactNode;
    title: string;
}

const Layout: FC<ILayout> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Muratva Stark portfolio website." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </>
    )
}

export default Layout;
