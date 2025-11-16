import { useState } from 'react'
import PerfumeCard from '../components/PerfumeCard'
import SearchBar from '../components/SearchBar'
import FilterPanel from '../components/FilterPanel'
import { Perfume } from '../types/perfume'
import { FiInbox } from 'react-icons/fi'

// Mock 資料
const mockPerfumes: Perfume[] = [
  {
    id: '1',
    brand: 'Chanel',
    name: 'No. 5',
    capacity: '100ml',
    fragranceNotes: ['Floral', 'Aldehydic'],
    price: 150,
    imageUrl: undefined,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    brand: 'Dior',
    name: 'Sauvage',
    capacity: '100ml',
    fragranceNotes: ['Fresh', 'Spicy'],
    price: 120,
    imageUrl: undefined,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    brand: 'Tom Ford',
    name: 'Black Orchid',
    capacity: '50ml',
    fragranceNotes: ['Oriental', 'Floral'],
    price: 200,
    imageUrl: undefined,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    brand: 'Gucci',
    name: 'Bloom',
    capacity: '100ml',
    fragranceNotes: ['Floral', 'Fruity'],
    price: 110,
    imageUrl: undefined,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

const HomePage = () => {
  const [perfumes] = useState<Perfume[]>(mockPerfumes)
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (query: string) => {
    // 搜尋邏輯後續實作
    console.log('Search:', query)
  }

  const handleFilterChange = (filters: any) => {
    // 篩選邏輯後續實作
    console.log('Filters:', filters)
  }

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h1 className="mb-0" style={{ 
              fontWeight: 700, 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              letterSpacing: '0.05em', 
              color: '#F5F5F5',
              fontFamily: "'Playfair Display', serif"
            }}>
              我的香水收藏
            </h1>
            <button
              className="btn btn-outline-primary luxury-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? '隱藏篩選' : '顯示篩選'}
            </button>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-md-8">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {showFilters && (
          <div className="col-12 col-lg-3 mb-4">
            <div className="fade-in">
              <FilterPanel onFilterChange={handleFilterChange} />
            </div>
          </div>
        )}
        <div className={showFilters ? 'col-12 col-lg-9' : 'col-12'}>
          {perfumes.length > 0 ? (
            <div className="row g-4">
              {perfumes.map((perfume, index) => (
                <div 
                  key={perfume.id} 
                  className="col-12 col-sm-6 col-md-4 col-lg-3 fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PerfumeCard perfume={perfume} />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state fade-in">
              <FiInbox />
              <h3>尚無收藏</h3>
              <p>開始建立您的香水收藏吧</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage

