<template>

    <div class="container">
    <div class="userprofile"> <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar"></div><br>
    <div class="user">
      <div class="userdetails"> </div><br>
      <div class="userfeed-container">
        <post/>
      </div>

    </div>
    </div>
</template>

<script scoped>
import post from '../components/post.vue'
export default {
  components: {
    post: post
  },
    name: 'profile'

}
</script>

<style>
.container{
  height: 700px;
}
.body{
      width: 0;
      height: 0;
      margin:0px;
}
.userprofile{
  width: 100%;
  height: 250px;
  border: grey 2px solid;
  background-image: url("https://via.placeholder.com/600x250");

  
}
.user{
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
}
.userdetails{
  width: 30%;
  float: left;
  height: 450px;
  border: grey 2px solid;

}
.avatar {
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  top: 30px;
  margin-left: 30px;
}
.username{
  margin-top: 0px;
  margin-bottom: 5px;
  display: inline-block;
  font-size: 10px;
}
.userfeed-container{
  width: 60%;
  float: right;
  height: 450px;
  border: grey 2px solid;
  display: flex;
}

</style>
