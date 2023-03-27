<template>
<div class="employee-list">
  <div class="profil">
    <img :src="image" class="thumbnail " alt="Thumbnail">
    <div class="update-profil">
      <i class="fa-solid fa-pencil" @click="toggleShowValue"></i>
      <i class="fa-solid fa-trash" @click="removeEmployee"></i>
      <h3>{{firstName}} {{lastName}}</h3>
    </div>
  </div>
  <span>{{description}}</span>
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
  methods: {
    // Récupère l'iD et le dispatch pour l'update du profil
    updateForm() {
      this.$store.dispatch('updateFormData', this.id);
    },
    // Récupération de l'iD et dispatch de l'action pour supprimer l'employé(e) en base de donnée
    removeEmployee() {
      this.$store.dispatch('removeEmployee', this.id)
    },
    //Permet de toggle la modal
    toggleShowValue() {
      this.showValue = !this.showValue;
    },
  },
}
</script>

<style scoped>
.thumbnail {
  width: 100px;
  height: auto;

}

.employee-list {
  display: block;
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
</style>
