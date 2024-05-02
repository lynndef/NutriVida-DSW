import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";
import { Section4 } from "../components/Section4";
import { Section5 } from "../components/Section5";
import { Section6 } from "../components/Section6";
import { SectionFooter } from "../components/SectionFooter";
import { SectionHeader } from "../components/SectionHeader";

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