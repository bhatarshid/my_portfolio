import { SkillsComponent } from "./Skills"

export const ProjectComponent = function() {
  return <>
    <div id="project" className="flex flex-col justify-center px-4 sm:px-6 lg-px-8 font-serif md:min-h-screen py-28">
      <div className="flex flex-col pb-2">
        <h2 className="text-4xl font-semibold text-center">PROJECTS</h2>
        <hr className="border-t-4 border-customPurple rounded-full w-10 mx-auto mt-5"/>
        <p className="text-center text-xl p-10">Here you will find some of the projects that I worked on.</p>
      </div>
      <div className="mx-72 text-justify px-7 space-y-10">
        <div className="flex flex-row">
          <h3 className="w-2/3 text-lg font-semibold min-w-36">Horizon</h3>
          <div className="flex flex-col space-y-3">
            <div>
              <p>The Horizon web application revolutionizes educational management by enabling teachers and administrators to create, administer, and monitor tests, quizzes, and assessments in real-time. Designed for educational institutions, the application facilitates seamless student participation across various courses and classes, while providing real-time tracking of student progress. Utilizing multitenancy architecture, each organization&apos;s data is securely stored in separate databases, ensuring robust data security and privacy. The application&apos;s intelligent analytics generate personalized playlists and course recommendations based on individual student performance, enhancing learning outcomes and administrative efficiency. </p> 
            </div>
            <div className="flex flex-row w-full flex-wrap">
              <SkillsComponent skill="TypeScript" />
              <SkillsComponent skill="Node.Js" />
              <SkillsComponent skill="MongoDb" />
              <SkillsComponent skill="Firebase" />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <h3 className="w-2/3 text-lg font-semibold min-w-36">R-Office</h3>
          <div className="flex flex-col space-y-3">
            <div>
              <p>The R Office web application is designed to facilitate seamless connections between service providers and advisors, thereby optimizing the process of sourcing and offering specialized services. The application includes a marketing site that explains the project&apos;s main ideas and the team&apos;s skills, along with an easy registration process for new users. The primary marketplace comprises a Job Opportunity Dashboard that enables service providers to search, sort, and view job listings, and a Service Provider Listing that assists advisors in identifying suitable candidates. Additionally, the application includes detailed Job and Service Provider pages to provide in-depth information, and an administrative dashboard that offers insights into platform activities and user engagement. </p> 
            </div>
            <div className="flex flex-row w-full flex-wrap">
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="Node.Js" />
              <SkillsComponent skill="MySQL" />
              <SkillsComponent skill="Firebase" />
              <SkillsComponent skill="Sequelize" />
              <SkillsComponent skill="S3" />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <h3 className="w-2/3 text-lg font-semibold min-w-36">VMS</h3>
          <div className="flex flex-col space-y-3">
            <div>
              <p>A scalable and customizable software solution designed to streamline and automate the visitor management process within an organization. The platform manages visitors from registration to check-in and check-out, enhancing security, efficiency, and compliance. It features a user-friendly interface, robust authentication and authorization, and comprehensive visitor permission management. Detailed visitor profiles and secure document uploads via AWS S3 are included, with seamless frontend integration for an enhanced user experience. An automated email notification system ensures real-time communication with relevant employees. This solution significantly improves visitor management, contributing to better security and operational efficiency.</p> 
            </div>
            <div className="flex flex-row w-full flex-wrap">
              <SkillsComponent skill="JavaScript" />
              <SkillsComponent skill="Node.Js" />
              <SkillsComponent skill="MySQL" />
              <SkillsComponent skill="Sequelize" />
              <SkillsComponent skill="Docker" />
            </div>
          </div>
        </div>
      </div> 
    </div>
    <hr className="border-t-2 border-gray-500 rounded-full mx-24"/>
  </>
}