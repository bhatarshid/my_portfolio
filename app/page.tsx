import { About } from "@/components/About"
import { IntroComponent } from "@/components/Intro"
import { NavBarComponent } from "@/components/Navbar"

export default function Portfolio() {
  return <>
    <NavBarComponent/>
    <main className="bg-background bg-cover bg-center bg-no-repeat w-full">
      <IntroComponent/>
      <About/>
    </main>      
  </>
}