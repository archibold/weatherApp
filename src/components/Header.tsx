import { useState, useEffect } from 'react';
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header({iconURL}: {iconURL: string}) {
    let [iconURLState, setIconURLState] = useState('./favicon.ico')
    useEffect(() => {
        setIconURLState(iconURL)
    },[iconURL])

    return (
    <>
        <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={iconURL} />
        </Head>
    </>
    );
}
