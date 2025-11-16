import { useNavigate, useParams } from 'react-router-dom'
import { FiArrowLeft, FiEdit2, FiTrash2 } from 'react-icons/fi'

// Mock 資料
const mockPerfume = {
  id: '1',
  brand: 'Chanel',
  name: 'No. 5',
  capacity: '100ml',
  fragranceNotes: ['Floral', 'Aldehydic'],
  price: 150,
  imageUrl: undefined,
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z',
}

const PerfumeDetailPage = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  // 載入資料邏輯後續實作
  const perfume = mockPerfume

  const handleDelete = () => {
    // 刪除邏輯後續實作
    if (window.confirm('確定要刪除此收藏嗎？')) {
      console.log('Delete perfume:', id)
      navigate('/')
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <button
            className="btn btn-link text-decoration-none p-0 mb-4 d-flex align-items-center"
            onClick={() => navigate('/')}
            style={{ fontSize: '0.95rem', color: '#D4AF37' }}
          >
            <FiArrowLeft className="me-2" />
            返回收藏列表
          </button>

          <div className="row">
            <div className="col-12 col-md-5 mb-4">
              <div className="image-container" style={{ height: '500px', borderRadius: '1rem' }}>
                {perfume.imageUrl ? (
                  <img src={perfume.imageUrl} alt={`${perfume.brand} ${perfume.name}`} />
                ) : (
                  <div className="d-flex align-items-center justify-content-center h-100" style={{ backgroundColor: '#f8fafc' }}>
                    <div className="text-center" style={{ color: '#cbd5e1' }}>
                      <div style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 500 }}>無圖片</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-md-7">
              <div className="luxury-card p-5">
                <div className="mb-3">
                  <span style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(212, 175, 55, 0.8)' }}>
                    {perfume.brand}
                  </span>
                </div>
                <h1 className="mb-4" style={{ 
                  fontWeight: 700, 
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                  letterSpacing: '0.05em', 
                  color: '#F5F5F5',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {perfume.name}
                </h1>

                <div className="mb-4 pb-4" style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="mb-1" style={{ fontSize: '0.875rem', color: 'rgba(245, 245, 245, 0.6)' }}>
                        容量
                      </div>
                      <div className="fw-semibold" style={{ color: '#F5F5F5' }}>{perfume.capacity}</div>
                    </div>
                    <div className="col-6">
                      <div className="mb-1" style={{ fontSize: '0.875rem', color: 'rgba(245, 245, 245, 0.6)' }}>
                        價格
                      </div>
                      <div className="luxury-text-primary fw-bold" style={{ fontSize: '1.75rem', fontFamily: "'Playfair Display', serif" }}>
                        ${perfume.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="mb-3" style={{ fontWeight: 600, fontSize: '1.125rem', color: '#F5F5F5', fontFamily: "'Playfair Display', serif" }}>
                    香調分類
                  </h5>
                  <div className="d-flex flex-wrap gap-2">
                    {perfume.fragranceNotes.map((note) => (
                      <span
                        key={note}
                        className="badge"
                        style={{ 
                          padding: '0.5rem 1rem', 
                          borderRadius: '12px', 
                          fontSize: '0.875rem',
                          background: 'linear-gradient(135deg, #D4AF37 0%, #F8E7B9 100%)',
                          color: '#000000',
                          fontWeight: 600,
                          border: '1px solid rgba(212, 175, 55, 0.5)'
                        }}
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="d-flex gap-3 mt-5 pt-4" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
                  <button
                    className="btn btn-primary luxury-btn flex-fill"
                    onClick={() => navigate(`/edit/${perfume.id}`)}
                  >
                    <FiEdit2 className="me-2" />
                    編輯
                  </button>
                  <button
                    className="btn btn-outline-danger luxury-btn flex-fill"
                    onClick={handleDelete}
                  >
                    <FiTrash2 className="me-2" />
                    刪除
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfumeDetailPage

