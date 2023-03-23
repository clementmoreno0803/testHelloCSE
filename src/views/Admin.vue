<template>
<div class="home">
  <img alt="Vue logo" src="../assets/logo.png">
</div>
<admin-form></admin-form>
</template>

<script>
import AdminForm from '@/components/AdminForm.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    AdminForm
  },
  methods: {
    sendData(data) {
      this.$store.dispatch('sendEmployeeData', data)
    }
  }
}
</script>
