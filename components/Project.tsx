import { SkillsComponent } from "./Skills"

export const ProjectComponent = function() {
  return <>
    <div id="project" className="flex flex-col px-4 sm:px-6 lg-px-8 font-serif py-28">
      <div className="flex flex-col pb-2">
        <h2 className="text-4xl font-semibold text-center">PROJECTS</h2>
        <p className="text-center text-xl p-10">Here you will find some of the projects that I created</p>
      </div>
      <div className="mx-72 text-justify px-7 space-y-10">
        <div className="flex flex-row space-x-20">
          <h3 className="w-2/3">Horizon</h3>
          <div className="flex flex-col space-y-3">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis est id massa tincidunt, in auctor orci mattis. Donec egestas enim sed arcu maximus accumsan. Ut porttitor finibus ex, non euismod quam egestas et. Mauris vel ligula condimentum, consequat mi maximus, maximus risus. Phasellus quis scelerisque risus.  </p> 
            </div>
            <div className="flex flex-row w-full flex-wrap">
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript Java java java" />
              <SkillsComponent skill="JavaScript JavaScript" />
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-20">
          <h3 className="w-2/3">Horizon</h3>
          <div className="flex flex-col space-y-3">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis est id massa tincidunt, in auctor orci mattis. Donec egestas enim sed arcu maximus accumsan. Ut porttitor finibus ex, non euismod quam egestas et. Mauris vel ligula condimentum, consequat mi maximus, maximus risus. Phasellus quis scelerisque risus.  </p> 
            </div>
            <div className="flex flex-row w-full flex-wrap">
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript Java java java" />
              <SkillsComponent skill="JavaScript JavaScript" />
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-20">
          <h3 className="w-2/3">Horizon</h3>
          <div className="flex flex-col space-y-3">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis est id massa tincidunt, in auctor orci mattis. Donec egestas enim sed arcu maximus accumsan. Ut porttitor finibus ex, non euismod quam egestas et. Mauris vel ligula condimentum, consequat mi maximus, maximus risus. Phasellus quis scelerisque risus.  </p> 
            </div>
            <div className="flex flex-row w-full flex-wrap">
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript Java java java" />
              <SkillsComponent skill="JavaScript JavaScript" />
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-20">
          <h3 className="w-2/3">Horizon</h3>
          <div className="flex flex-col space-y-3">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis est id massa tincidunt, in auctor orci mattis. Donec egestas enim sed arcu maximus accumsan. Ut porttitor finibus ex, non euismod quam egestas et. Mauris vel ligula condimentum, consequat mi maximus, maximus risus. Phasellus quis scelerisque risus.  </p> 
            </div>
            <div className="flex flex-row w-full flex-wrap">
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="JavaScript Java java java" />
              <SkillsComponent skill="JavaScript JavaScript" />
            </div>
          </div>
        </div>
      </div> 
    </div>
    <hr className="h-px bg-gray-800 border-0 dark:bg-gray-700"/>
  </>
}