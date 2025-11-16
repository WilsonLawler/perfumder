import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

interface SearchBarProps {
  onSearch?: (query: string) => void
  placeholder?: string
}

const SearchBar = ({ onSearch, placeholder = '搜尋香水品牌或名稱...' }: SearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <form onSubmit={handleSubmit} className="position-relative">
      <div className="input-group">
        <span className="input-group-text luxury-bg-dark border-0" style={{ 
          borderTopLeftRadius: '12px', 
          borderBottomLeftRadius: '12px', 
          paddingLeft: '1.25rem', 
          paddingRight: '1rem',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRight: 'none',
          background: 'rgba(10, 10, 10, 0.6)'
        }}>
          <FiSearch style={{ fontSize: '1.125rem', color: '#D4AF37' }} />
        </span>
        <input
          type="text"
          className="form-control form-control-luxury border-0"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ 
            borderTopRightRadius: '12px', 
            borderBottomRightRadius: '12px', 
            paddingLeft: '0.75rem',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderLeft: 'none'
          }}
        />
      </div>
    </form>
  )
}

export default SearchBar

