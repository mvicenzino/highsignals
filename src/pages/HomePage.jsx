import Hero from '../sections/Hero'
import SocialProof from '../sections/SocialProof'
import Problems from '../sections/Problems'
import Deliverables from '../sections/Deliverables'
import Results from '../sections/Results'
import DiagnosticCTA from '../sections/DiagnosticCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problems />
      <div id="solutions"><Deliverables /></div>
      <div id="results"><Results /></div>
      <div id="resources"><DiagnosticCTA /></div>
    </>
  )
}
