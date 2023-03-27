<template>
<h2>Vos membres</h2>
<div v-if="!firstEmployee" class="member-container">
  <div class="dashboard">
    <!-- <dash-board @click="openEmployee"></dash-board> -->
    <div class="fullname">
      <!-- Tabs = Employee -->
      <!-- currentTab = emp[0] -->
      <h4  v-for="emp in Employee" :key="emp.id"
       >
      <!-- :class="['tab-button', { active: Emp[0] === emp }]"
       @click="currentTab = tab" -->
        {{emp.first}}
        {{emp.last}}
      </h4 >
    </div>
    <ul>
      <li>
        <!-- :is="currentTab" -->
      <employee  v-for="emp in Employee" :key="emp.id" :id="emp.id" :image="emp.img"
      :first-name="emp.first" :last-name="emp.last" :description="emp.desc">
      </employee>
      </li>
    </ul>
    <modal></modal>
  </div>
</div>
<h3 v-else>
  Renseignez votre premier employé(e)
</h3>
</template>

<script>
import Modal from '../components/ModalComponent.vue'
import Employee from '../components/EmployeesInfos.vue'
export default {
  components: {
    Employee,
    Modal,
  },
  props: ['id'],
  computed: {
    Employee() {
      return this.$store.state.dataUser
    },
    Form() {
      return this.$store.state.formData
    },
    firstEmployee() {
      return this.$store.getters.firstEmployee
    },
    activeElementId(){
      return this.$store.state.activeElementId
    },
    isActive() {
      return this.id === this.activeElementId;
    },
  },

  methods: {
    updateForm() {
      this.$store.commit('updateEmployee', this.id);
    },
    removeEmployee() {
      this.$store.dispatch('removeEmployee', this.employee)
    },
    setActiveElementId(){
      this.$store.commit('setActiveElementId')
    },
    toggleActive() {
      this.setActiveElementId(this.isActive ? null : this.id);
      console.log(this.id)
    },
  },
  mounted() {
    this.$store.dispatch('getEmployeeData')
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

/* li{
  display: none;
} */
.member-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard {
  display: flex;
}

.fullname{
  display: flex;
  flex-direction: column;
}
.tab-button{
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
