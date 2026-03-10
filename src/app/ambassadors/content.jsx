'use client'

import React from 'react'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import WhatYouWillDo from './components/WhatYouWillDo'
import WhatWeLookFor from './components/WhatWeLookFor'
import WhatYouGainSection from './components/WhatYouGainSection'
import HowTheProgramWorks from './components/HowTheProgramWorks'
import CallToActionSection from './components/CallToActionSection'



function Ambassadorcontent() {
  return (
    <div>
        <HeroSection />
        <IntroSection/>
        <WhatYouWillDo/>
        <WhatWeLookFor/>
        <WhatYouGainSection/>
        <HowTheProgramWorks/>
        <CallToActionSection/>
    </div>
  )
}

export default Ambassadorcontent