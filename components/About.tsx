import { SkillsComponent } from "./Skills"

export const AboutComponent = function() {
  return <div id="about">
    <div className="flex flex-col justify-center items-center sm:px-6 lg-px-8 md:min-h-screen py-28">
      <div className="flex flex-col pb-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-center">ABOUT ME</h2>
        <hr className="border-t-4 border-customPurple rounded-full w-10 mx-auto mt-5"/>
        <p className="text-center text-base sm:text-xl font-medium mx-auto md:w-1/2 px-10 py-8 md:px-0">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center p-5 sm:ml-4 sm:space-y-0 space-y-8">
        <div className="w-3/4 sm:w-1/2 sm:pr-10 md:pr-14 lg:pr-16 sm:mx-0 mx-auto">
          <h3 className="text:xl md:text-2xl lg:text-3xl font-semibold">Get to know me!</h3>
          <p className="text-justify font-montserrat py-5 pb-10">I&apos;m and experienced Software developer with more than two years of hands-on experience in Software Engineering practice. I&apos;m proficient in Restful API, Node.Js, Express.Js, MySql, MongoDB, Microservice Architecture, Git, and DSA. I&apos;m dedicated to implementing new projects, enhancing software efficiency, and continuously improving technical expertise. I have ability to translate business requirements into technical solutions.</p>
          <a href="#contact" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-300 py-3 px-10">
            Contact
          </a>
        </div>
        <div className="w-3/4 sm:1/2 sm:pl-10 md:pl-14 lg:pl-16 sm:mx-0 mx-auto">
          <h3 className="text:xl md:text-2xl lg:text-3xl font-semibold">My Skills</h3>
          <div className="py-5 flex flex-row flex-wrap sm:justify-start justify-between">
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