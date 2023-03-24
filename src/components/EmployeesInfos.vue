<template>
<li>
  <img :src="image" class="thumbnail " alt="Thumbnail">
  <h3>{{firstName}} {{lastName}}</h3>
  <span>{{description}}</span>
  <button>Update profil</button>
  <button>Supprimer profil</button>
</li>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      require: true
    },
    firstName: {
      type: String,
      require: true
    },
    lastName: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    emp:{
      type: Object,
      require: true
    }
  },
  computed:{
    imageUrl() {
      console.log(URL.createObjectURL())
      return URL.createObjectURL();
    },
  }
}
</script>

<style scoped>
.thumbnail{
  width: 50px;
  height: 50px;
}
</style>
