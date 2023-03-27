<template>
<div class="form-container">
  <form :id='id' @closeModal='closeModal' @submit.prevent="submitData">
    <label for="thumbnail">Ajoutez une photo</label>
    <input type="file" name="Thumnail" id="thumbnail" @change="handleFileInputChange">
    <label for="lastName">Ajoutez un nom</label>
    <input type="text" v-model='lastName' id="lastName">
    <label for="firstName">Ajoutez un prénom</label>
    <input type="text" v-model='firstName' id="firstName">
    <label for="description">Ajoutez une description</label>
    <textarea id="description" rows="10" v-model="description"></textarea>
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
    },
  },
  data() {
    return {
      image: '',
      lastName: '',
      firstName: '',
      description: ''
    }
  },
  methods: {
    ...mapActions(['sendStarData', 'updateStar']),

    // Récupère le fichier télécharger, le transforme en url et le rajoute dans les data
    handleFileInputChange(event) {
      const file = event.target.files[0];
      console.log(file)
      const reader = new FileReader();
      console.log(reader)
      reader.onload = () => {
        const url = URL.createObjectURL(file);
        return this.image = url
      }
        reader.readAsDataURL(file);

    },

        //Récupère les data, regroupe en objet pour dispatch l'action dans le store
    submitData() {
      const getData = {
        id: this.id,
        img: this.image,
        last: this.lastName,
        first: this.firstName,
        desc: this.description
      }

      console.log(getData)
      // Permet de lancer une action ou l'autre selon l'état de l'objet
      if (getData.id) {
        this.$store.dispatch('updateStar', getData)

      } else {
        this.$store.dispatch('sendStarData', getData)
      }

      // Remettre les inputs à neuf après la saisie des éléments
      this.image = ''
      this.lastName = ''
      this.firstName = ''
      this.description = ''
    },
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
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

form {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  border: 1px solid #cccc;
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(4px);
}

label {
  font-size: 1rem;
  font-family: 'Montserrat';
  text-align: left;
  color: #d9d9d9;
  font-weight: 400;
}

input,
textarea {
  border: 1px solid #cccc;
  border-radius: 6px;
  margin-bottom: 10px;
  background: transparent;
}
</style>
