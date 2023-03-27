<template>
<div class="star-list-container">
  <h3 @click="openStar(id)">{{firstName}} {{lastName}}</h3>
  <div class="star-list" v-show="isShow">
    <div class="profil">
      <img :src="image" class="thumbnail " alt="Thumbnail">
      <div class="update-profil">
        <i class="fa-solid fa-pencil" @click="toggleShowValue"></i>
        <i class="fa-solid fa-trash" @click="removeStar"></i>
        <h4>{{firstName}} {{lastName}}</h4>
      </div>
    </div>
    <span>{{description}}</span>
  </div>
</div>
<modal :show="showValue" @close-modal="toggleShowValue" :id="id"></modal>
</template>

<script>
import Modal from '../components/ModalComponent.vue'
export default {
  components: {
    Modal
  },
  data() {
    return {
      showValue: false,
    }
  },
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
    // Montre le contenu de chaque employée
    isShow() {
      return this.$store.getters.isOpen(this.id)
    }
  },
  methods: {
    // Récupère l'iD et le dispatch pour l'update du profil
    updateForm() {
      this.$store.dispatch('updateFormData', this.id);
    },
    // Récupération de l'iD et dispatch de l'action pour supprimer la star en base de donnée
    removeStar() {
      this.$store.dispatch('removeStar', this.id)
    },
    //Permet de toggle la modal
    toggleShowValue() {
      this.showValue = !this.showValue;
    },
    openStar(id) {
      this.$store.commit('setOpenStarID', this.$store.getters.isOpen(id) ? null : id)
    }
  },
}
</script>

<style scoped>
h3 {
  background: #208fbd;
  color: white;
  margin: 0;
  width: 280px;
  border: 1px solid white;
  padding: 10px;
}

.star-list-container {
  display: flex;
  flex-direction: column;
}

.thumbnail {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.star-list {
  display: block;
  border: 2px solid rgb(32, 143, 189);
  padding: 20px;
  word-break: break-all;
  max-width: 258px;
}

.profil {
  display: flex;
  flex-direction: column;
  align-items: center;
}

i {
  font-size: 1.35rem;
  width: 30%;
  cursor: pointer;
}

.fa-pencil {
  color: rgb(132, 132, 228)
}

.fa-trash {
  color: rgb(230, 138, 138);
}

@media (min-width: 768px) {
  .star-list-container {
    display: flex;
    flex-direction: row;
  }
}
</style>
