<template>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
        <!--<b-navbar-brand href="#">NavBar</b-navbar-brand>-->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <router-link
                    v-for="link in menu"
                    :key="link.title"
                    :to="link.path"
                    class="nav-link">
                    {{ link.title }}
                </router-link>
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
            title: 'Тренировка операций',
            active: true,
            path: '/'
          },
          {
            title: 'Флеш-анзан',
            active: true,
            path: '/flash'
          },
        ],
      }
    },

    methods: {
    },
  }
</script>

<style scoped>

</style>
