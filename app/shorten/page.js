// step22: we'll use forms in this , so lets make it client component here below.
"use client"

// step21: lets now make this page for the url shortener here below.
import React , {Component, useState} from 'react'
import { ToastContainer, toast , Bounce } from 'react-toastify';
import Link from 'next/link';

const Shorten = () => {
    // step23: now lets make the states for the input tags here below.
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    // step24: also lets make a state named generated here below ; which will become "true" when the url has been generated.
    // const [generated, setgenerated] = useState(false)

    // step63: lets now not make it true false , but instead use it to display the generated url , here below ; so keep it initially an empty string here below.
    const [generated, setgenerated] = useState("")

    // step133: ccreating state to tell if something has been copied or not , here below ; initially false as nothing has been copied at the beginning yet there thus , here below.
    const [copied, setCopied] = useState(false)

    // step30: now lets define the handleChange function here below , which will run on changing the value of text typed in the input tags there , here below.
    const handleChange = (e) => {
        if(e.target.name === "url"){
            seturl(e.target.value)
        }
        if(e.target.name === "shorturl"){
            setshorturl(e.target.value)
        }
    }

    // step134: now lets make the function to handle the copy being done there thus , here below.

    // step135: async needed as await will be used inside it to copy to clipboard , because we are using navigator.clipboard.writeText() which is an async function , here below.
    const handleCopy = async () => {
      try {

        // step136: we use inuilt function to copy the shorturl stored in "generated" to the clipboard , here below.
        await navigator.clipboard.writeText(generated);

        // step137: we now set the state "copied" to true to show that something has been copied to the clipboard , here below.
        setCopied(true);

        // step138: now we make a toast to show that something has been copied to the clipboard , here below.
        toast.success("Copied to clipboard!", { theme: "dark" });

        // step139: and then we make the setCopied function to set the state "copied" to false after 1.2 seconds , here below ; so that the icon of copied changes back to the original icon , here below.
        setTimeout(() => setCopied(false), 1200);
      }

      // step140: error code to handle the error , here below written from documentation of navigator.clipboard here below.
       catch (err) {
        // step141: since the "await navigator.clipboard.writeText(generated);" we used is a modern clipboard API , we need to handle the error thrown by it , but it may not be supported by the user's browser , so we need to handle the error thrown by it , here below ; which uses some old method of copying to clipboard , here below.
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

    // step53: lets define the generate function now here below.
    const generate = async () => {
        // step54: we go on POSTMAN where we had written the raw body and was sending the POST request from there and then we go to </> made in right sidebar and copy the code for JavaScript-Fetch from there and paste here below.
        const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
            // step55: just change the url and shorturl here below to the variables "url" and "shorturl" here below , which are the values of the input tags for the url and shorturl here below.

            // "url": "http://google.com",
            // "shorturl": "google"
            // });

            "url": url,
            "shorturl": shorturl
            });


            const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
            };

            // step56: also remove localhost from here as we want to have the first part of url as we want the response to be given at whatever endpoint we are there currently at , ending in this "/api/generate" like : "http://localhost:3000/api/generate" or "trimsy.vercel.app/api/generate" and so on .. thus dynamically changing the response according to the endpoint we are currently at , here below.

            // fetch("http://localhost:3000/api/generate", requestOptions)

            fetch("/api/generate", requestOptions)

            // step58: also we changed the response returned from POST request to be accepted in json format here below ; thus it Converts server’s response (which is JSON) into JS object.
            
            // .then((response) => response.text())

            .then((response) => response.json())

            // step57: also we update the below line to also have an alert telling the message based on the reponse sent by the server , here below : i.e. url already exists or url has been generated successfully ; based on the response from the POST that we created earlier there , here below.

            // .then((result) => console.log(result))

            .then((result) => {

                // step67: we later shifted these inside the if else as we will clear the input tags only if its submitted successsfully there , ese we will not do it , so that user can edit it easily there ; and same for the setgenerated function to generate the url only if its success , so written in else block there , here below.
                

                // step62: also we make the value of input tags to be empty after generate clicked ,so we use the states to become empty as they only are the ones which represent the value fo teh input tags there i.e. determines what is written in the input tags there , here below.

                // seturl("")
                // setshorturl("")
                
                // step64: and then as soon as the url is generated , we make the generated state to have the new shortened url , here below.

                // step65: so we store the current host which is "localhost:3000" in the env file there and then we add the shorturl to the end of it , here below ; thus it contains the shorteened url with the host name in it here below.

                // step66: we have made it environment variable so that based on the website's host name after deploying it , it gets adapted accordingly dynamically instead of staying harcoded as localhost:300 there too , here below.

                // IMPORTANT : MUST WRITE "_PUBLIC_" TOO HERE AS : If you want an environment variable to be available in the browser (client-side), you must prefix it with NEXT_PUBLIC_ too AND HERE SINCE WE WANT THE HOST NAME LIKE "localhost:300" TO BE VISIBLE ON THE BROWSER CLIENT SIDE USING THE VALUE OF THE ENVIRONMENT VARIABLE , SO WE MUST USE "_PUBLIC_" HERE AS WELL , here below.

                // setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)

                // console.log(result) : can do this as this is a server Component and will render the console on server terminal and not on the browser terminal there thus , here below.

                // step60: now using the code from documentation of react toasts here below to replace the alert by this react toasts now , here below.

                // alert(result.message)

                // step61: added success or error toast based on the message sent by the server , here below.
                if(result.message === "URL Already Exists"){
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
                }
                else{
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
    <>

    {/* step59: we now use react toasts instead of alert , so first copy this block of code from their documentation at top of the "return" block here below ; first do the "npm i --save react-toastify" then the import statement on top (INCLUDE BOUNCE IN IMPORT TOO ELSE GIVES ERROR : REMEMBER THIS ALWAYS WHEN IMPORTING THESE REACT TOASTS THERE) */}
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

    {/* step26: now lets make the overall div as max width of some "lg" size and then make it come at centre in that width using mx-auto here below. */}

    {/* step28: lets make this also flex col to make the headings button and all to be one below the other too , along with some gap between them , here below. */}

    {/* ADDED "MD" TO HEIGHT AND MARGINTOP AND BOTTOM LATER AS THE FOOTER WAS NOT STICKING AT BOTTOM HERE BELOW IN LARGER DEVICES , BUT HAD NO PROBLEM IN SMALLER DEVICES , SO THAT DONE HERE THUS NOW , HERE BELOW. */}
    <div className='bg-[#BBFDFF] max-w-lg mx-auto my-16 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='font-extrabold text-2xl md:text-4xl text-center hover:scale-110 hover:text-blue-700 transition-transform transform duration-300'>Generate your Shortened URLs</h1>

        {/* step27: make it flex col to make the input tags to come one below the other , here below. */}
        <div className='flex flex-col gap-2'>
            {/* step25: now lets make it to run a handleChange function on being changed here below. */}

            {/* step26: also added color to be outlined when focused on the input tag here below. */}

            {/* step29: now lets add values to the input classes , which will determine the text typed in the input tags here below. */}
            <input name="url" value={url} className=" w-full px-4 py-2 text-sm md:text-base text-[#012A4A]  bg-white rounded-full shadow-sm  border border-transparent focus:outline-none focus:ring-2 focus:ring-[#012A4A] focus:border-transparent  transition-transform transform hover:scale-105" type="text" placeholder='Enter your URL' onChange={handleChange} />

          {/* WE ALWAYS USE TRANSFORM WITH TRANSITION-TRANSFORM BECAUSE : transform → actually applies the change (scale-105) AND THEN 
transition-transform → animates that change. */}

            <input name="shorturl" value={shorturl} className=" w-full px-4 py-2 text-sm md:text-base text-[#012A4A]  bg-white rounded-full shadow-sm  border border-transparent focus:outline-none focus:ring-2 focus:ring-[#012A4A] focus:border-transparent  transition-transform transform hover:scale-105" type="text" placeholder='Enter the short URL you prefer' onChange={handleChange} />

            {/* step52: on clicking the button , lets runs a function here below. */}
            <button onClick={generate} className='bg-[#012A4A] text-white rounded-lg px-4 py-2 font-bold cursor-pointer my-3 w-full md:w-auto text-sm md:text-base transition-transform transform hover:scale-105 hover:bg-[#003e70]'>Generate</button>
        </div>   

        {/* step68: now based on if the generated state is not empty i.e. the else block ran and the setgenerated has made the generated state non-empty , only then we will show the shortened URL stored in the "generated" state now thus here below. */}
        {generated && 

        // step69: wrapped in react fragment to use multiple HTML element tags in it here below.
        <>
            {/* step71: can put a span here below with some styles for better design thus here below. */}

            {/* step72: now lets make a dynamic route so that the shortened URL works too for the user there ; so lets make a dynamic route named [shorturl] , so see the next steps there now. */}
            <span className='font-bold text-md md:text-lg text-center md:text-left'>Your Shortened URL :</span>

            {/* step70: lets make it a link that opens in new tab using _blank and passing the shortened URL itself as the href here below. */}
            <div className="flex flex-col md:flex-row items-center gap-2 justify-center md:justify-start">
            <code className="break-all text-sm md:text-base text-center md:text-left">
                <Link href={generated} target="_blank" className='text-[#8000ff] hover:text-[#ff00d9]'>{generated}</Link>
            </code>

          {/* step142: now we display the copy icon here below based on the value of the "copied" state , here below. */}
            <button
              type="button"
              // step143: so it runs the handleCopy function when clicked , here below.
              onClick={handleCopy}

              // step144: added aria-label for screen readers that read alouds the text of website ; so when copied is true it reads copied , else read that it is a button which does "copy to the clipboard" there.
              aria-label={copied ? "Copied" : "Copy to clipboard"}
              className="mt-2 md:mt-0 inline-flex items-center rounded-md border border-[#012A4A]/20 px-2 py-1 text-sm hover:bg-[#012A4A] hover:text-white transition"

              // step145: we now make the text of the default tooltip that appears there to "copied" when the state "copied" is true and makes it to show "copy" when the state "copied" is false , here below.
              title={copied ? "Copied!" : "Copy"}
            >

            {/* step146: now we will show two icons there base don whether the state is tru or false there , using the ternary operator thus , here below. */}
            {!copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="pointer-events-none">
                <path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="pointer-events-none">
                <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>
              </svg>
            )}
          </button>
          </div>
    
        </>
        }
    </div>
  </>
  )
}

export default Shorten
