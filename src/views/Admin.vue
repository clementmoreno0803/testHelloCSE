<template>
<div class="admin-container">
  <h2>Commençons par</h2>
  <h3>Renseigner vos stars</h3>
  <admin-form></admin-form>
</div>
</template>

<script>
import AdminForm from '@/components/AdminForm.vue'

export default {
  name: 'HomeView',
  components: {
    AdminForm
  },
}
</script>

<style scoped>
h2 {
  font-size: 1.125rem;
  font-family: 'roboto';
  font-weight: 900;
  text-align: left;
  margin: 0;
}

h3 {
  font-size: 1rem;
  font-family: 'roboto';
  font-weight: 700;
  text-align: left;
  margin: 0;
}

.admin-container{
    width: 80%;
    margin: 0 auto;
}
@media (min-width:768px){
  .admin-container{
    width: 60%;
    margin: 0 auto;
}
}
</style>
