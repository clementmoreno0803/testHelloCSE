import { createStore } from 'vuex'
import  axios from 'axios';
export default createStore({
  state: {
    // Store les data objets de chaque nouvel employé(e)s
    dataUser: []
  },
  getters: {
  },
  mutations: {
    //Récupère la data et la store dans le dataUser state
    send_post_request(state, data){
    state.dataUser.push(data);
    }
  },
  actions: {

    //Créer une requête POST pour envoyer les datas saisies dans le formulaire
    async sendEmployeeData({ commit }, data) {
        try {
        const response = await axios.post('https://hellocse-b9033-default-rtdb.firebaseio.com/employees.json', data);
        console.log(response.data)
        commit('send_post_request', response.data);
        } catch (error) {
          console.log(error);
        }
      },
  },
})
