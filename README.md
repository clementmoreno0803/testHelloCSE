# hellotest

# helloCSE

// = Fait

1. Une page admin + Une page qui display les résultats
2. PAGE ADMIN
  //  1. Créer un formulaire
    //    1. Prénom
    //    2. Nom
    //    3. Implémentation photo de profil
    //    4. description
  //  2. Créer un objet data pour récupérer les inputs
  //  3. Envoyer ces datas dans une action pour requête POST sur firebase
  //  4. Créer un bouton qui permet d’update les champs de formulaire
  1. Voir comment ça marche pour faire une modification de profil
   // 5. Créer un bouton pour supprimer le profil
      //  1. Selon l’id du profil
        //    1. Générer un id à la création du profil
3. PAGE DE DISPLAY
  //  1. Requête GET à firebase
    //    1. mutation pour store ça dans un tableau d’objet dans le state (ex: user)
    //    2. Getters pour display dans la view (trouver un nom cohérent)
4. Gérer la responsivité

---

COMPOSANTS

//1. Formulaire
2. Base card
// 3. Users Infos pour récupérer la data avec props
// 4. Modal

---

UPDATE DATA

  // 1. Récupéré l’ID de l’employée
  //  1. Click event qui ouvre une modal avec un nouveau formulaire
      //  1. réutilisation du formulaire ⇒ Comment passer un bouton en props ?
            1. Fermer la modale à la submission du formulaire
        //    OU en cliquant en dehors.
  //  2. Click event sur le button qui dispatch une action avec un payload ‘Data”
  //  3. Cette action récupère les data et va créer une PUT requête à firebase
  // 2. PUT request avec employeeData en payload
  //  1. une fois la reponse récupéré
  //  3. M utations du state
  //4. Commit du store dans une map Mutation

// ---

DESIGN

  1. Créer une BaseCard pour styliser le dashboard
  2. Créer l'ouverture du dashboard au click (active class ?)
  3. Permettre de rajouter une photo de profil
  4. Styliser le côté "Admin" et la navigation




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
