function HomePage() {
  return (
    <section className="page-card hero-page">
      <div>
        <p className="eyebrow">Welcome</p>
        <h1>Building thoughtful digital work.</h1>
        <p className="lead">
          Use this space to introduce yourself and your craft. Highlight what you do
          best and the type of work you are most excited to collaborate on.
        </p>
        <a className="resume-download" href="/resume.pdf" download>
          Download Resume
        </a>
      </div>
      <div className="image-placeholder hero-image">Hero Image Placeholder</div>
    </section>
  )
}

export default HomePage
