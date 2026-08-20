import Header    from './components/Header'
import Hero      from './components/Hero'
import WhatWeDo  from './components/WhatWeDo'
import ComingSoon from './components/ComingSoon'
import Countdown from './components/Countdown'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <ComingSoon />
        <Countdown />
      </main>
      <Footer />
    </>
  )
}
