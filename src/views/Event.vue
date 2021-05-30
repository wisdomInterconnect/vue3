<template>
    <div class="">
        <div class="event">

        
        <EventCard v-for="event in events" :key="event.id" :event="event" />
        </div>
 </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
    export default {
        name: "Event",
        components:{
            EventCard
        },
      data(){
          return{
              events:[
                  {
                      id: 111,
                      title: 'Dog',
                      date: 'January 28, 2002',
                      time: '12.00'
                      },
                       {
                      id: 112,
                      title: 'cat',
                      date: 'Febraury 28, 2002',
                      time: '1.00'
                      },
                       {
                      id: 113,
                      title: 'Duck',
                      date: 'March 28, 2002',
                      time: '3.00'
                      }

              ],
      }
    }
    }
</script>

<style scoped>
.event{
    display: flex;
    flex-direction:column;
    align-items: center;
}

</style>