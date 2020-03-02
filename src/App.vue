<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <Tabs/>
      </div>
	  	<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
    </div>
  </div>
</template>


<script>
import Tabs from './components/Tabs.vue'
export default {
  name: 'App',
  components: {
    Tabs
  },
  created(){
	  this.$router.push('/groups');
  }
}
</script>


<style lang="scss">
*,*:after,*:before{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
#app {
  font-family: Montserrat Avenir, Helvetica, Arial, sans-serif;
}
.container{
	max-width: 911px;
	padding: 0 10px;
	margin: 0 auto;
}
.d-flex{
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
}
a{
	color: inherit;
	text-decoration: none;
}
li{
  list-style: none;
	display: block;
}
img{
	max-width: 100%;
}
button{
	outline: none;
	border: none;
	background: transparent; 
	cursor: pointer;
}
.fade-enter {
    opacity: 0;
	&-active {
		transition: opacity .25s ease;
	}
}
.fade-leave {
	&-active {
		transition: opacity .25s ease;
		opacity: 0;
	}
}
</style>
