import { Link } from 'react-router-dom'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { Perfume } from '../types/perfume'

interface PerfumeCardProps {
  perfume: Perfume
}

const PerfumeCard = ({ perfume }: PerfumeCardProps) => {
  return (
    <div className="luxury-card card-hover h-100">
      <Link to={`/perfume/${perfume.id}`} className="text-decoration-none">
        <div className="image-container" style={{ height: '300px' }}>
          {perfume.imageUrl ? (
            <img src={perfume.imageUrl} alt={`${perfume.brand} ${perfume.name}`} />
          ) : (
            <div className="d-flex align-items-center justify-content-center h-100">
              <div className="text-center">
                <div style={{ fontSize: '0.875rem', color: 'rgba(245, 245, 245, 0.5)', fontWeight: 500 }}>無圖片</div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="mb-2">
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 600, color: 'rgba(212, 175, 55, 0.8)', textTransform: 'uppercase' }}>
              {perfume.brand.toUpperCase()}
            </span>
          </div>
          <h5 className="mb-3" style={{ fontWeight: 600, fontSize: '1.125rem', color: '#F5F5F5', letterSpacing: '0.025em', fontFamily: "'Playfair Display', serif" }}>
            {perfume.name}
          </h5>
          <div className="d-flex justify-content-between align-items-center">
            <span style={{ fontSize: '0.875rem', color: 'rgba(245, 245, 245, 0.6)' }}>
              {perfume.capacity}
            </span>
            <span className="luxury-text-primary fw-bold" style={{ fontSize: '1.25rem', fontFamily: "'Playfair Display', serif" }}>
              ${perfume.price.toLocaleString()}
            </span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4 d-flex gap-2">
        <Link
          to={`/edit/${perfume.id}`}
          className="btn btn-sm btn-outline-primary luxury-btn flex-fill"
        >
          <FiEdit2 className="me-1" />
          編輯
        </Link>
        <button
          className="btn btn-sm btn-outline-secondary luxury-btn flex-fill"
          onClick={(e) => {
            e.preventDefault()
            // 刪除邏輯後續實作
          }}
          style={{ borderColor: 'rgba(212, 175, 55, 0.3)', color: 'rgba(245, 245, 245, 0.8)' }}
        >
          <FiTrash2 className="me-1" />
          刪除
        </button>
      </div>
    </div>
  )
}

export default PerfumeCard

