<template>
  <div class="groups">
    <Group 
      v-for="(group, key) in groups"
      :key="key"
      :group="group"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Group from '@/components/Group.vue'

export default {
  name: 'Groups',
  components: {
    Group
  },
  data(){
    return{
      groups:[
        {
          title: "“Профессиональный бизнес тренер”",
          text: "Credibly utilize holistic action items for multidisciplinary expertise. Collaboratively whiteboard professional vortals rather than sustainable mindshare.",
          groupImg: "Rectangle.png",
          tags: [
            {
              name: "Успех",
              select: true
            },{
              name: "Дисциплина",
              select: false
            },{
              name: "Мышление",
              select: true
            },{
              name: "Медитации",
              select: false
            },{
              name: "Лайф коучинг",
              select: false
            }
          ],
          usersCount: 1011
        },
        {
          title: "“Бизнес тренер”",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          groupImg: "Rectangle.png",  
          tags: [
            {
              name: "Успех",
              select: false
            },{
              name: "Дисциплина",
              select: true
            },{
              name: "Мышление",
              select: false
            },{
              name: "Медитации",
              select: true
            },{
              name: "Лайф коучинг",
              select: true
            }
          ],
          usersCount: 3052
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.groups{
	margin-top: 40px;
}
</style>
