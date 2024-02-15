<template>
    <div class="div" >
          <container class="container">
            <Form @submit.prevent="onSubmit" autocomplete="on" >
              <label class="register"> Register</label>
                <div>
                    <label > User Id:</label>
                 <input type="text" v-model="userid" v-bind="useridAttrs" class="inputFiled"/>
               <pre>{{ errors.userid }}</pre>
                </div>  
                <div>
                    <label > email:</label>
                 <input type="email" v-model="email" v-bind="emailAtt" class="inputFiled"/>
                 <pre>{{ errors.email }}</pre>
                </div>
                
                <div>
                     <label > Contact No:</label>
                    <input type="text" v-model="contact" v-bind="contactAtt" class="inputFiled"/>
                    <pre>{{ errors.contact }}</pre>
                </div>
                
                <div>
                    <label >  Date of birth:</label>
                 <input type="date" v-model="dob" v-bind="dobAtt" class="inputFiled"/>
                 <pre>{{ errors.dob }}</pre>
                </div>
                <div>
                    <label > password:</label>
                 <input type="password" v-model="password" v-bind="passwordAtt" class="inputFiled"/>
                 <pre>{{ errors.password }}</pre>
                </div>
                <div>
                <label > confirm password:</label>
                   <input type="password" v-model="confirmpass" v-bind="confirmpassAtt" class="inputFiled"/>
                   <pre>{{ errors.confirmpass }}</pre>
                  </div>
                <div class="termsandcondiaton">
                    <input type="checkbox"  v-model="checkbox" v-bind="checkboxAtt" class="checkbox"/>
                  <label class="chceckbox"> Accept term and conditions</label>

                </div>
                  
                  
                  <button class="button"> Submit</button>

             </Form>
          </container>
          
    </div>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';

const router = useRouter()  

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    userid: yup.string().required(),
    email: yup.string().email('E-mail is not valid!').required('E-mail is required!'),
    password: yup.string().required(),
    confirmpass: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    dob: yup.date().required(),
    contact: yup.string().matches(phoneRegExp, "invalid number").min(10, "minimum 10 value").max(12,"maximum 12").required(),
    checkbox:yup.boolean().oneOf([true], "You must accept the terms and conditions")
}); 

const {errors, defineField, handleSubmit } = useForm({  validationSchema: schema, })

const [userid, useridAttrs] = defineField('userid');
const [email, emailAtt] = defineField('email' )
const [password, passwordAtt] = defineField('password');
const [confirmpass, confirmpassAtt] = defineField("confirmpass")
const [dob, dobAtt] = defineField('dob');
const [contact, contactAtt] = defineField('contact');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
const [checkbox, checkboxAtt] = defineField('checkbox');     



const onSubmit= handleSubmit((values)=>{
    localStorage.setItem('data', JSON.stringify(values))
    router.push("/homepage")
    
    alert("Form Submitted")
})
</script>

<style >

/* Style the container */
.container {
  width: 50%; /* Adjust width as needed */
  margin: 5px;
  color: #000000;
  background-color: #ffffff;
 
}

/* Style form elements */
Form {
  margin-bottom: 5px  ;
  /* background-image: url("https://www.shutterstock.com/image-vector/mini-hearts-wallpaper-260nw-1020922054.jpg"); */
    
}

label {
  display: block;
  margin-bottom: 5px;
}

.inputFiled{
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  box-shadow: 8px 6px 4px 2px #40404020;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #ffffff;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.168);
color: rgb(255, 255, 255);
}

pre {
  margin-bottom: 10px;
  color: rgb(255, 0, 47);
}
.div{
    margin: 100px;
    background-color: #ffffff53;
}

.termsandcondiaton{
 display: flex;
 flex-wrap: wrap;
 
 
}
.checkbox{
  margin: 5px;
}


.button{
    background-color: #ffffff;
    color: #be05cf;
}

.button:hover{
    background-color: #b72294;
    color: rgb(255, 255, 255);
}

.register{
  font-family:Arial, Helvetica, sans-serif;
  font-size: 25px;
  margin-bottom: 30px;
  color: #65036e;
}

</style>