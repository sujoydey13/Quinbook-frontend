<template>
  <div class="userfeed">
        <div class="image">
        <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="" class="userfeed-pic">
        </div>
        <div class="feed-content">
            <div class="feed-header">Username</div>
            <div class="feed-main">Content of the feed</div>
            <div class="feed-footer"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.feed-content{
    display: block;
    padding: 5px;
}
.image{
    flex-direction: column;
}
.like-pic{
  float: left;
  width: 10px;
  height: 10px;
}
.feed-footer{
  position: relative;
  bottom: 2px;
  left: 2px
}

.userfeed{
  display: flex;
  border: 1px solid black;
  margin: 5px;
  width: 100%;
  height: 100px;
}
.userfeed-pic{
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 50%;
  float: left;
}
</style>
