<template> 
  <div v-if="isLoggedIn" class="game-container">
    <!-- Contenedor para el versus y el botón -->
    <div class="header-container">
      <!-- Contenedor de versus -->
      <div class="versus-container">
        <p>{{ loggedInUser }} vs Jugador Invitado</p>
      </div>

      <!-- Botón para regresar al Home -->
      <button @click="goHome" class="back-button">Regresar al Home</button>
    </div>

    <!-- Iframe del juego -->
    <iframe 
      src="https://armanchas.github.io/patos-esp1/"
      frameborder="0"
      class="game-frame"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'GameView',
  data() {
    return {
      loggedInUser: 'Jugador',
      isLoggedIn: false, // Añadimos esta propiedad para controlar el estado de login
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user && user.username) {
      this.loggedInUser = user.username;
      this.isLoggedIn = true; // Si el usuario está logueado, mostramos el contenido
    } else {
      this.isLoggedIn = false; // Si no está logueado, se redirige al home
      this.goHome(); // Redirigir al home si no está logueado
    }
  },
  methods: {
    goHome() {
      this.$router.push('/'); // Redirige al home
    }
  }
}
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;  
  height: 100vh; 
  padding: 20px; 
  box-sizing: border-box;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.versus-container {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.game-frame {
  width: 95vw;  
  height: 90vh; 
  border: none;
  max-width: 1200px; 
  max-height: 800px; 
}

.back-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #0056b3;
}

.versus-container {
  background-color: aqua;
}
</style>
