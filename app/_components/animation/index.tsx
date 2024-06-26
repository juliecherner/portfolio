import Image from 'next/image'
import './animation.scss'

export default function Animation() {
  return (
    <div className="flex flex-col items-center justify-center gap-24 mt-12 lg:mt-24">
      <div className="node-icon sm:block lg:hidden">
        <Image
          src="/images/icons8-nodejs-48.png"
          width={50}
          height={50}
          alt="⎔"
        />
      </div>
      <div id="animation-letters">
        <p id="animation-letter">B</p>
        <p id="animation-letter">E</p>
        <p id="animation-letter">&nbsp;</p>
        <p id="animation-letter">I</p>
        <p id="animation-letter">N</p>
        <p id="animation-letter">&nbsp;</p>
        <p id="animation-letter">T</p>
        <p id="animation-letter">O</p>
        <p id="animation-letter">U</p>
        <p id="animation-letter">C</p>
        <p id="animation-letter">H</p>
      </div>
    </div>
  )
}
