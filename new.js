"use client"

import React, { useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
    const [copied, setCopied] = useState(false)

    const handleChange = (e) => {
        if (e.target.name === "url") {
            seturl(e.target.value)
        }
        if (e.target.name === "shorturl") {
            setshorturl(e.target.value)
        }
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(generated);
            setCopied(true);
            toast.success("Copied to clipboard!", { theme: "dark" });
            setTimeout(() => setCopied(false), 1200);
        } catch (err) {
            const ta = document.createElement("textarea");
            ta.value = generated;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            setCopied(true);
            toast.success("Copied to clipboard!", { theme: "dark" });
            setTimeout(() => setCopied(false), 1200);
        }
    };

    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.message === "URL Already Exists") {
                    toast.error(result.message + '!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                } else {
                    seturl("")
                    setshorturl("")
                    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                    toast.success(result.message + '!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                }
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className="min-h-screen flex flex-col">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <main className="flex-grow flex items-center justify-center p-4">
                <div className='bg-[#BBFDFF] max-w-lg w-full mx-auto p-8 rounded-lg flex flex-col gap-4 shadow-lg'>
                    <h1 className='font-extrabold text-2xl md:text-4xl text-center hover:scale-110 hover:text-blue-700 transition-transform transform duration-300'>Generate your Shortened URLs</h1>

                    <div className='flex flex-col gap-2'>
                        <input name="url" value={url} className="w-full px-4 py-2 text-sm md:text-base text-[#012A4A] bg-white rounded-full shadow-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-[#012A4A] focus:border-transparent transition-transform transform hover:scale-105" type="text" placeholder='Enter your URL' onChange={handleChange} />

                        <input name="shorturl" value={shorturl} className="w-full px-4 py-2 text-sm md:text-base text-[#012A4A] bg-white rounded-full shadow-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-[#012A4A] focus:border-transparent transition-transform transform hover:scale-105" type="text" placeholder='Enter the short URL you prefer' onChange={handleChange} />

                        <button onClick={generate} className='bg-[#012A4A] text-white rounded-lg px-4 py-2 font-bold cursor-pointer my-3 w-full md:w-auto text-sm md:text-base transition-transform transform hover:scale-105 hover:bg-[#003e70] self-center'>Generate</button>
                    </div>

                    {generated &&
                        <>
                            <span className='font-bold text-md md:text-lg text-center md:text-left'>Your Shortened URL :</span>

                            <div className="flex flex-col md:flex-row items-center gap-2 justify-center md:justify-start">
                                <code className="break-all text-sm md:text-base text-center md:text-left">
                                    <Link href={generated} target="_blank" className='text-[#8000ff] hover:text-[#ff00d9]'>{generated}</Link>
                                </code>

                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    aria-label={copied ? "Copied" : "Copy to clipboard"}
                                    className="mt-2 md:mt-0 inline-flex items-center rounded-md border border-[#012A4A]/20 px-2 py-1 text-sm hover:bg-[#012A4A] hover:text-white transition"
                                    title={copied ? "Copied!" : "Copy"}
                                >
                                    {!copied ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="pointer-events-none">
                                            <path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="pointer-events-none">
                                            <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </>
                    }
                </div>
            </main>
        </div>
    )
}

export default Shorten