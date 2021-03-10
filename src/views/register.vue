<template>
  <div>
      <center>
      <div class="register-container">
          <div class="heading">
              <h3>Sign Up</h3>
          </div>
          <div class="content">
              <input type="text" v-model="firstName" placeholder="First Name" name="firstname" class="input-css">
              <input type="text" v-model="lastName" placeholder="Last Name" name="lastname" class="input-css">
              <label for="date" class="label-css">D.O.B.</label>
              <input type="date" v-model="dob" name="date" class="label-input-css">
              <input type="email" v-model="email" placeholder="Email" name="email" class="input-css">
              <input type="password" v-model="password" placeholder="Password" name="password" class="input-css">
              <input type="radio" id="male" name="gender" value="male">
              <label for="male">Male</label>
              <input type="radio" id="female" name="gender" value="female">
              <label for="female">Female</label>
              <input type="radio" id="other" name="gender" value="other">
              <label for="other">Prefer not to say</label>
              <button class="btn" >Sign Up</button>
          </div>
      </div>
      </center>
  </div>
</template>

<script>
export default {
    name: 'register'

}
</script>

<style>
.register-container{
    margin-top: 150px;
    width: 600px;
    border: 2px solid #3AED91;
    border-radius: 10px;
    box-shadow: #020202;
}

.input-css{
    display: block;
    padding: 10px;
    width: 300px;
    min-width: 300px;
    margin-bottom: 30px;
    outline: none;
    border-radius: 5px;
    border: 0px;
    border-bottom: 2px solid #020202;
}

.btn{
    display: block;
    border: 2px solid #020202;
    border-radius: 5px;
    background-color: #3AED91;
    margin-top: 20px;
}

</style>