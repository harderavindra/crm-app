import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import ContactsPage from '../pages/Contacts'
import MainLayout from '../layouts/MainLayout'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter