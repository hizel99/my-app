import React from 'react'
import form from 'react-hook-form '
const AddUserForm = () => {
    
    return ( 
        <><h1>formulario</h1><form>
            <label>Name</label>
            <input type="text" name="name" value="" />
            <label>Username</label>
            <input type="text" name="username" value="" />
            <button className='btn btn-primary'>Add new user</button>
        </form></>        
     );
}
 
export default AddUserForm;