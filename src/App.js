import React, { useState } from 'react'
import Table from './Table';

function App() {
  const [student_name, setstudent_name] = useState("");
  const [Reg_no, setReg_no] = useState("");
  const [Tamil, setTamil] = useState("");
  const [English, setEnglish] = useState("");
  const [Maths, setMaths] = useState("");
  const [Physics, setPhysics] = useState("");
  const [Chemistry, setChemistry] = useState("");
  const [Python, setPython] = useState("");
  const [Student, setStudent] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student_name.trim() !== "" || Reg_no.trim() !== "") {
      const cgpa = Number(Tamil) + Number(English) + Number(Maths) + Number(Physics) + Number(Chemistry) + Number(Python);
      setStudent([...Student, { student_name: student_name, Reg_no: Reg_no, Tamil: Tamil, English: English, Maths: Maths, Physics: Physics, Chemistry: Chemistry, Python: Python, cgpa: cgpa}])

      setstudent_name("");
      setReg_no("");
      setTamil("");
      setEnglish("");
      setMaths("");
      setPhysics("");
      setChemistry("");
      setPython("");

    } else {
      alert("Complete all the fields");
    }
  }
  return (
    <>
      <form>
        <div className='form_group'>
          <label htmlFor='student_name'>Name: </label>
          <input
            type='text'
            id='student_name'
            name='student_name'
            onChange={(e) => setstudent_name(e.target.value)}
            value={student_name}
          />
        </div>

        <div className='form_group'>
          <label htmlFor='reg_no'>Reg No: </label>
          <input
            type='text'
            id='reg_no'
            name='reg_no'
            onChange={(e) => setReg_no(e.target.value)}
            value={Reg_no}
          />
        </div>

        <div className='form_group'>
          <label htmlFor='tamil'>tamil: </label>
          <input
            type='text'
            id='tamil'
            name='tamil'
            onChange={(e) => setTamil(e.target.value)}
            value={Tamil}
          />
        </div>

        <div className='form_group'>
          <label htmlFor='english'>english: </label>
          <input
            type='text'
            id='english'
            name='english'
            onChange={(e) => setEnglish(e.target.value)}
            value={English}
          />
        </div>

        <div className='form_group'>
          <label htmlFor='maths'>maths: </label>
          <input
            type='text'
            id='maths'
            name='maths'
            onChange={(e) => setMaths(e.target.value)}
            value={Maths}
          />
        </div>

        <div className='form_group'>
          <label htmlFor='physics'>physics: </label>
          <input
            type='text'
            id='physics'
            name='physics'
            onChange={(e) => setPhysics(e.target.value)}
            value={Physics}
          />
        </div>

        <div className='form_group'>
          <label htmlFor='chemistry'>chemistry: </label>
          <input
            type='text'
            name='chemistry'
            onChange={(e) => setChemistry(e.target.value)}
            value={Chemistry}
          />
        </div>

        <div className='form_group'>
          <label htmlFor='python'>python: </label>
          <input
            type='text'
            id='python'
            name='python'
            onChange={(e) => setPython(e.target.value)}
            value={Python}
          />
        </div>

        <input
          type='submit'
          value={"Submit"}
          onClick={(e) => handleSubmit(e)}
        />
      </form>
      <Table Student={Student}/>
    </>
  )
}

export default App