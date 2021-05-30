<template>
    <div>
        <div>
      <header>
            <h1 class="text-light" v-on:click="changeValue">
            {{title}}
            <h2>come home</h2>
            </h1>
       </header>
       </div>


    </div>
</template>

<script>

    export default {
        props:{
            title:{
                type:String
            }

        },
    data(){
        return{
             wisdom: "wisdom Ninjas"

        }
       
    },
    methods: {
    //   changeValue(){
    //       this.title = "Vue Legend"
    //   }  
    changeValue(){
        this.$emit('changeValue','Vue Lgends')
    }
    },
        
    }
</script>

<style scoped>
header{
    background: lightgreen;
    padding: 10px;

}
h1{
    color: #222;
    text-align: center;
}


</style>