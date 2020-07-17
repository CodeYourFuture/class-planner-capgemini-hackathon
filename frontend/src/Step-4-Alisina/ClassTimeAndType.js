import React,{useState} from 'react';

import ClassTable from "./tables/ClassTable";
import AddClassTypeForm from "./forms/AddClassTypeForm";
import EditClassTypeForm from "./forms/EditClassTypeForm";


const ClassTimeAndType =()=>{
      
       const [users, setUsers] = useState('');

       
       const addUser = (user) => {
         user.id = users.length + 1;
         setUsers([...users, user]);
       };

       
       const deleteUser = (id) => {
         setUsers(users.filter((user) => user.id !== id));
       };

       
       const [editing, setEditing] = useState(false);
       const initialFormState = { id: null, classType: "", startTime: "" ,finishTime:"" };
        
       const [currentUser, setCurrentUser] = useState(initialFormState);

       
       const editRow = (user) => {
         setEditing(true);
         setCurrentUser({
           id: user.id,
           classType: user.classType,
           startTime: user.startTime,
           finishTime:user.finishTime
          });
       };

       
       const updateUser = (id, updateUser) => {
         setEditing(false);
         setUsers(users.map((user) => (user.id === id ? updateUser : user)));
       };
return (
  <div className="container">
    <h1>Class Type form</h1>
    <div className="flex-row">
      <div className="flex-large">
        <h2>View classes</h2>
        <ClassTable users={users} deleteUser={deleteUser} editRow={editRow} />
      </div>
      <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit Class</h2>
            <EditClassTypeForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add ClassType</h2>
            <AddClassTypeForm  addUser={addUser} />
          </div>
        )}
      </div>
    </div>
  </div>
);
     }



export default ClassTimeAndType;