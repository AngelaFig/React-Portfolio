import Project from "../components/Project";

function Portfolio(){
const projectArray =[
    {
            id: 1,
        title: "project 1",
        description: "project 1 woohoo",
        image: "path to image",
        url: "path to live url",
        github: "path to github repo"
    },
    {
        id: 2,
    title: "project 2",
    description: "project 2 woohoo",
    image: "path to image",
    url: "path to live url",
    github: "path to github repo"
},
]


    return (
        <div>
        {
            projectArray.map(project => {
                return (
                    <div>
                  <Project key={project.id} title={project.title} description={project.description} image={project.image} url={project.url} github={project.github} />      
                    </div>    
                )
            })
        }
        </div>


    )

    
}


export default Portfolio