import Image from "next/image";
import Link from "next/link";
// step16: now we went on google fonts selected poppins and did download all to get zip file , then extracted all and copied the extra bold version of it and pasted in the fonts folder there.

// step17: then we should write the below statement here below ; because : next/font/local is a built-in Next.js feature (not plain CSS) that helps you load fonts directly inside your React component.
import localFont from "next/font/local";

// step18: next step in importing font in NextJs is to write the below code , here below.
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900"
});

export default function Home() {
  return (
    // step3: deleted all pre-written content first from here below.
    <main>
      {/* step8: lets create a grid with 2 columns in a section here below ; which creates two equal width columns by default here below. */}

      {/* step12: lets give the section and thus both the columns to take 50% of viewport height individually here below. */}
      <section className="grid grid-cols-2 h-[50vh]">
        {/* step9: lets create a div with paragraphs in them here below. */}

        {/* COLUMN 1 OF GRID */}

        {/* step15: now since its column flexbox justify now works for vertical alignment and vice-versa is for items-centre that does the horizontal alignment now , here below. */}
        <div className="flex flex-col gap-4 items-center justify-center bg-[rgb(187,253,255)]">

            {/* <p className="text-2xl font-bold ">The best place to shorten your links.</p> */}

            {/* step19: now to use the imported font we will do like done below , here below. */}
            <p className={`${poppins.className} text-3xl font-bold `}>The best place to shorten your links.</p>

            <p className="px-40 text-center">We are the most simple and reliable link shortener. Unlike others that ask for unnecessary details or track your activity, we focus only on what matters — shortening your links quickly, safely, and without hassle. Sit back, relax, and enjoy seamless link shortening. ✨🚀</p>
          

          {/* step20: now lets add the buttons that was there in the navbar here too inside a "div" here below. */}
          <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-[#90e0ef] text-[#023047] rounded-lg p-3 py-1 font-bold cursor-pointer '>Try Now</button></Link>
            <Link target="_blank" href="/github"><button className='bg-[#90e0ef] text-[#023047] rounded-lg p-3 py-1 font-bold cursor-pointer '>GitHub</button></Link>
          </div>
        </div>

        {/* COLUMN 2 OF GRID */}

        {/* step10: now lets insert an image using Image component here below. */}

        {/* step13: now lets make this image as a flexbox with justify start to be in the start in the column of the grid there. */}

        {/* step14: we now want to fill the column two completely of the grid with the image ; so we set fill as true but if we dont put relative on the div below ; it will fill whole page as the closest parent it fills which is not static positioned and if all are static it fills whole webpage as relative there here below. */}
        <div className="flex justify-start relative bg-[rgb(187,253,255)]">
            <Image
            // step11: always put "/"before the image name here below if it is in public folder.
              src="/people.png"
              alt="people"
              fill={true}
            />
        </div>
      </section>
    </main>
  );
}
