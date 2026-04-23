const projects = [
  {
    title: 'Project One',
    description:
      'A short summary of the problem, your role, and the result this project delivered.',
  },
  {
    title: 'Project Two',
    description:
      'A brief explanation of your process, technology choices, and measurable impact.',
  },
  {
    title: 'Project Three',
    description:
      'A concise overview of what you built and why this work is meaningful to you.',
  },
]

function WorkPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">Portfolio</p>
      <h2>Selected work.</h2>
      <p className="lead">
        Replace each placeholder with your screenshots or project images and keep the
        descriptions concise and outcome-focused.
      </p>
      <div className="work-grid">
        {projects.map((project) => (
          <article key={project.title} className="work-item">
            <div className="image-placeholder work-image">Project Image Placeholder</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WorkPage
