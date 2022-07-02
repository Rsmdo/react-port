import React from 'react';
import project1 from "/";
import project2 from '/';
const Project = () => {
  const projectList = [
    {
        id: 0,
        title: "Population density checker",
        tech: "HTML CSS Javascript MAPbox API ",
        img: project1,
        description: "A population density checker where you can check the population density in certian areas",
        repo: "https://github.com/project01team10/population-density-checker",
        live: "https://project01team10.github.io/population-density-checker/",
    },
    {
        id: 1,
        title: "Re-imagined system ",
        tech: "Handlebars Tailwind MVC chart.js Nosql ",
        img: project2,
        description: "This is a inventory management system with security, and a full backend system. User can sign-in and add inventory and be provided with a interactive UI",
        repo: "https://github.com/project0204/reimagined-system",
        live: "https://reimagined-system.herokuapp.com",
    },
]
  
  return (
    <section>
    <h1 className='text-center m-2'>Check out some of my work</h1>
    <div className='container'>
        <div className='row'>
            {projectList.map((project) => (
                <div key={project.id} className='col-12 col-lg-6 text-center p-2'>
                    <div className='card m-2 p-2 customCard'>

                        <img src={project.img} alt={`Screenshot of ${project.title}`} width='300' height='250' className='m-auto cardImage' />
                        <div className='cardInfo'>
                            <h3 className="m-1">{project.title}</h3>
                            <p className="m-1">{project.description}</p>
                            <p className="m-0">
                                <a href={project.repo} target='_blank' rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 16 16" className="icon-logo mx-2 bi bi-github">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                                {project.live !== null &&
                                    <a href={project.live} target='_blank' rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 16 16" className="icon-logo mx-2 bi bi-box-arrow-up-right">
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                        </svg>
                                    </a>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>
);
}

export default Project;