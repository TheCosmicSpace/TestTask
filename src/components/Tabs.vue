<template>
    <div>
        <ul class="tabs d-flex">
            <router-link tag="li" v-for="(route, key) in routes"
                :key="key"
                exact    
                active-class="tabs-active"
                class="tabs-item"
                :to="route.path">
                {{route.title}}
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Tabs',
        data(){	
            return{
                activeTab: 'groups',
                routes:[
                    {
                        path: "/posts",
                        name: "posts",
                        title: "Лента постов"
                    },
                    {
                        path: "/groups",
                        name: "groups",
                        title: "Мои группы"
                    },
                    {
                        path: "/helps",
                        name: "helps",
                        title: "Запросы о помощи"
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
.tabs{
    margin-top: 20px;
    justify-content: space-around;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    @media screen and (max-width: 492px){
        flex-direction: column;
    }
    &-item{
        padding: 10px 0;
        font-size: 16px;
        font-weight: 500;
        color: #828282;
        flex: 1;
        text-align: center;
        transition: .25s;
        cursor: pointer;
        &:not(:last-child){
            border-right: 1px solid #D9D9D9;
            @media screen and (max-width: 492px){
                border-right: none;
                border-bottom: 1px solid #D9D9D9;
            }
        }
        &:hover{
            background: rgba(35, 93, 121, 0.1);    
        }   
    }
    &-active{
        background: rgba(35, 93, 121, 0.1);
    }
}
</style>