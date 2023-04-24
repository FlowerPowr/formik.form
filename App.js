
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form:', values)
      //console.log("Successful Login!");
    },

    validate: values =>{
      let errors = {};
      if(!values.name) errors.name = 'Field required';
      if(!values.email) errors.email = 'Field required';
      if(!values.password) errors.password = 'Field required';
      if(!values.email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) 
      errors.email = 'Username should be an email';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}> 
       
        <div>Email</div>
        <input name="email" type="text" onChange={formik.handleChange} 
        value={formik.values.email} />

        {formik.errors.email ? <div style={{color:'red'}}>
          {formik.errors.email} </div>: null} 

        <div>Password</div>
        <input name="password" type="text" onChange={formik.handleChange} 
        value={formik.values.password}/>

        {formik.errors.password ? <div style={{color:'red'}}>
          {formik.errors.password} </div>: null} 


        <button type="submit" onClick={() => alert("Log in Sucessful!")} >Submit</button>
      </form>
    </div>
  );
}

export default App;
