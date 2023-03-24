<template>
<li>
  <img :src="image" class="thumbnail " alt="Thumbnail">
  <h3>{{firstName}} {{lastName}}</h3>
  <span>{{description}}</span>
  <button @click="updateForm">Update profil</button>
  <button @click="removeEmployee">Supprimer profil</button>
</li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true
    },
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
    emp: {
      type: Object,
      require: true
    }
  },
  computed: {
    //Récupérer le nom du fichier et créer un url avec
    imageUrl() {
      console.log(URL.createObjectURL())
      return URL.createObjectURL();
    },
  },
  methods: {
    updateForm() {
      this.$store.commit('updateFormData', this.form);
    },
    // Récupération de l'iD et dispatch de l'action pour supprimer l'employé(e) en base de donnée
    removeEmployee() {
     this.$store.dispatch('removeEmployee',this.id)
    }
  }
}
</script>

<style scoped>
.thumbnail {
  width: 50px;
  height: 50px;
}
</style>
