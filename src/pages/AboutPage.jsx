function AboutPage() {
  return (
    <section className="page-card">
      <p className="eyebrow">About</p>
      <h2>A little about me.</h2>
      <p className="lead">
        Add your background, interests, and approach to work here. This section can
        communicate your experience, values, and what sets you apart.
      </p>
      <div className="split-content">
        <div className="image-placeholder">Portrait or Workspace Placeholder</div>
        <div className="detail-list">
          <p>
            <strong>Focus:</strong> Product design, development, and storytelling.
          </p>
          <p>
            <strong>Approach:</strong> Simple, clear, and user-centered solutions.
          </p>
          <p>
            <strong>Currently:</strong> Building projects with measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
