<template>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#" v-for="link in menu" :key="link.title" :disabled="!link.active">{{ link.title }}</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <em>{{ name }}</em>
                    </template>
                    <b-dropdown-item href="#" @click="$emit('user-logout')">Выйти</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
  export default {
    name: "TopNav",

    props: {
      name: {
        type: String,
        required: true,
      }
    },

    data: function () {
      return {
        menu: [
          {
            title: 'Простые решалки',
            active: true,
          },
          {
            title: 'Не простые решалки',
            active: false,
          },
        ],
      }
    }
  }
</script>

<style scoped>

</style>
