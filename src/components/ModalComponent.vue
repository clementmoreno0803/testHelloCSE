<template>
<div v-show="show" >
  <div class="backdrop" @click="closeModal" >
    <div class="modal-container" @click.stop>
    <admin-form :id="id"></admin-form>
    </div>
  </div>
</div>
</template>

<script>
import AdminForm from './AdminForm.vue'
export default {
  components: {
    AdminForm
  },
  props:{
    id:{
      type: String,
      require: true
    },
    show:{
      type: Boolean,
      require: true
    },
  },
  data() {
    return {
      isVisible: this.visible
    }
  },
  methods:{
    // Envoi l'info au parent de la fermeture de la modal
    closeModal() {
    this.$emit("close-modal");
    }
  }
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-container{
  width: 60%;
}
</style>
