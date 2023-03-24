<template>
<h2>Nos membres</h2>
<ul>
  <employee v-for="emp in Employee"
  :key="emp.id"
  :first-name="emp.first"
  :last-name="emp.last"
  :description="emp.desc">
  </employee>
</ul>
</template>

<script>
import {
  mapActions,
  // mapGetters,
  // mapState,
} from 'vuex';
import Employee from '../components/EmployeesInfos.vue'
export default {
  components: {
    Employee
  },
  computed:{
    Employee(){
      return this.$store.state.dataUser
    }

  },
  // computed: {
  //   ...mapGetters(['displayEmployees']),
  //   ...mapState(['dataUser'])
  // },
  methods: {
    ...mapActions(['getEmployeeData']),
  },
  mounted(){
    this.$store.dispatch('getEmployeeData')
  }
}
</script>

<style>

</style>
