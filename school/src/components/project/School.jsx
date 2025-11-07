import { use, useState} from "react";
export default function AddPage(){
    const[TeacherId,setTeacherId]=useState('');
    const[StudentId,setStudentId]=useState('');
    const[StaffId,setStaffId]=useState('');
    const[FullName1,setFullName1]=useState('');
    const[FullName2,setFullName2]=useState('');
    const[FullName3,setFullName3]=useState('');
    const[Gender,setGender]=useState('');
    const[NIC1,setNIC1]=useState('');
    const[NIC2,setNIC2]=useState('');
    const[NIC3,setNIC3]=useState('');
    const[ContactNumber1,setContactNumber1]=useState('');
    const[ContactNumber2,setContactNumber2]=useState('');
    const[Email1,setEmail1]=useState('');
    const[Email2,setEmail2]=useState('');
    const[Email3,setEmail3]=useState('');
    const[Age,setAge]=useState('');
    const[Grade,setGrade]=useState('');

    const[add1,setAdd1]=useState("")
    let handelClick1=(event)=>{
        event.preventDefault();
        const data={
            teacher:TeacherId,
            student:StudentId,
            staff:StaffId,
            name1:FullName1,
            name2:FullName2,
            name3:FullName3,
            gender:Gender,
            nic1:NIC1,
            nic2:NIC2,
            nic3:NIC3,
            number1:ContactNumber1,
            number2:ContactNumber2,
            email1:Email1,
            email2:Email2,
            email3:Email3,
            age:Age,
            grade:Grade
        }
        setAdd1(add1);
        if(!data){
            alert("Fill All the details")
        }
        else{
            alert("The details are filled")
        }

    }
 
    return(
        <>
        <h3>Teacher's Detais</h3><br />
       <form>
            <label>Teacher Id:</label>
            <input type="number" value={TeacherId} onChange={(e)=>setTeacherId(e.target.value)}/><br /><br />
            <label> FullName:</label>
            <input type="text" value={FullName1} onChange={(e)=>setFullName1(e.target.value)}/><br /><br />
            <label>Male</label>
            <input type="radio" name="Gender" value={"Male"} onChange={(e)=>setGender(e.target.value)}/>
            <label>Female</label>
            <input type="radio" name="Gender" value={"Female"} onChange={(e)=>setGender(e.target.value)} /><br /><br />
            <label>NIC:</label>
            <input type="text" value={NIC1} onChange={(e)=>setNIC1(e.target.value)}/><br /><br />
            <label>Contact Number:</label>
            <input type="number" value={ContactNumber1} onChange={(e)=>setContactNumber1(e.target.value)}/><br /><br />
            <label>Eamil:</label>
            <input type="text" value={Email1} onChange={(e)=>setEmail1(e.target.value)}/><br /><br />
       </form>

        <h3>Student's Details</h3>
        <form>
             <label>Student Id:</label>
             <input type="number" value={StudentId} onChange={(e)=>setStudentId(e.target.value)}/><br /><br />
             <label> FullName:</label>
             <input type="text" value={FullName2} onChange={(e)=>setFullName2(e.target.value)}/><br /><br />
             <label>Male</label>
             <input type="radio"name="Gender" value={"Male"} onChange={(e)=>setGender(e.target.value)}/>
             <label>Female</label>
             <input type="radio" name="Gender" value={"Female"} onChange={(e)=>setGender(e.target.value)}/><br /><br />
             <label>Age:</label>
             <input type="number" value={Age} onChange={(e)=>setAge(e.target.value)}/><br /><br />
             <label>NIC:</label>
             <input type="number" value={NIC2} onChange={(e)=>setNIC2(e.target.value)}/><br /><br />
             <label>Email:</label>
             <input type="text" value={Email2} onChange={(e)=>setEmail2(e.target.value)}/><br /><br />
             <label>Grade:</label>
             <input type="text"value={Grade} onChange={(e)=>setGrade(e.target.value)}/><br /><br />
        </form>

        <h3>Staff's Details</h3>
       <form>
           <label>Staff Id:</label>
           <input type="number" value={StaffId} onChange={(e)=>setStaffId(e.target.value)}/><br /><br />
           <label> FullName:</label>
           <input type="text" value={FullName3} onChange={(e)=>setFullName3(e.target.value)}/><br /><br />
           <label>Male</label>
           <input type="radio"name="Gender" value={"Male"} onChange={(e)=>setGender(e.target.value)}/>
           <label>Female</label>
           <input type="radio"name="Gender" value={"Female"} onChange={(e)=>setGender(e.target.value)} /><br /><br />
           <label>NIC:</label>
           <input type="number" value={NIC3} onChange={(e)=>setNIC3(e.target.value)}/><br /><br />
           <label>Contact Number:</label>
           <input type="number" value={ContactNumber2} onChange={(e)=>setContactNumber2(e.target.value)}/><br /><br />
           <label>Eamil:</label>
           <input type="text"value={Email3} onChange={(e)=>setEmail3(e.target.value)}/><br /><br />
           <button className="btn btn-info btn-item" type="submit" onClick={event=>handelClick1(event)}>Added1</button>

       </form>

       
      
        
        
        </>
    )
}