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
    }
  },
  actions: {

    // Créer une requête POST pour envoyer les datas saisies dans le formulaire
    async sendEmployeeData({ commit }, data) {
        try {
        const response = await axios.post('https://hellocse-b9033-default-rtdb.firebaseio.com/employees.json', data);
        commit('send_post_request', response.data);
        } catch (error) {
          console.log(error);
        }
      },

      // Créer une requête GET pour récupérer les employé(e)s de la base de donnée
    async getEmployeeData({commit}){
      try {
        const response = await axios.get(`https://hellocse-b9033-default-rtdb.firebaseio.com/employees.json`);
        console.log(response.data)
        commit("SET_USERS", response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  },
})
