<template>
    <div class="container">
        <div class="logo">
            <h1>Welcome user</h1>
        </div>
   
        <div >
            <div class="signout">
               <router-link to="/login" class="login" >SignOut</router-link>
            </div>
             
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
 .container{
    width:100vw;
    height:70px;
    background-color: rgb(109, 32, 94);
    display: flex;
    align-items: center;
    justify-content: space-between;
 }
 h1{
    padding-left:50px;
    font-size:28px;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 2px;
    font-weight:bolder;
    color:rgb(255, 255, 255)
 }
 .links-sec{
    display: flex;
    align-items: center;
    gap:40px;
    margin-right:70px;
 }
 li{
    list-style: none;
    color:rgb(239, 164, 220);
    font-weight:bold;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 1px;
 }
 .signout{
    display: flex;
    gap:20px;
    margin-right:30px;
    
 }

 .login{
    color: aliceblue;
    text-decoration: none;
 }
 
</style>