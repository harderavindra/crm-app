import React, { useEffect, useState } from 'react'
import PageTitle from '../components/layout/PageTitle'
import { Edit, Trash, Plus, Search, RefreshCcwDot, Phone } from "lucide-react";
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Th from '../components/common/Th';
import Td from '../components/common/Td';
import data from '../data/contacts-data.json'
import Pagination from '../components/Pagination';
import StatusBadge from '../components/StatusBadge';
import CustomCheckbox from '../components/common/CustomCheckbox';
import { usePagination } from '../hooks/usePagination'; 
import { useRowSelection } from '../hooks/useRowSelection';
import { RefreshCcw } from 'lucide';
import Avatar from '../components/common/Avatar';
import RoleList from '../components/RoleList';
import TableActionButton from '../components/TableActionButton';

const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Contacts', path: '' },
]
const columns = [
  { key: "Name", label: "Name" },
  { key: "Company", label: "Company" },
  { key: "Experience(s)", label: "Stage" },
  { key: "Education", label: "Education" },
  { key: "Tags", label: "Tags" },
  { key: "action", label: "" },
 
];
const statusMapping = {
  "Deal Closed": "positive",
  Negotiation: "warning",
  "Not Interested": "negative",
  Default: "neutral",
};
const ContactsPage = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false); // Add loading state

    const itemsPerPage = 8;

    const {
        currentPage,
        totalPages,
        paginatedData,
        paginationRange,
        handlePaginate, // Use handlePaginate from usePagination
    } = usePagination(filteredData, itemsPerPage);
    const { selectedRows, handleSelectAll, handleRowSelect } = useRowSelection(data);


    useEffect(() => {
        setFilteredData(data)
    }, [])

    const [query, setQuery] = useState("");
    const [selectedStage, setSelectedStage] = useState("All");
    useEffect(() => {
        setLoading(true); 
        const timeoutId = setTimeout(() => {
            handleFilterAndSearch();
            setLoading(false);
        }, 500); // Debounce search (wait 500ms before filtering)

        return () => clearTimeout(timeoutId); // Clear timeout on change
    }, [query, selectedStage]); // Runs whenever query or stage changes

    const handleFilterAndSearch = () => {
        let filtered = data;

        if (selectedStage !== "All") {
            filtered = filtered.filter((row) => row.leads === selectedStage);
        }

        if (query.length > 2) {
            filtered = filtered.filter((row) =>
                Object.values(row).some((value) =>
                    value.toString().toLowerCase().includes(query.toLowerCase())
                )
            );
        }

        setFilteredData(filtered); // Updates displayed results
        console.log("changed")
    };

    const onAction = () => {
        console.log('Clicked')
    }

    return (
        <div>
            <PageTitle title={'Contacts'} actionText='Create New' ActionIcon={Plus} onAction={onAction} />
            <div><Breadcrumbs items={breadcrumbItems} /></div>
            <div className='flex mt-3 gap-4'>
                <div className="flex gap-0 mb-4 p-2 border border-gray-400 bg-white rounded-lg relative ">
                    <select
                        onChange={(e) => setSelectedStage(e.target.value)}
                        className="px-2 border-0 rounded w-[100px] focus:outline-0 active:outline-0 focus:bg-gray-100"
                    >
                        <option value="All">All</option>
                        <option value="Not Interested">Not Interested</option>
                        <option value="Negotiation">Negotiation</option>
                        <option value="Deal Closed">Deal Closed</option>
                    </select>
                    <span className='height-full w-px bg-gray-400 ml-2 mr-2'></span>
                    <div className='relative pr-8'>
                        <input
                            type="text"
                            placeholder="Search by project name or phone ..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="border-0 rounded-sm px-2 mr-2 w-64 focus:outline-0 active:outline-0 focus:bg-gray-100"
                        />
                        <Search size='20px' className='absolute right-4  top-[2px] text-gray-400' />
                    </div>
                    {loading ? (
    <RefreshCcwDot className="animate-spin text-gray-600" size={24} />
) :('')}
                </div>
            </div>
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
                    {data.map((row, rowIndex) => (
              <tr> <td className='py-3.5 px-4 border-b border-gray-300 text-center'>
                <CustomCheckbox onChange={() => handleRowSelect(row.id)} checked={selectedRows.includes(row.id)} />
              </td>
                <td className='py-3.5 px-4 border-b border-gray-300'>
                  <div className='flex gap-3'>
                    <Avatar src={row.profile} size={90} />
                    <div>
                      <h2 className='text-lg font-semibold'>{row.name}</h2>
                      <h3 className=''>{row.title}</h3>
                      <p className='mb-1 flex'>{row.contact}
                        <a href={`tel:${row.contact.replace(/\D/g, '')}`}
                          className="text-emerald-500 bg-emerald-100/40 flex  p-1 w-6 h-6 rounded-full justify-center items-center ml-3">
                          {<Phone size={14} className='text-emerald-500' />}
                        </a></p>
                      <p className='text-xs text-gray-500'>{row.location}</p>
                    </div>
                  </div>

                </td>
                <td className='py-3.5 px-4 border-b border-gray-300'>
                  {row.company}
                </td>
                <td className='py-3.5 px-4 border-b border-gray-300'>
                  {row.experience}
                  <RoleList roles={row.roles} />
                </td>
                <td>
                  {
                    row.education.map((edu, index) => (
                      <p> {edu.field}, {edu.institution}<br /><b>({edu.title})</b><br /><span className='font-normal text-sm italic'>{edu.duration}</span></p>
                    ))
                  }
                </td>
                <td>
                  <StatusBadge
                    status={row.tag}
                    statusType={statusMapping[row.tag] || "neutral"}
                  />
                </td>
                <td> <TableActionButton>View</TableActionButton></td>
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

export default ContactsPage