import { useState } from 'react'
import { FragranceCategory } from '../types/perfume'

interface FilterPanelProps {
  onFilterChange?: (filters: FilterState) => void
}

export interface FilterState {
  brands: string[]
  categories: FragranceCategory[]
  priceRange: [number, number]
}

const FilterPanel = ({ onFilterChange }: FilterPanelProps) => {
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    categories: [],
    priceRange: [0, 10000],
  })

  const fragranceCategories: FragranceCategory[] = [
    'Floral',
    'Oriental',
    'Woody',
    'Fresh',
    'Fruity',
    'Spicy',
    'Citrus',
  ]

  const popularBrands = [
    'Chanel',
    'Dior',
    'Gucci',
    'Tom Ford',
    'Yves Saint Laurent',
    'Hermès',
    'Creed',
    'Maison Margiela',
  ]

  const handleBrandToggle = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand]
    const newFilters = { ...filters, brands: newBrands }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handleCategoryToggle = (category: FragranceCategory) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category]
    const newFilters = { ...filters, categories: newCategories }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handlePriceChange = (min: number, max: number) => {
    const newFilters: FilterState = { ...filters, priceRange: [min, max] as [number, number] }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  return (
    <div className="luxury-card p-4">
      <h5 className="mb-4" style={{ fontWeight: 700, fontSize: '1.25rem', color: '#F5F5F5', letterSpacing: '0.05em', fontFamily: "'Playfair Display', serif" }}>
        篩選條件
      </h5>

      {/* 品牌篩選 */}
      <div className="mb-4">
        <h6 className="mb-3" style={{ fontSize: '0.8125rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(212, 175, 55, 0.8)' }}>
          品牌
        </h6>
        <div className="d-flex flex-wrap gap-2">
          {popularBrands.map((brand) => (
            <button
              key={brand}
              type="button"
              className={`btn btn-sm ${
                filters.brands.includes(brand)
                  ? 'btn-primary luxury-btn'
                  : 'btn-outline-secondary'
              }`}
              onClick={() => handleBrandToggle(brand)}
              style={{ borderRadius: '0.5rem' }}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* 香調分類 */}
      <div className="mb-4">
        <h6 className="mb-3" style={{ fontSize: '0.8125rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(212, 175, 55, 0.8)' }}>
          香調
        </h6>
        <div className="d-flex flex-wrap gap-2">
          {fragranceCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`btn btn-sm ${
                filters.categories.includes(category)
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

      {/* 價格區間 */}
      <div>
        <h6 className="mb-3" style={{ fontSize: '0.8125rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(212, 175, 55, 0.8)' }}>
          價格區間
        </h6>
        <div className="d-flex align-items-center gap-3">
          <input
            type="number"
            className="form-control form-control-luxury"
            placeholder="最低"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
            style={{ maxWidth: '120px' }}
          />
          <span className="text-muted">-</span>
          <input
            type="number"
            className="form-control form-control-luxury"
            placeholder="最高"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
            style={{ maxWidth: '120px' }}
          />
        </div>
      </div>
    </div>
  )
}

export default FilterPanel

