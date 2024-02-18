import Faq from "../../components/Dashboard/FAQ"
import { Footer } from "../../components/Dashboard/Footer"
import Hero from "../../components/Dashboard/Hero"
import Navbar from "../../components/Dashboard/Navbar"

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="bg-white text-custom-blue md:flex md:flex-row-reverse">
  <div className="relative md:flex md:flex-col md:static md:justify-center lg:relative">
    {/* You can add content here if needed */}
  </div>
  <div className="flex flex-col lg:items-center p-10 gap-4 mx-auto">
    <h3 className="text-3xl font-semibold mx-auto">Why Corruption Watch?</h3>
    <div className="text-center flex flex-col gap-12 md:text-left lg:grid lg:grid-cols-2 lg:gap-x-24 lg:gap-y-16 lg:justify-items-center items-center">
      <div className="flex-col flex lg:items-start gap-3 items-center text-start">
        <h3 className="text-[24px] font-semibold lg:text-[30px]">Ensuring Community Safety</h3>
        <p className="font-light text-[16px] w-64 lg:text-[20px]">Our platform provides a vital avenue for individuals to anonymously report crimes, fostering a safer environment for communities. By encouraging reporting without fear of reprisal, we empower citizens to play an active role in crime prevention and law enforcement efforts.</p>
      </div>
      <div className="flex-col flex lg:items-start gap-3 items-center text-start">
        <h3 className="text-[24px] font-semibold lg:text-[30px]">Protecting Whistleblower Identities</h3>
        <p className="font-light text-[16px] w-64 lg:text-[20px]">With our secure and confidential reporting system, whistleblowers can confidently expose wrongdoing without risking their identities. We prioritize anonymity, employing robust encryption and privacy measures to safeguard reporters' information, ensuring they remain protected from potential retaliation.</p>
      </div>
      <div className="flex-col flex lg:items-start gap-3 items-center text-start">
        <h3 className="text-[24px] font-semibold lg:text-[30px]">Facilitating Law Enforcement Collaboration</h3>
        <p className="font-light text-[16px] w-64 lg:text-[20px]">Our platform serves as a bridge between the public and law enforcement agencies, facilitating seamless communication and collaboration. By efficiently channeling credible reports to relevant authorities, we enhance the effectiveness of investigative efforts, leading to swifter resolutions and justice.</p>
      </div>
      <div className="flex-col flex lg:items-start gap-3 items-center text-start">
        <h3 className="text-[24px] font-semibold lg:text-[30px]">Empowering Accountability and Transparency</h3>
        <p className="font-light text-[16px] w-64 lg:text-[20px]">Transparency and accountability are core principles of our platform. By enabling anonymous reporting, we promote accountability among individuals and organizations, deterring unethical behavior and corruption. Through transparent processes and feedback mechanisms, we strive to uphold trust and integrity within communities.</p>
      </div>
    </div>
  </div>
</div>
      <Faq />
      <Footer/>
    </>
  )
}

export default Home
