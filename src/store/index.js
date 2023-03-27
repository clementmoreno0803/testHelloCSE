import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    // Store les data objets de chaque nouvel employé(e)s
    dataUser: [],
    activeElementId: null,
  },
  getters: {
    //display l'état du state dans la page Nos membres
    displayEmployees(state) {
      return state.dataUser;
    },
    firstEmployee(state){
      if(state.dataUser.length == 0){
        return state.dataUser
      }
    }
  },
  mutations: {
    //Récupère la data et la store dans le dataUser state
    SEND_POST_REQUEST(state, data) {
      state.dataUser = data;
    },
    //Récupère la data depuis la requête get pour display les infos employé(e)s
    SET_USERS(state, data) {
      state.dataUser = data;
    },
    // Suppression des données via le bouton suppression
    REMOVE_EMPLOYEE(state, employeeProfileId) {
      const updatedProfiles = state.dataUser.filter(profile => profile.id !== employeeProfileId)
      state.dataUser = updatedProfiles
    },
    // Update les données via le formulaire d'Admin présent sur la page
    UPDATE_EMPLOYEE(state, updatedObject) {
      const index = state.dataUser.findIndex(obj => obj.id === updatedObject.id);
      state.dataUser.splice(index, 1, updatedObject);
    },
    // Récupère l'iD et le transmet au state activeElementId
    setActiveElementId(state, id) {
      state.activeElementId = id;
    },
    //Récupérer l'url de l'image
    updateImageURL(state, url) {
      state.dataUser = url;
    },
  },
  actions: {
    // Créer une requête POST pour envoyer les datas saisies dans le formulaire
    async sendEmployeeData({ commit }, data) {
      try {
        const res = await axios.post('https://hellocse-b9033-default-rtdb.firebaseio.com/employees.json', data)
        commit('SEND_POST_REQUEST', res.data);
      } catch (error) {
        console.log(error);
      }
    },

    // Créer une requête GET pour récupérer les employé(e)s de la base de donnée
    async getEmployeeData({ commit }) {
      try {
        await axios.get(`https://hellocse-b9033-default-rtdb.firebaseio.com/employees.json`)
        //Générer un Id pour pouvoir cibler l'update et la suppression d'un profil
          .then((response) => {
            const data = response.data
            const employeeProfiles = []
            for (let key in data) {
              employeeProfiles.push({
                id: key,

                ...data[key]
              })
            }
            commit("SET_USERS", employeeProfiles)
          })
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // Suppression d'un employée via le bouton de suppression selon l'iD
    async removeEmployee({ commit }, id) {
      await axios.delete(`https://hellocse-b9033-default-rtdb.firebaseio.com/employees/${id}.json`)
        .then(() => {
          commit('REMOVE_EMPLOYEE', id)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // Update d'un profil selon l'iD
    async updateEmployee({ commit }, updatedObject) {
      try {
        const { id, ...rest } = updatedObject;
        await axios.put(`https://hellocse-b9033-default-rtdb.firebaseio.com/employees/${id}.json`, rest)
        commit('UPDATE_EMPLOYEE', updatedObject)
      } catch (error) {
        console.log(error);
      }
    },
  }
})
