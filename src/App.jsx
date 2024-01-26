import Dashboard from './components/Dashboard'
import {BrowSerRouter as Router, Routes, Route} from 'react-router-dom'
import Template from './components/shared/Template'
import Products from './components/pages/Products'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="products" element={<Products/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
