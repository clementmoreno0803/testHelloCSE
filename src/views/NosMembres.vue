<template>
<h2>Nos membres</h2>
<ul>
  <employee v-for="emp in Employee"
  :key="emp.id"
  :id="emp.id"
  :first-name="emp.first"
  :last-name="emp.last"
  :description="emp.desc">
  </employee>
</ul>
<modal></modal>
</template>

<script>

import {
  mapActions,
  // mapGetters,
  mapState,
} from 'vuex';
import Modal from '../components/ModalComponent.vue'
import Employee from '../components/EmployeesInfos.vue'
export default {
  components: {
    Employee,
    Modal
  },
  computed:{
    Employee(){
      return this.$store.state.dataUser
    },
    ...mapState({
      form: state => state.formData
    })

  },
  // computed: {
  //   ...mapGetters(['displayEmployees']),
  //   ...mapState(['dataUser'])
  // },
  methods: {
    ...mapActions(['getEmployeeData',]),

    updateForm() {
      this.$store.commit('updateFormData', this.form);
    },
     removeEmployee() {
      console.log(this.employee)
     this.$store.dispatch('removeEmployee',this.employee)
    }
  },
  mounted(){
    this.$store.dispatch('getEmployeeData')
  }
}
</script>

<style>

</style>
