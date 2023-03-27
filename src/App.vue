<template>
<nav>
  <img src="./assets/logo-hcse.png" alt="logo" class="logo">
  <ul>
    <router-link to="/">Admin</router-link> |
    <router-link to="/vos-stars">Stars</router-link>
  </ul>
</nav>
<router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #208fbd;
}

ul {
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.logo {
  width: 200px;
}


@media (min-width: 768px) {
nav {
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 100px;
}
}
</style>
