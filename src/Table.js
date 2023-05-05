import React from 'react'

function Table(props) {

    const { Student } = props;
    const Template = Student.map((anObj, i) => {
        return (
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{anObj.student_name}</td>
                <td>{anObj.Reg_no}</td>
                <td>{anObj.Tamil}</td>
                <td>{anObj.English}</td>
                <td>{anObj.Maths}</td>
                <td>{anObj.Physics}</td>
                <td>{anObj.Chemistry}</td>
                <td>{anObj.Python}</td>
                <td>{anObj.cgpa}</td>
            </tr>
        );
    })

    return (
        <>
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

