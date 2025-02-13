import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import ContactsPage from '../pages/ContactsPage'
import MainLayout from '../layouts/MainLayout'
import ProjectsPage from '../pages/ProjectsPage'
import AiAgentPage from '../pages/AiAgentPage'
import LeadsPage from '../pages/LeadsPage'
import InboxPage from '../pages/InboxPage'
import AddProjectPage from '../pages/AddProjectPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/aiagent" element={<AiAgentPage />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/addProject" element={<AddProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter