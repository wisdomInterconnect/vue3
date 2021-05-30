<template>
    <div>
        <footer>
            <slot name="po"></slot>
            <p>{{copyright}} {{title}}</p>
            <slot name="po1"></slot>
            <component v-bind:is="component"> </component>

        </footer>

    </div>
</template>

<script>
// import bus from '../views/Home'
import Header from '../components/Header'
    export default {
        components:{
            Header

        },
        props:{
            title:{
                type: String
            }

        },
        data(){
            return{
                copyright: 'All Reserve belong the company',
                component: 'Header'
            }
        },
        // created(){
        //     bus.$on('valueChange',(data) =>{
        //        this.wisdom = data; 
        //     })
        // }
        
    }
</script>

<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
    color: lightgreen;
    text-align: center;
}

</style>