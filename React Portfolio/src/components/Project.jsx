// with props, start at the data you would like to display ie in this case project {title, description, img, live url, github url}

function Project(props) {
return (
  <div className="card" key={props.id} style={{"width": "18rem"}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}.</p>
    <a href={props.url} className="btn btn-primary">Live URL</a>
    <a href={props.github}>github</a>
  </div>
</div>  
)
}

export default Project
