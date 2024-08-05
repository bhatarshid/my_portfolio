import { SkillsComponent } from "./Skills"

export const AboutComponent = function() {
  return <div id="about">
    <div className="flex flex-col justify-center items-center sm:px-6 lg-px-8 font-serif md:min-h-screen py-28">
      <div className="flex flex-col pb-2">
        <h2 className="text-4xl font-semibold text-center">ABOUT ME</h2>
        <hr className="border-t-4 border-customPurple rounded-full w-10 mx-auto mt-5"/>
        <p className="text-center text-xl p-10">Here you will find more information about me, what I do, and my current skills mostly in terms <br />of programming and technology</p>
      </div>
      <div className="flex item-center- justify-center p-5 ml-4">
        <div className="w-2/4 pr-16">
          <h3 className="text-3xl font-semibold text-slate-900">Get to know me!</h3>
          <p className="text-justify mr-10 py-5 pb-10">I&apos;m and experienced Software developer with more than two years of hands-on experience in Software Engineering practice. I&pos;m proficient in Restful API, Node.Js, Express.Js, MySql, MongoDB, Microservice Architecture, Git, and DSA. I&pos;m dedicated to implementing new projects, enhancing software efficiency, and continuously improving technical expertise. I have ability to translate business requirements into technical solutions.</p>
          <a href="#contact" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-300 py-3 px-10">
            Contact
          </a>
        </div>
        <div className="w-2/4 pl-16">
          <h3 className="text-3xl font-semibold text-slate-900">My Skills</h3>
          <div className="py-5 pr-5 flex flex-row flex-wrap justify-between">
            <SkillsComponent skill="TypeScript" />    <SkillsComponent skill="JavaScript" />
            <SkillsComponent skill=" C++" />          <SkillsComponent skill="C" />
            <SkillsComponent skill="Node.Js" />       <SkillsComponent skill="SQL" />
            <SkillsComponent skill="Express.Js" />    <SkillsComponent skill="Next.Js" />
            <SkillsComponent skill="Prisma" />        <SkillsComponent skill="Mongoose" />
            <SkillsComponent skill="Sequelize" />     <SkillsComponent skill="Git" />
            <SkillsComponent skill="Firebase" />      <SkillsComponent skill="SQL" />
            <SkillsComponent skill="MongoDb" />       <SkillsComponent skill="PostgreSQL" />
          </div>
        </div>
      </div>
    </div>
    <hr className="border-t-2 border-gray-500 rounded-full mx-24"/>
  </div>
}