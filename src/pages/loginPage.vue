<template>
    <div >
          <container>
            <Form  @submit.prevent="loginFunction" class="div"  >

              <label class="login">Login</label>
                <div >
                    <label > email:</label>
                 <input type="text" v-model="emailref" class="input" />
                 
               
                </div> 
                
                 <div>
                    <label > password:</label>
                 <input type="password" v-model="passwordref" class="input" />
                 
             
                </div>
              
                <p v-if="errorMessage"> incorrecr password or email</p>
                
                  
                  <button class="button1" > submit</button>

             </Form>
          </container>
          
    </div>
</template>


<script setup>
import { ref } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter()  

const emailref = ref("")
const passwordref = ref("")
const errorMessage = ref(false)



function loginFunction(){

    

    var getData = localStorage.getItem("data")
    var parseData = JSON.parse(getData)
    const {email: regEmail , password: regPassword }= parseData


    if(emailref.value === regEmail && passwordref.value === regPassword){
        router.push("/home")

    } else{
        errorMessage.value = true
       
    }

}



</script>

<style >
.div {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  justify-content: center;
  width: 800px;
}

label {
  display: block;
  font-family:Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
}

.input {
  width: 90%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 8px 6px 4px 2px #2f2d2f28;
  
}

.button1 {
  padding: 10px 20px;
  background-color: #ffffff;
  color: rgb(192, 28, 156);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
}

.button1:hover {
  background-color: #d229bf;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.168);
color: rgb(255, 255, 255);
}

p {
  color: red;
  font-style: italic;
}
.login{
  font-family:Arial, Helvetica, sans-serif;
  font-size: 25px;
  margin-bottom: 30px;
}

</style>