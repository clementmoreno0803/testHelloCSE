<template>
<div class="form-container">
  <form :id='id' @submit.prevent="submitData">
    <label for="thumbnail">Ajoutez une photo</label>
    <input type="file" name="Thumnail" id="thumbnail" @change="accessImage($event)">
    <label for="lastName">Ajoutez un nom</label>
    <input type="text" v-model='lastName' id="lastName">
    <label for="firstName">Ajoutez un prénom</label>
    <input type="text" v-model='firstName' id="firstName">
    <label for="description">Ajoutez une description</label>
    <textarea id="description" rows="10" v-model="description"></textarea>
    <label for="submit">Enregistrer le nouvel employé</label>
    <input type="submit" id="submit">

  </form>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex';
export default {
  props: {
    id: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      image: null,
      lastName: '',
      firstName: '',
      description: ''
    }
  },
  methods: {
    ...mapActions(['sendEmployeeData', 'updateEmployee']),
    //Récupère les data, regroupe en objet pour dispatch l'action dans le store
    submitData() {
      const getData = {
        id: this.id,
        img: this.image,
        last: this.lastName,
        first: this.firstName,
        desc: this.description
      }
      // Permet de lancer une action ou l'autre selon l'état de l'objet
      if (getData.id) {
        this.$store.dispatch('updateEmployee', getData)

      } else {
        this.$store.dispatch('sendEmployeeData', getData)
      }

      // Remettre les inputs à neuf après la saisie des éléments
      this.image = null
      this.lastName = ''
      this.firstName = ''
      this.description = ''
    },
    // Permet de récupérer le nom de l'image via la fonction
    // accessImage(event) {
    //   const file = event.target.files[0];
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     this.setFile({
    //       name: file.name,
    //       content: reader.result,
    //     });
    //   };
    //   reader.readAsDataURL(file);
    // },

  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.form-container {
  width: 50%;
  border: 1px solid black;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  background: white;
}

form {
  display: flex;
  flex-direction: column;
}
</style>
