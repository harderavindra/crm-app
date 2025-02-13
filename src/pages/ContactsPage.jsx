import React from 'react'
import PageTitle from '../components/layout/PageTitle'
import { Edit, Trash,Plus } from "lucide-react";
import Breadcrumbs from '../components/layout/Breadcrumbs';
const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Contacts', path: '' },
]
const ContactsPage = () => {
  const onAction = ()=>{
    console.log('Clicked')
}
  return (
    <div>
      <PageTitle title={'Contacts'} actionText='Create New' ActionIcon={Plus} onAction={onAction}/>
      <div><Breadcrumbs items={breadcrumbItems} /></div>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
      
      </div>
    </div>
  )
}

export default ContactsPage