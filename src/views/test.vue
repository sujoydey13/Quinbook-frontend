<template>
<div>
    <input @change="uploadImage" type="file" name="photo">
    <img :src="imageSrc" class="image">
</div>
</template>

<script>
export default {
    name: 'test',
    data (){
    },
    methods: {
    uploadImage: function() {    
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onloadend = function(e) {
        console.log(e.target.result)
        }
      reader.readAsDataURL(file)      
    }
  }
}

</script>

<style>

</style>