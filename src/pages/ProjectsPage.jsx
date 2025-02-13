import React, { useEffect, useState } from 'react'
import PageTitle from '../components/layout/PageTitle'
import { Edit, Trash, Plus } from "lucide-react";
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Th from '../components/common/Th';
import Td from '../components/common/Td';
import data from '../data/projectss-data.json'
import { getPaginationRange } from '../utils/pagination';
import Pagination from '../components/Pagination';
import StatusBadge from '../components/StatusBadge';
import CustomCheckbox from '../components/common/CustomCheckbox';

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
const statusMapping = {
    "Deal Closed": "positive",
    Negotiation: "warning",
    "Not Interested": "negative",
    Default: "neutral",
};
const ProjectsPage = () => {
    const [filteredData, setFilteredData] = useState([]);
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(() => {
        setFilteredData(data)
    }, [])
    const paginationRange = getPaginationRange(currentPage, totalPages);

    const handlePaginate = (page) => {
        setCurrentPage(page);
    };
    const [selectedRows, setSelectedRows] = useState([]);
    const handleSelectAll = () => {
        setSelectedRows(selectedRows.length === data.length ? [] : data.map((row) => row.id));
    };
    const handleRowSelect = (rowId) => {
        setSelectedRows((prev) => (prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId]));
    };
    const onAction = () => {
        console.log('Clicked')
    }

    return (
        <div>
            <PageTitle title={'Projects'} actionText='Create New' ActionIcon={Plus} onAction={onAction} />
            <div><Breadcrumbs items={breadcrumbItems} /></div>
            <div className="border border-gray-300 rounded-lg overflow-hidden mt-4">
                <table className='min-w-full bg-white'>
                    <thead>
                        <tr>
                            <Th><CustomCheckbox onChange={handleSelectAll} checked={selectedRows.length === data.length && data.length > 0} /></Th>
                            {columns.map((column) => (
                                <Th key={column.key}>{column.label}</Th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row, rowIndex) => (
                            <tr> <Td>
                                <CustomCheckbox onChange={() => handleRowSelect(row.id)} checked={selectedRows.includes(row.id)} />
                            </Td>

                                {columns.map((column) => (
                                    <Td key={column.key}>
                                        {column.key === "leads" ? (
                                            <StatusBadge
                                                status={row[column.key]}
                                                statusType={statusMapping[row[column.key]] || "neutral"}
                                            />
                                        ) : (
                                            row[column.key]
                                        )}
                                    </Td>
                                ))}
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginationRange={paginationRange}
                onPaginate={handlePaginate}
            />
        </div>
    )
}

export default ProjectsPage