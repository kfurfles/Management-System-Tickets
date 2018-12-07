<template>
    <b-container class="MenuBar__container">
        <b-row>
            <b-col>
                <button class="MenuBar__button" @click="$router.push({ name: 'Profile' })">
                    <svgicon icon="icn_user-config" width="22" height="22" color="#3f8df7"></svgicon>
                    <span class="MenuBar__text">Perfil</span>
                </button>
            </b-col>
            <b-col v-if="isAdmin">
                <button class="MenuBar__button" @click="$router.push({ name: 'ManagementUsers' })">
                    <svgicon icon="icn_users" width="22" height="22" color="#3f8df7"></svgicon>
                    <span class="MenuBar__text">Usuários</span>
                </button>
            </b-col>
            <b-col>
                <button class="MenuBar__button"  @click="$router.push({ name: '/' })">
                    <svgicon icon="icn_home" width="22" height="22" color="#3f8df7"></svgicon>
                    <span class="MenuBar__text">Dashboard</span>
                </button>
            </b-col>

            <b-col>
                <button class="MenuBar__button" @click="$router.push({ name: 'Messages' })">
                    <svgicon icon="icn_messages" width="22" height="22" color="#3f8df7"></svgicon>
                    <span class="MenuBar__text">Chamados</span>
                </button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import '@/compiled-icons/icn_home'
import '@/compiled-icons/icn_user-config'
import '@/compiled-icons/icn_users'
import '@/compiled-icons/icn_messages'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('Users', [
      'isAdmin'
    ])
  }
}
</script>

<style lang="scss">
$blue: #3f8df7;

.MenuBar{
    &__button{
        width: 100%;
        padding: 13px 5px;
        box-sizing: border-box;
    }
    &__text{
        display: block;
        font-size: 10px;
        text-transform: uppercase;
    }
    &__container{
        z-index: 10;
        background-color: #fafdff;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: -1px -1px 7px rgba(0,0,0,0.2);

        .col{
            padding: 0 !important;
        }
    }
}
</style>
