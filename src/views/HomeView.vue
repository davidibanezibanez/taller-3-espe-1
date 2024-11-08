<template>
  <div class="home">
    <div class="buttons-container">
      <button v-if="isLoggedIn" @click="goTo('game')">Game</button>
      <button @click="goTo('wiki')">Wiki</button>
      <button @click="goTo('records')">Records</button>
      <button v-if="!isLoggedIn" @click="goTo('login')">Login</button>
      <button v-if="isLoggedIn" @click="logout">Cerrar Sesión</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      const user = JSON.parse(localStorage.getItem('loggedInUser'));
      this.isLoggedIn = !!user;
    },
    goTo(route) {
      if (route === 'login') {
        this.$router.push('/login');
      } else if (['game', 'wiki', 'records'].includes(route)) {
        this.$router.push(`/${route}`);
      } else {
        alert(`${route} aún no está implementado`);
      }
    },
    logout() {
      localStorage.removeItem('loggedInUser');
      this.isLoggedIn = false;
      alert('Sesión cerrada');
      this.$router.push('/');
    }
  },
  watch: {
    isLoggedIn(newValue) {
      if (!newValue) this.checkLoginStatus();
    }
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
}

.buttons-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

button {
  padding: 12px 25px;
  font-size: 18px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

button:active {
  transform: scale(1);
}
</style>
