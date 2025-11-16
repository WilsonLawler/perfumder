import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ImageUpload from '../components/ImageUpload'
import { FragranceCategory } from '../types/perfume'

// Mock 資料
const mockPerfume = {
  id: '1',
  brand: 'Chanel',
  name: 'No. 5',
  capacity: '100ml',
  fragranceNotes: ['Floral', 'Aldehydic'] as FragranceCategory[],
  price: 150,
  imageUrl: undefined,
}

const EditPerfumePage = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [formData, setFormData] = useState({
    brand: '',
    name: '',
    capacity: '',
    fragranceNotes: [] as FragranceCategory[],
    price: '',
  })

  useEffect(() => {
    // 載入資料邏輯後續實作，目前使用 mock 資料
    setFormData({
      brand: mockPerfume.brand,
      name: mockPerfume.name,
      capacity: mockPerfume.capacity,
      fragranceNotes: mockPerfume.fragranceNotes,
      price: mockPerfume.price.toString(),
    })
  }, [id])

  const fragranceCategories: FragranceCategory[] = [
    'Floral',
    'Oriental',
    'Woody',
    'Fresh',
    'Fruity',
    'Spicy',
    'Citrus',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCategoryToggle = (category: FragranceCategory) => {
    setFormData((prev) => ({
      ...prev,
      fragranceNotes: prev.fragranceNotes.includes(category)
        ? prev.fragranceNotes.filter((c) => c !== category)
        : [...prev.fragranceNotes, category],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 更新邏輯後續實作
    console.log('Update data:', formData)
    navigate('/')
  }

  const handleImageSelect = (file: File | null) => {
    // 圖片處理邏輯後續實作
    console.log('Image selected:', file)
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="mb-5">
            <h1 className="mb-0" style={{ 
              fontWeight: 700, 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              letterSpacing: '0.05em', 
              color: '#F5F5F5',
              fontFamily: "'Playfair Display', serif"
            }}>
              編輯香水
            </h1>
            <p className="text-muted mt-3" style={{ color: 'rgba(245, 245, 245, 0.6)', fontSize: '1.125rem' }}>更新收藏資訊</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-5 mb-4">
                <label className="form-label fw-semibold mb-3" style={{ color: '#F5F5F5' }}>香水圖片</label>
                <ImageUpload onImageSelect={handleImageSelect} existingImageUrl={mockPerfume.imageUrl} />
              </div>

              <div className="col-12 col-md-7">
                <div className="luxury-card p-4">
                  <div className="mb-4">
                    <label htmlFor="brand" className="form-label fw-semibold" style={{ color: '#F5F5F5' }}>
                      品牌 <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-luxury"
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-semibold" style={{ color: '#F5F5F5' }}>
                      名稱 <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-luxury"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="capacity" className="form-label fw-semibold" style={{ color: '#F5F5F5' }}>
                      容量
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-luxury"
                      id="capacity"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold mb-3" style={{ color: '#F5F5F5' }}>香調分類</label>
                    <div className="d-flex flex-wrap gap-2">
                      {fragranceCategories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          className={`btn btn-sm ${
                            formData.fragranceNotes.includes(category)
                              ? 'btn-primary luxury-btn'
                              : 'btn-outline-secondary'
                          }`}
                          onClick={() => handleCategoryToggle(category)}
                          style={{ borderRadius: '0.5rem' }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="price" className="form-label fw-semibold" style={{ color: '#F5F5F5' }}>
                      價格
                    </label>
                    <div className="input-group">
                      <span className="input-group-text luxury-bg-dark" style={{ color: '#D4AF37', border: '1px solid rgba(212, 175, 55, 0.3)', borderRight: 'none' }}>$</span>
                      <input
                        type="number"
                        className="form-control form-control-luxury"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        min="0"
                        step="0.01"
                        style={{ borderLeft: 'none' }}
                      />
                    </div>
                  </div>

                  <div className="d-flex gap-3 mt-5">
                    <button type="submit" className="btn btn-primary luxury-btn flex-fill">
                      更新收藏
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary luxury-btn flex-fill"
                      onClick={() => navigate('/')}
                    >
                      取消
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditPerfumePage

