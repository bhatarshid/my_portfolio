import { AboutComponent } from "@/components/About"
import { BottomComponent } from "@/components/Bottom"
import { ContactComponent } from "@/components/Contact"
import { IntroComponent } from "@/components/Intro"
import { LeftbarComponent } from "@/components/LeftBar"
import { NavBarComponent } from "@/components/Navbar"
import { ProjectComponent } from "@/components/Project"

export default function Portfolio() {
  return <>
    <NavBarComponent/>
    <LeftbarComponent/>
    <main className="bg-background bg-repeat w-full">
      <IntroComponent/>
      <AboutComponent/>
      <ProjectComponent/>
      <ContactComponent/>
      <BottomComponent/>
    </main>      
  </>
}