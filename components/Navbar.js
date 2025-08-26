// step1: created navbar component and starting by putting boilerplate using rafce here below.
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    // step4: style the navbar here below ; by making flexbox and all for logo and ul to be in same line.

    // <nav className='h-16 bg-[#012a4a] flex justify-between items-center text-white px-3'>

    // LATER ADDED RESPONSIVENESS HERE TO HAVE: minimum of some height and then be flex col in smaller devices and also adjusted padding accordingly in this here below.
    <nav className='min-h-16 bg-[#012a4a] flex flex-col sm:flex-row justify-between items-center text-white px-3 py-2 gap-2'>

      {/* WE ALSO ADDED order-1 sm:order-none : AS IN FLEXBOX , ORDER DETERMINES VISUAL ORDER OF ELEMENTS REGARDLESS OF THEIR HTML POSITIONS THERE ; SO IN SMALLER DEVICES ORDER 1 MEANS : MAKE IT TO APPEAR AFTER THE OTHERS IN THE FLEXBOX , BUT IN LARGER DEVICES ITS NONE ORDER MEANS NO NEED TO APPLY THAT THERE ; ITS BECAUSE BY DEFAULT ALL ARE ORDER-0 AND ORDER-1 IS LESS PRIORITY THAN ORDER-0 SO , IT WILL MAKE THE TRIMSY TO APPEAR AFTER THE LINKS THERE IN SMALLER DEVICES ; SO IN SMALLER DEVICE STHIS LOGO WILL APPEAR AFTER THE LINKS THERE. */}

      {/* WE MADE FLEX BOX AND ITEMS CENTRE FOR LOGO AND TEXT TO BE IN SAME LINE ALIGNED VERTICALLY CENTRED ADN ALSO ONE BESIDE THE OTHER THERE. */}
      <div className="logo font-bold text-2xl order-1 sm:order-none flex items-center">
        
        {/* ADDED ICON SAVED IN PUBLIC FOLDER AS LOGO , SINCE IT WAS IN PUBLIC FOLDER , SO WE PUT "/" HERE BELOW ; AND LATER GAVE RIGHT MARGIN TO LOGO TO HAVE SOME GAP IN HIS RIGHT BETWEEN THE LOGO AND THE TEXT THERE THUS , HERE BELOW. */}
        <Image src="/logo.png" alt="logo" width={40} height={40} className='mr-2' />
        <Link href={"/"}>Trimsy</Link>
      </div>

      {/* step5: also ul flexbox to make its items be in same line too here below. */}

      {/* step6: also lets make the list items a link here below. */}

      {/* SHORTCUT : AFTER SELECTING MULTIPLE LINES USING ALT + CLICK > WE CAN SELECT TEXT HORIZONTALLY USING SHIFT + RIGHT ARROW KEY , here below. */}

      {/* MADE RESPONSIVE NOW BY MAKING ITEMS TO COME ON NEW LINE IF SPACE NOT THERE USING FLEX-WRAP AND ASJUSTED GAP BETWEEN THEM ACCORDINGLY BELOW ; ALSO MAKE THE UL TO FIT ACCORDING TO CONTENT SIZE IN LARGER DEVICES WHEREAS BECOMES FULL WIDTH IN SMALLER DEVICES MAKING IT NOT GETTING DISTORTED IN SMALLER SCREEN TOO THERE. */}

      {/* ADDED ORDER-3 SO THAT IN SMALLER DEVICES LOGO WAS ORDER-1 SO THIS LINKS NOW WILL COME AFTER THE LOGO IN SMALLER DEVICES NOW THERE. */}
      <ul className='flex justify-center items-center flex-wrap gap-2 sm:gap-4 order-3 sm:order-none w-full sm:w-auto'>

        {/* ADDED CLASSES TO EACH LI SO THAT IT SHOWS SOME COLOR TRANSITIONS WHEN HOVERED AND ALSO REDUCED ITS SIZE IN SMALLER DEVICES THERE. */}
        <Link href="/"><li className="px-2 py-1 hover:text-[#90e0ef] transition-colors text-sm sm:text-base">Home</li></Link>
        <Link href="/about"><li className="px-2 py-1 hover:text-[#90e0ef] transition-colors text-sm sm:text-base">About</li></Link>
        <Link href="/shorten"><li className="px-2 py-1 hover:text-[#90e0ef] transition-colors text-sm sm:text-base">Shorten</li></Link>
        <Link href="/contact"><li className="px-2 py-1 hover:text-[#90e0ef] transition-colors text-sm sm:text-base">Contact Us</li></Link>

        {/* step7: also create one more li with two buttons in it here below. */}

        {/* ADDED ORDER-2 HERE AS NOW LOGO HAS ORDER-1 LINKS HAVE ORDER-3 AND THIS BUTTONS HAVE ORDER-2 SO THE ORDER OF APPEARENCE IN SMALLER DEVICES WILL BE : LOGO , LINKS , BUTTONS THUS THERE , HERE BELOW. */}
        <li className='flex gap-2 order-2 sm:order-none'>

          {/* USED TRANSITION COLORS TO SHOW THE COLOR TRANSITIONS SMOOTHLY WHEN HOVERED OVER IT THUS HERE BELOW. */}
          <Link href="/shorten"><button className='bg-[#90e0ef] text-[#023047] rounded-lg px-2 py-1 sm:px-3 sm:py-1 font-bold cursor-pointer text-sm sm:text-base hover:bg-[#0074cd] hover:text-white transition-colors'>Try Now</button></Link>

          <Link target='_blank' href="/github"><button className='bg-[#90e0ef] text-[#023047] rounded-lg px-2 py-1 sm:px-3 sm:py-1 font-bold cursor-pointer text-sm sm:text-base hover:bg-[#0074cd] hover:text-white transition-colors'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
