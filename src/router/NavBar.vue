<template>
    <div class="Nav-conatiner">
  
      <router-link to="/" class="navlinks"> Register</router-link>
    <router-link to="/login" class="navlinks">Login </router-link>
    
  
  
  
    </div>
    <router-view></router-view>
  </template>
  
  <script setup>
  
  
  
  </script>
  
  <style>
  /* Resetting default margin and padding */

.Nav-conatiner {
  margin: 0;
  padding: 0;
  height: 30px;
}

/* Styling the navbar container */
.Nav-conatiner {
  background-color: #5d073e95; /* Background color */
  padding: 10px; /* Padding */
}

.navlinks{
    color: rgb(255, 255, 255);
    text-decoration: none;
    margin: 50px;
    margin-bottom: 0%;
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}

.navlinks:hover{
    color: rgb(151, 32, 90);
    box-shadow: 2px 2px 2px 2px rgba(255, 255, 255, 0.291);
    background-color: rgba(255, 255, 255, 0.611);
    
}
  
  
  </style>