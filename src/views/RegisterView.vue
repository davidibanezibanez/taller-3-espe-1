<template>
    <div class="register">
      <h1>Registro</h1>
      <form @submit.prevent="registerUser">
        <div>
          <label for="username">Nombre de usuario:</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterView',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
        registerUser() {
      
      let users = JSON.parse(localStorage.getItem('users')) || [];

      
      let newUser = {
        username: this.username,
        password: this.password
      };

      
      users.push(newUser);

      
      localStorage.setItem('users', JSON.stringify(users));

      
      alert('Usuario registrado exitosamente');

      
      this.$router.push('/');
    }
    }
  }
  </script>
  
  <style scoped>
  
  .register {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  