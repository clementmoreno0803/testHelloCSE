import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    // Store les data objets de chaque nouvelle star
    stars: [],
    // Store l'état de base de chaque card star
    openedStarId : null
  },
  getters: {
    //display l'état du state dans la page Vos Stars
    displayStar(state) {
      return state.stars;
    },
    // Permet de display un message si aucune star n'est encore entrée en base de donnée
    firstStar(state){
      if(state.stars.length == 0){
        return state.stars
      }
    },
    // Permet de savoir si l'id de la star est égal à l'id du nom sur lequel on clique
    isOpen: state => id => {
      return state.openedStarId == id

    }
  },
  mutations: {
    //Récupère la data et la store dans le stars state
    SEND_POST_REQUEST(state, data) {
      state.stars = data;
    },
    //Récupère la data depuis la requête get pour display les infos des stars
    SET_STARS(state, data) {
      state.stars = data;
    },
    // Suppression des données via le bouton suppression
    REMOVE_STAR(state, starProfileId) {
      const updatedProfiles = state.stars.filter(profile => profile.id !== starProfileId)
      state.stars = updatedProfiles
    },
    // Update les données via le formulaire d'Admin présent sur la page
    UPDATE_STAR(state, updatedObject) {
      const index = state.stars.findIndex(obj => obj.id === updatedObject.id);
      state.stars.splice(index, 1, updatedObject);
    },
    // Permet de récupérer l'id du composent à toggle
    setOpenStarID(state, id){
      state.openedStarId = id
    },
    //Récupére l'url de l'image
    updateImageURL(state, url) {
      state.stars = url;
    },
  },
  actions: {
    // Créer une requête POST pour envoyer les datas saisies dans le formulaire vers la DB
    async sendStarData({ commit }, data) {
      try {
        const res = await axios.post('https://hellocse-b9033-default-rtdb.firebaseio.com/stars.json', data)
        commit('SEND_POST_REQUEST', res.data);
      } catch (error) {
        console.log(error);
      }
    },

    // Créer une requête GET pour récupérer les stars de la base de donnée
    async getStarData({ commit }) {
      try {
        await axios.get(`https://hellocse-b9033-default-rtdb.firebaseio.com/stars.json`)
        //Générer un Id pour pouvoir cibler l'update et la suppression d'un profil
          .then((response) => {
            const data = response.data
            const starProfiles = []
            for (let key in data) {
              starProfiles.push({
                id: key,

                ...data[key]
              })
            }
            commit("SET_STARS", starProfiles)
          })
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // Suppression d'une star via le bouton de suppression selon l'iD
    async removeStar({ commit }, id) {
      await axios.delete(`https://hellocse-b9033-default-rtdb.firebaseio.com/stars/${id}.json`)
        .then(() => {
          commit('REMOVE_STAR', id)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // Update d'un profil selon l'iD
    async updateStar({ commit }, updatedObject) {
      try {
        const { id, ...rest } = updatedObject;
        await axios.put(`https://hellocse-b9033-default-rtdb.firebaseio.com/stars/${id}.json`, rest)
        commit('UPDATE_STAR', updatedObject)
      } catch (error) {
        console.log(error);
      }
    },
  }
})
