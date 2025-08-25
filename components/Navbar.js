// step1: created navbar component and starting by putting boilerplate using rafce here below.
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    // step4: style the navbar here below ; by making flexbox and all for logo and ul to be in same line.
    <nav className='h-16 bg-[#012a4a] flex justify-between items-center text-white px-3'>
      <div className="logo font-bold text-2xl">
        <Link href={"/"}>Trimsy</Link>
      </div>

      {/* step5: also ul flexbox to make its items be in same line too here below. */}

      {/* step6: also lets make the list items a link here below. */}

      {/* SHORTCUT : AFTER SELECTING MULTIPLE LINES USING ALT + CLICK > WE CAN SELECT TEXT HORIZONTALLY USING SHIFT + RIGHT ARROW KEY , here below. */}
      <ul className='flex justify-center items-center gap-4'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/"><li>Contact Us</li></Link>

        {/* step7: also create one more li with two buttons in it here below. */}
        <li className='flex gap-3'>
          <Link href="/shorten"><button className='bg-[#90e0ef] text-[#023047] rounded-lg p-3 py-1 font-bold cursor-pointer '>Try Now</button></Link>
          <Link target='_blank' href="/github"><button className='bg-[#90e0ef] text-[#023047] rounded-lg p-3 py-1 font-bold cursor-pointer '>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
