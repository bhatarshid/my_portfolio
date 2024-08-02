import { AboutComponent } from "@/components/About"
import { BottomComponent } from "@/components/Bottom"
import { ContactComponent } from "@/components/Contact"
import { IntroComponent } from "@/components/Intro"
import { NavBarComponent } from "@/components/Navbar"
import { ProjectComponent } from "@/components/Project"

export default function Portfolio() {
  return <>
    <NavBarComponent/>
    <main className="bg-background bg-cover bg-center bg-no-repeat w-full">
      <IntroComponent/>
      <AboutComponent/>
      <ProjectComponent/>
      <ContactComponent/>
      <BottomComponent/>
    </main>      
  </>
}