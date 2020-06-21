<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from "./components/Sidebar";
  import Main from "./components/Main";
  export default {
    name: 'App',
    components: {
      Sidebar,
      Main
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
  body {
    font-size: .875rem;
  }
  @font-face {
    font-family: 'SCDream5';
    src: url('./assets/SCDream5.otf');
  }
  @font-face {
    font-family: 'SCDream6';
    src: url('./assets/SCDream6.otf');
  }
</style>
