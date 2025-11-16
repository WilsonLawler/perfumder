import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import AddPerfumePage from './pages/AddPerfumePage'
import EditPerfumePage from './pages/EditPerfumePage'
import PerfumeDetailPage from './pages/PerfumeDetailPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPerfumePage />} />
          <Route path="/edit/:id" element={<EditPerfumePage />} />
          <Route path="/perfume/:id" element={<PerfumeDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

