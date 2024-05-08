import { Section2 } from "../components/LandingPage/Section2";
import { Section3 } from "../components/LandingPage/Section3";
import { Section4 } from "../components/LandingPage/Section4";
import { Section5 } from "../components/LandingPage/Section5";
import { Section6 } from "../components/LandingPage/Section6";
import { SectionFooter } from "../components/LandingPage/SectionFooter";
import { SectionHeader } from "../components/LandingPage/SectionHeader";

export function LandingPage(){

    return(
        <section className='h-screen'>
            <SectionHeader/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <SectionFooter/>
         </section>
    )
}

