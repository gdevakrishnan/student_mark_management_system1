import React from 'react'

function Table(props) {

    const { Student, handleEdit, handleDelete } = props;
    const Template = Student.map((anObj, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{anObj.student_name}</td>
                <td>{anObj.Reg_no}</td>
                <td>{anObj.Tamil}</td>
                <td>{anObj.English}</td>
                <td>{anObj.Maths}</td>
                <td>{anObj.Physics}</td>
                <td>{anObj.Chemistry}</td>
                <td>{anObj.Python}</td>
                <td>{anObj.cgpa}</td>
                <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
            </tr>
        );
    })

    return (
        <>
            <h1 className='title'>Student Details</h1>
            <table style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <td>s.no</td>
                        <td>Name</td>
                        <td>Reg No</td>
                        <td>Tamil</td>
                        <td>English</td>
                        <td>Maths</td>
                        <td>Physics</td>
                        <td>Chemistry</td>
                        <td>Python</td>
                        <td>CGPA</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {Template}
                </tbody>
            </table>
        </>
    )
}

export default Table;

