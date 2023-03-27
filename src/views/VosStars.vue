<template>
<h2>Vos stars</h2>
<div v-if="!firstStar" class="star-container">
  <div class="dashboard">
          <stars v-for="star in Stars"
          :key="star.id"
          :id="star.id"
          :image="star.img"
          :first-name="star.first"
          :last-name="star.last"
          :description="star.desc">
          </stars>
    <modal></modal>
  </div>
</div>
<h3 v-else>
  Renseignez votre première star..
</h3>
</template>

<script>
import Modal from '../components/ModalComponent.vue'
import Stars from '../components/StarInfos.vue'
export default {
  components: {
    Stars,
    Modal,
  },
  computed: {
    Stars() {
      return this.$store.state.stars
    },
    Form() {
      return this.$store.state.formData
    },
    firstStar() {
      return this.$store.getters.firstStar
    },
  },

  methods: {
    updateForm() {
      this.$store.commit('updateStar', this.id);
    },
    removeStar() {
      this.$store.dispatch('removeStar', this.star)
    },
  },
  mounted() {
    this.$store.dispatch('getStarData')
  }
}
</script>

<style scoped>
h2 {
  font-size: 2rem;
  font-family: 'Roboto';
  font-weight: 900;
}

h3 {
  font-size: 3rem;
  font-family: 'Roboto';
  font-weight: 900;
  opacity: 0.04;
}

ul {
  list-style: none;
  flex-direction: column;
}

.star-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard {
  display: flex;
  flex-direction: column;
}

.fullname {
  display: flex;
  flex-direction: column;
}

.tab-button {
  background: green;
}

@media (min-width:768px) {
  h3 {
    font-size: 5rem;
    font-family: 'Roboto';
    font-weight: 900;
    opacity: 0.04;
  }
}
</style>
