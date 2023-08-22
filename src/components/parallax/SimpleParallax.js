import React from 'react'
import '../../css/simpleparallax.css'

export default function SimpleParallax() {
  return (
    <div>
        {/* <!-- This is the parallax container --> */}
    <div className="parallax">
        {/* <!-- This is the content on top of the parallax background --> */}
        <div className="content">The Big Freeze</div>
        <div className="second-content">February, 2021</div>
    </div>

    {/* <!-- Some additional content to demonstrate the effect --> */}
    <div className="normal-content">Let’s just say that I always knew that I was different. You see, I was supposed to be a boring black and white octopus, like all of the others - but I knew I was meant for more. So much more. Deep down within myself, I was ready to return to my origins of vibrancy and magic.  It wasn’t until after the freeze that I found my newly thawed courage to reveal my most extraordinary self - a remarkable and unforgettable sight to see.  My transformational journey begins….</div>
    </div>
  )
}
