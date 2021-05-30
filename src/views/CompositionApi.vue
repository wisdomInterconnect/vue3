<template>
    <div>
        <input type="text" v-model="search">
            <p>Search term-{{search}}</p>
               <p v-for="names in matchingNames" :key="names">{{names}}</p>
                  <button v-on:click="error=!error">Toggle Error</button>
                    <button v-on:click="success=!success">Toggle Success</button>
                      <p v-if="!success">what a friend</p>
                        
                        

        

    </div>
</template>

<script>
import { computed, ref} from 'vue';
    export default {
        setup(){
            const search = ref('')
           
          
             let success =ref(false)
            const name = ref(['friday', 'wisdom', 'pato','godstar','kito'])
            const matchingNames = computed(()=>{
                return name.value.filter((names)=>names.includes(search.value))
               
            })
            return {
                name,
                ref,
                computed,
                search,
                matchingNames,
                success,
                
                
              
            }
        
            }

            
    }
    
        
        
    
</script>

<style lang="scss" scoped>

</style>