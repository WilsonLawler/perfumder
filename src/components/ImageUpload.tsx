import { useState, useRef } from 'react'
import { FiUpload, FiX } from 'react-icons/fi'

interface ImageUploadProps {
  onImageSelect?: (file: File | null) => void
  existingImageUrl?: string
}

const ImageUpload = ({ onImageSelect, existingImageUrl }: ImageUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(existingImageUrl || null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
      onImageSelect?.(file)
    }
  }

  const handleRemove = () => {
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    onImageSelect?.(null)
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="image-upload-container">
      {previewUrl ? (
        <div className="position-relative">
          <div className="image-container" style={{ height: '400px', borderRadius: '1rem' }}>
            <img src={previewUrl} alt="預覽" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <button
            type="button"
            className="btn btn-danger position-absolute top-0 end-0 m-3"
            onClick={handleRemove}
            style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}
          >
            <FiX />
          </button>
        </div>
      ) : (
        <div
          className="border border-2 border-dashed d-flex flex-column align-items-center justify-content-center p-5"
          onClick={handleClick}
          style={{
            height: '400px',
            borderRadius: '16px',
            backgroundColor: 'rgba(10, 10, 10, 0.6)',
            borderColor: 'rgba(212, 175, 55, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(10, 10, 10, 0.8)'
            e.currentTarget.style.borderColor = '#D4AF37'
            e.currentTarget.style.boxShadow = '0 0 12px rgba(255, 215, 0, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(10, 10, 10, 0.6)'
            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <FiUpload style={{ fontSize: '3rem', color: '#D4AF37', marginBottom: '1rem', opacity: 0.6 }} />
          <p className="mb-2" style={{ color: '#F5F5F5', fontWeight: 600, fontSize: '1rem' }}>
            點擊上傳圖片
          </p>
          <p style={{ fontSize: '0.875rem', color: 'rgba(245, 245, 245, 0.5)' }}>
            或拖放圖片到此處
          </p>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default ImageUpload

