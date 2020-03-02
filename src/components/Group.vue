<template>
  <div class="group d-flex">
    <div class="group-img">
      <img :src="getImgUrl(group.groupImg)" alt="group-image">
    </div>
    <div class="group-content d-flex">			
      <h2 class="group-content-title">{{group.title}}</h2>
      <p class="group-content-text">{{group.text}}</p>
      <div class="group-content-tags">
        <ul class="tags d-flex">
          <li 
            v-for="(tag, key) in group.tags"
            :key="key"
            :class="{'tag-select': isSelectTag(tag)}"
            class="tag">
            {{tag.name}}
          </li>
        </ul>
      </div>
      <div class="group-content-footer d-flex">
        <div class="profile d-flex">
          <div class="profile-img"></div>
          <div class="profile-name">
            Мотивационный<br>
            Мотиватор
          </div>
        </div>
        <div class="users-coutn d-flex">
          <div class="user-img">
            <img src="@/assets/Vector.png" alt="user">
          </div>
          <div class="user-number">{{group.usersCount}}</div>
        </div>
        <button class="signIn-btn">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Group',
  props: {
    group: Object,
  },
  data(){
    return{
    }
  },
  methods:{
    isSelectTag(tag){
      return tag.select;
    },
    getImgUrl(img) {
      return require('../assets/'+img);
    }
  }
}
</script>


<style scoped lang="scss">

// ==== Group ====
.group{
	border: 1px solid #D9D9D9;
	border-radius: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 712px){
    padding-top: 20px;
		flex-direction: column;
  }
  &-img{
    min-width: 200px;
    @media screen and (max-width: 712px){
      text-align: center;
    }
    & img{
    	height: 100%;
      object-fit: cover;
      @media screen and (max-width: 712px){
        border-radius: 10px;
      }
    }
  }
  &-content{
    padding: 18px 20px 19px 20px;
    flex-direction: column;
    &-title{
      color: #4F4F4F;
      font-size: 18px;
      font-weight: bold;
    }
    &-text{
      color: #828282;
      font-size: 14px;
      margin-top: 10px;
      margin-bottom: 5px;
    }
    &-footer{
      border-top: 1px solid #D6D6D6;
      margin-top: auto;
      padding-top: 10px;
      align-items: center;
      flex-wrap: wrap;
      @media screen and (max-width: 576px) {
        justify-content: center;
      }
    }
  }
}
// ==== Tabs ====
.tags{
	flex-wrap: wrap;
}
.tag{
	margin: 5px;
  color: #828282;
  font-size: 13px;
  padding: 6px 18px;
  border: 1px solid #235D79;
  border-radius: 3px;
  background: #fff;
  &:not(:last-child){
    margin-right: 10px;
  }
  // &-btn{
  //   color: #828282;
  //   font-size: 13px;
  //   padding: 6px 18px;
  //   border: 1px solid #235D79;
  //   border-radius: 3px;
  //   background: #fff;
  //   transition: .25s;
  //   &:hover{
  //     background: rgba(35, 93, 121, 0.1);
  //   }	
  // }
  &-select{
    background: rgba(35, 93, 121, 0.1);
  }
}

// ==== Profile ====
.profile{
  &-img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #C4C4C4;
    border: 2px solid #245868;
    margin-right: 10px;
  }
  &-name{
    font-size: 14px;
    color: #5C5B5B;
  }
}
// ==== Users ====
.users{
  &-coutn{
    margin-left: 40px;
    align-items: center;
    @media screen and (max-width: 712px) {
      margin-left: 30px;
    }
  }
}
.user{
  &-number{
    margin-left: 10px;
    font-size: 13px;
    color: #8A8A8A;
  }
}
// ==== SignIn Btn ====
.signIn-btn{
	background: #235D79;
	border-radius: 3px;
	font-size: 12px;
	font-weight: 600;
	color: #fff;
	width: 170px;
	height: 30px;
	margin-left: auto;
  transition: .25s;
  &:hover{
    background: #24769c;
  }
  @media screen and (max-width: 576px) {
    flex-basis: 80%;
		margin: 15px auto 0 auto;
  }
}
</style>
