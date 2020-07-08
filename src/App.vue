<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('./components/Navbar'),
    Footer: () => import('./components/Footer')
  }
}
</script>
