<template>
    <b-container>
        <s-new-t-button @click="$router.push({ name: 'CreateUser' })"/>

        <b-row class="mt-5">
            <b-col>
                <ul class="Management__list">
                    <li class="Management__item default-border" v-for="(item,i) in userList" :key="i">
                        <b-container>
                            <b-row>
                                <b-col>
                                    <div class="Management__info" @click="goToUser(item)">
                                        <div class="Management__text-container">
                                            <div class="Management__title">
                                                <span class="Management__name">
                                                    {{ item.nome }}</span>
                                                <span class="Management__occupation">
                                                    {{ item.departamento }}
                                                </span>
                                            </div>
                                            <div class="Management__legend">{{ getProfileById(item.permissao).name }}</div>
                                        </div>
                                        <button class="Management__action" @click.stop="deleteUser(item)">
                                            <svgicon icon="icn_garbage" width="18" height="18" color="#fa2c55"></svgicon>
                                        </button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </li>
                </ul>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import '@/compiled-icons/icn_garbage'
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('Users', ['userList']),
    ...mapGetters('Profiles', ['getProfileById'])
  },
  methods: {
    fetchUsers () {
      this.$store.dispatch('Users/getAllUsers')
    },
    goToUser (user) {
      this.$router.push({ name: 'EditUser', params: { id: user.idUsuarios } })
    },
    async deleteUser ({ idUsuarios }) {
      const del = await this.$store.dispatch('Users/deleteUser', idUsuarios)
      if (del) {
        this.fetchUsers()
      }
    }
  },
  mounted () {
    this.fetchUsers()
  }

}
</script>

<style lang="scss">
.Management{
    &__info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0 5px 10px;
        cursor: pointer;
    }
    &__legend{
        font-size: .8rem;
        color: #bbb;
        text-transform: capitalize;
    }
    &__name{
        color: #222;
        margin-bottom: 5px;
    }
    &__occupation{
        color: #777;
        margin-bottom: 5px;
    }
    &__text-container{
        line-height: 15px;
        max-width: 90%;
    }
    &__action{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        width: 40px;
        height: 40px;
        cursor: pointer;

        &:active {
            background-color: #f52a4640;
            border-radius: 50%;
        }
    }
    &__title{
        display: flex;
        flex-flow: column nowrap;
        white-space: nowrap;
    }
}
</style>
