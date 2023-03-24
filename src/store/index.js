import { createStore } from 'vuex'
import  axios from 'axios';
// import employeeId from '../../utils/id'
export default createStore({
  state: {
    // Store les data objets de chaque nouvel employé(e)s
    dataUser: [],
    //Store les infos enployés depuis la requête poste
  },
  getters: {
    displayEmployees(state){
      return state.dataUser;
    }
  },
  mutations: {
    //Récupère la data et la store dans le dataUser state
    send_post_request(state, data){
    state.dataUser = data;
    },
    //Récupère la data depuis la requête get pour display les infos employé(e)s
    SET_USERS(state,data){
      state.dataUser = data;
    },
    // Mise à jour des données via le bouton update
     updateFormData(state, data) {
    state.formData = data;
  },
    // Suppression des données via le bouton suppression
    REMOVE_EMPLOYEE(state, employeeProfileId) {
    const updatedProfiles = state.dataUser.filter(profile => profile.id !== employeeProfileId)
    state.dataUser = updatedProfiles
  }
  },
  actions: {

    // Créer une requête POST pour envoyer les datas saisies dans le formulaire
    async sendEmployeeData({ commit }, data) {
        try {
        const response = await axios.post('https://hellocse-b9033-default-rtdb.firebaseio.com/employees.json', data);
        commit('send_post_request', response.data);
              //Alert pour prévenir que c'est ok
      alert('Formulaire bien envoyé')
        } catch (error) {
          console.log(error);
           alert('Formulaire non envoyé, veuillez retenter votre chance')
        }
      },

      // Créer une requête GET pour récupérer les employé(e)s de la base de donnée
    async getEmployeeData({commit}){
      try {
        await axios.get(`https://hellocse-b9033-default-rtdb.firebaseio.com/employees.json`)
       //Générer un Id pour pouvoir cibler l'update et la suppression d'un profil
        .then((response) => {
        const data = response.data
        const userProfiles = []
        for (let key in data) {
          userProfiles.push({
            id: key,
            ...data[key]
          })
        }
          commit("SET_USERS", userProfiles)
        });
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // Suppression d'un employée via le bouton de suppression selon l'iD
    async removeEmployee({ commit }, id) {
      console.log(id)
    await axios.delete(`https://hellocse-b9033-default-rtdb.firebaseio.com/employees/${id}.json`)
      .then(() => {
        commit('REMOVE_EMPLOYEE', id)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  },
})
