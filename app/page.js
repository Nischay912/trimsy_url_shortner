// step80: lets now make it a client component as we will be using useEffect and useRef here below.
"use client";

import Image from "next/image";
import Link from "next/link";
// step16: now we went on google fonts selected poppins and did download all to get zip file , then extracted all and copied the extra bold version of it and pasted in the fonts folder there.

// step17: then we should write the below statement here below ; because : next/font/local is a built-in Next.js feature (not plain CSS) that helps you load fonts directly inside your React component.
import localFont from "next/font/local";

// step81: lets import the following to be used here now below.
import { useEffect, useRef } from "react";

// step18: next step in importing font in NextJs is to write the below code , here below.
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  // step82: creating a refernece like document selector of javascript here now below using useRef hook ; initially its value is null because initially no input field is selected ; so like we do ref.current usually ; so initially ".current" is null and after rendering points to the eleemnt whose reference it is there.

  // step83: its actually reference for TypedJS that we installed using "npm i typed.js" earlier for animated typewriter text there , here
  const typedRef = useRef(null);

  // WE LATER CREATED THIS STATE TO STORE THE ACTUAL OBJECT TYPING IN Type.Js THERE , SO THAT WE CAN DESTROY OR RECREATE IT WHENVER WE WANT.
  const typedInstance = useRef(null);

  //step84: we want to load and run Typed.js once when the component appears , so lets use the useEffect hook with empty [ ] here below.
  useEffect(() => {
    // A helper function that loads Typed.js dynamically.
    const loadTyped = async () => {
      // step85: This check makes sure the code only runs in the browser (not on server).
      if (typeof window !== "undefined") {
        // step86: Dynamically import the Typed.js library (only when needed).
        const Typed = (await import("typed.js")).default;

        // WE DID THIS TO DESTROY EXISTING INSTANCE IF EXISTS
        if(typedInstance.current){
          typedInstance.current.destroy();
        }
        // THEN WE CREATED A NEW INSTANCE HERE BELOW.

        // step87: Create a new Typed.js instance and attach it to our DOM element that we pointed to using useRef (typedRef.current) there.
        typedInstance.current =new Typed(typedRef.current, {
          // step88: now these are the sentences that will keep typing one after another.
          strings: [
            "shorten your links.",
            "customize URLs.",
            "share with ease.",
            "track your clicks.",
            "simplify your life.",
          ],

          // step89: Typing speed in ms ; smaller the value , faster the typing.
          typeSpeed: 40,

          // step90: Speed of deleting characters.
          backSpeed: 30,

          // step91: Delay before deleting starts after typing finishes.
          backDelay: 1500,

          // step92: Delay before typing starts initially.
          startDelay: 500,

          // step93: Keeps repeating forever (true = loop).
          loop: true,

          // step94: Show blinking cursor at the end.
          showCursor: true,

          cursorChar: '|' // (optional) customize cursor symbol
        });
      }
    };

    // step95: Calling the function that sets everything up.
    loadTyped();

    // ALSO WHEN THE PAGE CHANGES OR REFRESH OCCURS WE DESTROY THE INSTANCE OF TYPE.JS TO FREE MEMORY THERE.

    // OVERALL THIS ALL HELPS TO PREVENT SEEING TWO INSTANCE OF || THERE IN TYPEJS WHEN WE NAVIGATE FROM ANY OTHER ABOUT PAGE OR SO TO HOME PAGE , AS THE OLD INSTANCE STILL EXISTS THERE ; THATS WHY WE ADDED ALL THESE STEPS HERE IN CAPS LOCK HERE LATER THERE THUS , HERE BELOW.
    return () =>{
      if(typedInstance.current){
        typedInstance.current.destroy();
      }
    }

    // step96: [] = dependency array : Empty means this effect runs ONLY ONCE when the component first renders (mounts).
  }, []);

  // step97: so basicallyw e copied the code from documentation for TypedJs and modified it here below.

  return (
    // step3: deleted all pre-written content first from here below.

    // step98: we now make it take minimum of 100vh here below and make the contents one below the other using column flexbox here below.
    <main className="min-h-screen flex flex-col">
      {/* step99: now we make a section flex-grow that takes all the remianing space in the section ; so that even if content is small we don't see blank space there. */}

      {/* step100: made it to take central position with some paddings also done padding modifications in smaller screens and larger "sm" screens here below ; along with a gradient background here below */}
      <section className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-100">
        {/* step8: lets create a grid with 2 columns in a section here below ; which creates two equal width columns by default here below. */}

        {/* step12: lets give the section and thus both the columns to take 50% of viewport height individually here below. */}
        {/* <div className="grid grid-cols-2 h-[50vh]"> */}

        {/* step101: now lets make it to have 1 column in mobile and 2 in bigger screens here below ; with text in one side and image on the other column. */}

        {/* step102: also made it take some maximum width and be at centre using mx-auto here below. */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* step9: lets create a div with paragraphs in them here below. */}

          {/* COLUMN 1 OF GRID */}

          {/* step15: now since its column flexbox justify now works for vertical alignment and vice-versa is for items-centre that does the horizontal alignment now , here below. */}

          {/* step103: lets make it to be starting from left side in smaller screens now here below & alignt he text to left side in larger screens now here below. */}
          <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
            {/* step104: now lets write the main typeJs text to be coming here below , in h1 tag , here below. */}

            {/* step105: gave various font size on different devices and also lets make the space between lines tight to look good using "leading-tight" here below. */}
            <h1 className="text-4xl md:tex-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {/* step106: lets break a line after the static text so that the TypedJs text comes from the next line and not in the same line to prevent looking messy text there. */}
              The best place to <br />
              {/* step107: we now refer to this span below to the reference we created for the TypedJs text above ; so that now as soon as webpage loaded , Typed.js can access this span and start typing the animated text dynamically inside it ; and when the webpage loads for the first time, useEffect helps to run this Typed.js initialization only once, ensuring the typing effect starts automatically without repeating unnecessarily */}
              {/* step108: made the text to be blue typing there. */}
              <span ref={typedRef} className="text-blue-600"></span>
            </h1>

            {/* <p className="text-2xl font-bold ">The best place to shorten your links.</p> */}

            {/* step19: now to use the imported font we will do like done below , here below. */}
            {/* {`text-lg md:text-xl text-gray-700 max-w-2xl ${poppins.className}`} */}

            {/* <p className={`${poppins.className} text-3xl font-bold `}>The best place to shorten your links.</p> */}

            {/* step109: now lets make it to be centred on smaller screens now here below. */}
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              We are the most simple and reliable link shortener. Unlike others
              that ask for unnecessary details or track your activity, we focus
              only on what matters — shortening your links quickly, safely, and
              without hassle. Sit back, relax, and enjoy seamless link
              shortening. ✨🚀
            </p>

            {/* step20: now lets add the buttons that was there in the navbar here too inside a "div" here below. */}

            {/* step110: now lets make it to be starting at centre in smaller screens now here below & align the text to left side in larger screens now here below. */}
            <div className="flex gap-5 justify-center md:justify-start">
              <Link href="/shorten">
                <button className=" bg-[#006ea5] hover:bg-[#023047] text-white rounded-xl px-8 py-3 font-bold cursor-pointer transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  Try Now
                </button>
              </Link>

              <Link href="/about">
                <button className="bg-white hover:bg-gray-100 text-blue-600 border-2 border-blue-600 rounded-xl px-8 py-3 font-bold cursor-pointer transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* COLUMN 2 OF GRID */}

          {/* step10: now lets insert an image using Image component here below. */}

          {/* step13: now lets make this image as a flexbox with justify start to be in the start in the column of the grid there. */}

          {/* step14: we now want to fill the column two completely of the grid with the image ; so we set fill as true but if we dont put relative on the div below ; it will fill whole page as the closest parent it fills which is not static positioned and if all are static it fills whole webpage as relative there here below. */}
          <div className="flex justify-center relative">

            {/* step112: now lets also design the box containing the image here below with some shadow and hidden overflow for image inside it here below. */}
            <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                // step11: always put "/"before the image name here below if it is in public folder.
                src="/people.png"
                alt="people"
                fill={true}
                // step111: we now add this style to crop and fit image properly there andadd "priority" to load the image faster there.
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

    {/* step113: lets make the section to be there below it now , here below. */}

    {/* step114: added paddings and all to the section here below. */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">

      {/* step115: make them be centred taking some maximum width here below. */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Why Choose Our URL Shortener?</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our service provides everything you need to manage your links effectively and professionally.
          </p>
          
          {/* step116: now we make the three features to be 3 columns in larger devices but in a single column of grid in smaller devices now here below. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature 1 */}

            {/* step117: now lets design each card here whihc has the following bg color and are one below the other using flex col , inside the card ; also added some hover effects now here below to show some shadow and move in y axis when hovered over it now here below. */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">

              {/* step118: svgs added with rounded full to be fully circular here below. */}
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Generate shortened URLs in milliseconds with our optimized infrastructure.</p>
            </div>

            {/* step119: same card duplicated for feature 2 and 3 now here below. */}
            
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
              <p className="text-gray-600">We don&apos;t track your activity or ask for unnecessary personal information.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom URLs</h3>
              <p className="text-gray-600">Create memorable custom short URLs that reflect your brand or content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* step131: now we copied and pasted this footer as a component so that it remains ther ein every page of the website there in layout.js file there. */}

      {/* step132: see the next steps in shorten folder's page.js file now there. */}

      {/* step120: lets now design the footer section here below. */}

      {/* step121: lets make it to be the following bg color and etxt color here below. */}
      {/* <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">

        {/* step122: also make it to have 4 grid columns in larger devices else keep only 1 column in smaller devices 
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* step123: now lets make this section to take the 2 columsn out of the 4 using the col-span-2 in larger devices only as anyhow in smaller devices we have made grid to have 1 column only earlier above.
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TrimURL</h3>
            <p className="text-gray-400 max-w-md">
              The simplest and most reliable URL shortener on the market. Create shortened links for free with our easy-to-use platform.
            </p>
          </div>

              {/* step124: no col-span used here below , so it will take the next 1 column i.e. the 3rd column and has all the links here below.
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/shorten" className="text-gray-400 hover:text-white transition-colors">Shorten URL</Link></li>
              <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
            </ul>
          </div>
          
          {/* step125: takes the 4th column for this here below.
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">

              {/* step126: transiton-colors ensures that the color changes smoothly on hover.
              <a href="https://wa.me/7004105775?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20URL%20shortener%20service." target="_blank" className="text-gray-400 hover:text-white transition-colors">

                {/* step127: we added aria-hidden="true" to make it not accessible to screen readers so that for blind people when screen reads aloud , it will skip reading this icon as svg or something as we dont want it ; so added aria-hidden true for that thus , here below.
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.04 2C6.49 2 2 6.48 2 12c0 2.12.55 4.09 1.52 5.8L2 22l4.37-1.44A9.94 9.94 0 0012.04 22C17.58 22 22 17.52 22 12S17.58 2 12.04 2zm0 18c-1.91 0-3.69-.63-5.14-1.69l-.36-.27-2.61.86.88-2.54-.28-.38A7.956 7.956 0 014 12c0-4.42 3.58-8 8.04-8 4.43 0 8.04 3.58 8.04 8s-3.61 8-8.04 8zm4.42-5.83c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24 0-.37.1-.49.1-.12.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42-.14 0-.3-.02-.46-.02s-.42.06-.64.3c-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.52.58.2 1.11.17 1.53.1.46-.08 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" clipRule="evenodd" />
                </svg>

              </a>

              {/* step128: added two more svgs thus here below.
              <a href="https://x.com/nk_912_kr" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.instagram.com/nk_912kr/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* step129: now given a max width to the line before the copyrigth line here below with some colors and padding and also mx-auto to keep it in the centre there.
        <div className="line max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">

          {/* step130: now we get the current year and print it here below along with the copyright symbol using &copy; here below.
          <p>&copy; {new Date().getFullYear()} Trimsy. All rights reserved.</p>
        </div>
      </footer> */}

    </main>
  );
}
