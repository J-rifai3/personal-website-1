import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'My Work', to: '/work' },
  { label: 'Contact Me', to: '/contact' },
]

function MainLayout() {
  return (
    <div className="site-shell">
      <header className="main-header">
        <div className="brand">Jude Rifai</div>
        <nav className="main-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="page-main">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
