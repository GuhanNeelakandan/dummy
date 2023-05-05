import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import swal from "sweetalert";
import userContext from "../AppContext";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterslice";

function Table() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch =useDispatch()
  const user = useContext(userContext)
  const [studentList, setStudentList] = useState([]);
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState("");
  const [editDetails, setEditDetails] = useState({});

  const fetchStudentList = async () => {
    const res = await axios.get(
      "http://localhost:8080/get/all/student",{
        headers:{
          Authorization:localStorage.getItem('token')
        }
      }
    );

    console.log(res);
    setStudentList(res.data);
  };

  useEffect(() => {
    fetchStudentList();
  }, []);

  const modelOpen = (id) => {
    setModal(!modal);
    setEditId(id);
  };

  const closeToggle = () => {
    setModal(!modal);
  };

  const handleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Patient Details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://63dcfc67df83d549ce97ef20.mockapi.io/student/${id}`)
          .then(() => {
            fetchStudentList();
          });
        toast.success("deleted SuccessFully");
      } else {
        swal("Your  file is safe!");
      }
    });
  };

  const fetchEditDetails = async () => {
    const res = await axios.get(
      `https://63dcfc67df83d549ce97ef20.mockapi.io/student/${editId}`
    );
    setEditDetails(res.data);
  };

  useEffect(() => {
    if (editId !== "") {
      fetchEditDetails();
    }
  }, [editId]);

 
  const handleChange =(e)=>{
    // console.log(e.target.id)
    // console.log(e.target.id,e.target.value)
    setEditDetails((prev)=>({...prev,[e.target.id]:e.target.value}))
}

const handleEditUpdate=async()=>{
    const res =await axios.put(`https://63dcfc67df83d549ce97ef20.mockapi.io/student/${editId}`,editDetails)
    if(res.status===200){
        closeToggle()
        toast.success('Updated')
        fetchStudentList()
    }
    
}
  return (
    <div class="container-fluid px-4">
      <h1 class="mt-4">Tables {user}</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item">
          <a href="index.html">Dashboard</a>
        </li>
        <li class="breadcrumb-item active">Tables</li>
      </ol>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        {count}
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
      <div class="card mb-4">
        <div class="card-body">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the
          <a target="_blank" href="https://datatables.net/">
            official DataTables documentation
          </a>
          .
        </div>
      </div>
      <div class="card mb-4">
        <div className=" card-header d-flex justify-content-between">
          <div class="">
            <i class="fas fa-table me-1"></i>
            DataTable Example
          </div>
          <div>
            <Link to={"/create/student"}>
              <button className="btn btn-sm btn-primary">
                +Create Student
              </button>
            </Link>
          </div>
        </div>

        <div class="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>FirstName</th>
                <th>Lastname</th>
                <th>Roll</th>
                <th>Place</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {studentList.map((student, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.roll}</td>
                    <td>{student.place}</td>
                    <td>
                      <Link to={`/view/student/${student.id}`}>
                        <i
                          class="fa fa-eye text-primary m-1"
                          style={{ cursor: "pointer" }}
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <i
                        class="fa fa-pencil-square-o text-warning m-1"
                        style={{ cursor: "pointer" }}
                        aria-hidden="true"
                        onClick={() => modelOpen(student.id)}
                      ></i>
                      <i
                        class="fa fa-trash-o text-danger m-1"
                        style={{ cursor: "pointer" }}
                        aria-hidden="true"
                        onClick={() => handleDelete(student.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
      <Modal isOpen={modal} toggle={closeToggle} centered size="lg">
        <ModalHeader>Edit Student Detail</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row  mt-4">
              <div className="col-6">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    value={editDetails.name}
                    onChange={(e)=>handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="age"
                    aria-describedby="emailHelp"
                    placeholder="Age"
                    value={editDetails.age}
                    onChange={(e)=>handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="roll"
                    aria-describedby="emailHelp"
                    placeholder="Roll"
                    value={editDetails.roll}
                    onChange={(e)=>handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="place"
                    aria-describedby="emailHelp"
                    placeholder="Place"
                    value={editDetails.place}
                    onChange={(e)=>handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <button className=" btn btn-sm btn-primary" onClick={handleEditUpdate}>Update</button>
          </div>
        </ModalBody>
      </Modal>
      
    </div>
  );
}

export default Table;
