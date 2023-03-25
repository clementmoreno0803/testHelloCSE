<template>
<div v-show="show" >
  <div class="backdrop" @click="closeModal" :id="id">
    <div class="modal-container" @click.stop>
    <admin-form ></admin-form>
    </div>
  </div>
</div>
</template>

<script>
import AdminForm from '../components/AdminForm.vue'
export default {
  components: {
    AdminForm
  },
  props: ['id','show'],
  data() {
    return {
      isVisible: this.visible
    }
  },
  methods:{
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
