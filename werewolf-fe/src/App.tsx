import { Route, Routes, Navigate } from 'react-router-dom'
import loadable from '@loadable/component'
import routes from '@/routes'
import './App.scss'

import Home from '@/pages/Home/index'

function App() {
  return (
    <div>
      hello
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        {routes.map((item, i) => {
          return (
            <Route
              key={i}
              path={item.path as string}
              element={<item.element />}
            />
          )
        })}
      </Routes>
    </div>
  )
}

export default App
