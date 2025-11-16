import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="luxury-bg-dark py-4 py-md-5" style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-decoration-none">
            <h1 
              className="luxury-text-primary mb-0 transition-elegant" 
              style={{ 
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                letterSpacing: '0.05em',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              PERFUMDER
            </h1>
          </Link>
          <nav className="d-flex align-items-center gap-4 gap-md-5">
            <Link 
              to="/" 
              className="text-decoration-none transition-elegant fw-medium" 
              style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                color: '#F5F5F5',
                letterSpacing: '0.05em'
              }}
            >
              收藏
            </Link>
            <Link 
              to="/add" 
              className="text-decoration-none transition-elegant fw-medium" 
              style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                color: '#F5F5F5',
                letterSpacing: '0.05em'
              }}
            >
              新增
            </Link>
            <button 
              className="btn btn-link p-0 border-0 transition-elegant" 
              style={{ 
                fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                color: '#D4AF37'
              }}
              aria-label="搜尋"
            >
              <FiSearch />
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

