import React from 'react'
import PageTitle from '../components/layout/PageTitle'
import { Edit, Trash, Plus } from "lucide-react";
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Th from '../components/common/Th';
import Td from '../components/common/Td';
const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '' },
]
const columns = [
    { key: "type", label: "Type" },
    { key: "stage", label: "Stage" },
    { key: "account", label: "Account" },
    { key: "contractValue", label: "Contract Value" },
    { key: "qaDate", label: "Q&A Date" },
    { key: "closeDate", label: "Close Date" },
    { key: "leads", label: "Leads" },
    { key: "reports", label: "Reports" },
    { key: "complaints", label: "Complaints" },
];
const ProjectsPage = () => {
    const onAction = () => {
        console.log('Clicked')
    }
    return (
        <div>
            <PageTitle title={'Projects'} actionText='Create New' ActionIcon={Plus} onAction={onAction} />
            <div><Breadcrumbs items={breadcrumbItems} /></div>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
            <table className='min-w-full bg-white'>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <Th key={column.key}>{column.label}</Th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            {columns.map((column) => (
                                <Td key={column.key}>{column.label}</Td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectsPage