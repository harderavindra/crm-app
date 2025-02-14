import React, { useState } from 'react'
import InputField from '../components/common/InputField'
import PageTitle from '../components/layout/PageTitle';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import TextArea from '../components/common/TextArea';
import Button from '../components/common/Button';

const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Project', path: '/projects' },
    { name: 'Add Project', path: '' },
]
const AddProjectPage = () => {
    const [formData, setFormData] = useState({
        projectType: "",
        company: "",
        clientContact: "",
        partner: "",
        email: "",
        projectManager: "",
        notes: "",
        drugTest: "No",
        skills: [],
        additionalFields: [{
            projectName: "",
            salesStage: "",
            prices: "",
        },],
        recruitingProject: {
            projectName: "",
            whyIsThisPositionOpen: "",
            numberOfPositions: "",
            jobDescription: "",
            jobDescriptionAttachment: "",
            durationOfAssignment: "",
            typeOfPosition: ""
        }
    });
    const [submittedData, setSubmittedData] = useState(null)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleAddField = () => {
        setFormData({
            ...formData,
            additionalFields: [...formData.additionalFields, { projectName: "", salesStage: "", prices: "" }],
        });
    };
    const handleAdditionalFieldChange = (index, key, value) => {
        const updatedFields = [...formData.additionalFields];
        updatedFields[index][key] = value;
        setFormData({ ...formData, additionalFields: updatedFields });
    };
    const handleRecruitingFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            recruitingProject: {
                ...prev.recruitingProject,
                [name]: value
            }
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData); // Store form data to display JSON

        // Reset the form after submission
        setFormData({
            projectType: "",
            company: "",
            clientContact: "",
            partner: "",
            email: "",
            projectManager: "",
            notes: "",
            drugTest: "No",
            skills: [],
            additionalFields: [],
            recruitingProject: {
                projectName: "",
                whyIsThisPositionOpen: "",
                numberOfPositions: "",
                jobDescription: "",
                jobDescriptionAttachment: "",
                durationOfAssignment: "",
                typeOfPosition: ""
            }

        });
    }
    return (
        <div>
            <PageTitle title={'Add Project'} actionText='' />
            <div><Breadcrumbs items={breadcrumbItems} /></div>
            <div className='bg-white rounded-md border border-gray-300 p-8 max-w-4xl'>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className='flex gap-4'>
                        <InputField label={'Project Type'} name={'projectType'} value={formData.projectType} onChange={handleChange} />
                        <InputField label={'Company'} name={'company'} value={formData.company} onChange={handleChange} />
                    </div>
                    <div className='flex gap-4'>
                        <InputField label={'Client Contact'} name={'clientContact'} value={formData.clientContact} onChange={handleChange} />
                        <InputField label={'Partner'} name={'partner'} value={formData.partner} onChange={handleChange} />
                    </div>
                    <div className='flex gap-4'>
                        <InputField label={'Email'} name={'email'} value={formData.email} type='email' onChange={handleChange} />
                        <InputField label={'Project Manager'} name={'projectManager'} value={formData.projectManager} onChange={handleChange} />
                    </div>
                    <div>
                        <TextArea label={'Business Challenges/Notes'} name={'businessChallenges'} value={formData.businessChallenges} onChange={handleChange} />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Additional Fields</h3>
                        <div className='flex gap-4 items-end'>
                            <div>
                                {formData.additionalFields.map((field, index) => (
                                    <div key={index} className="flex gap-4 mb-2">

                                        <InputField
                                            type="text"
                                            label="Project Name"
                                            value={field.projectName}
                                            onChange={(e) => handleAdditionalFieldChange(index, "projectName", e.target.value)}

                                        />
                                        <InputField
                                            type="text"
                                            label='Sales Stage'
                                            value={field.salesStage}
                                            onChange={(e) => handleAdditionalFieldChange(index, "salesStage", e.target.value)}

                                        />
                                        <InputField
                                            type="text"
                                            value={field.prices}
                                            label="Price"
                                            onChange={(e) => handleAdditionalFieldChange(index, "prices", e.target.value)}

                                        />
                                    </div>
                                ))}
                            </div>
                            <button type="button" onClick={handleAddField} className="text-brand-green font-semibold px-4 py-2 rounded-lg mt-2  mb-2 w-20 cursor-pointer text-nowrap">
                                + Add More
                            </button>
                        </div>
                    </div>
                    <div className='flex gap-4 flex-col'>
                    <h3 className="text-lg font-semibold">Recruiting Project (Job Description)</h3>
                        <div className='flex gap-4'>
                            <InputField label={'Project Name'} name={'projectName'} value={formData.recruitingProject.projectName} onChange={handleRecruitingFieldChange} />
                            <InputField label={'Why is this Position Open?'} name={'whyIsThisPositionOpen'} value={formData.recruitingProject.whyIsThisPositionOpen} onChange={handleRecruitingFieldChange} />
                            <InputField label={'# of Positions'} name={'numberOfPositions'} value={formData.recruitingProject.numberOfPositions} onChange={handleRecruitingFieldChange} />
                        </div>
                        <div className='flex gap-4 items-end'>
                            <div className='w-[200px]'>
                                <InputField className="rounded-lg  w-auto " label={'Job Description'} type='file' name={'jobDescriptionAttachment'} value={formData.recruitingProject.jobDescriptionAttachment} onChange={handleRecruitingFieldChange} />
                            </div>
                            {formData.recruitingProject.jobDescriptionAttachment ? (
                                <div className='flex w-full mb-3' >Selected file: {formData.recruitingProject.jobDescriptionAttachment}</div>
                            ) : ""}

                        </div>
                        <div>
                            <TextArea label={''} name={'jobDescription'} value={formData.recruitingProject.jobDescription} onChange={handleRecruitingFieldChange} />
                        </div>
                        <div className='flex gap-4'>
                            <InputField label={'Duration of Assignment'} name={'durationOfAssignment'} value={formData.recruitingProject.durationOfAssignment} onChange={handleRecruitingFieldChange} />
                            <InputField label={'Type of Position'} name={'typeOfPosition'} value={formData.recruitingProject.typeOfPosition} onChange={handleRecruitingFieldChange} />
                        </div>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold">Candidate Skills Required</h3>
                    </div>
                    <div className='flex gap-4 justify-end'>
                        <Button variant="outline" size="md" className='mr-auto' >
                            Cancel
                        </Button>
                        <Button variant="outline" type="submit" size="md" >
                            Save as Draft
                        </Button>
                        <Button variant="primary" type="submit" size="md" >
                            Create
                        </Button>
                    </div>
                </form>
            </div>
            <div>
                {submittedData && (
                    <div className="mt-6 p-4 bg-gray-50/5 rounded-lg border border-gray-300 max-w-4xl">
                        <h3 className="text-lg font-semibold text-gray-600 mb-2">Form submited - Response (reference):</h3>
                        <pre className="bg-gray-400/10 border border-gray-400 opacity-60 p-4 rounded-lg shadow-sm text-sm">{JSON.stringify(submittedData, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AddProjectPage