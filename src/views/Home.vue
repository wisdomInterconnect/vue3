<template>
  <div class="home">
    <Header v-bind:title="title" v-on:changeValue="updateValue($event)"></Header>
    <Wisdom v-bind:ninjas="ninjas"></Wisdom>
    <Footer v-bind:title="title">
      <template v-slot:po>
        <h1>welcome slot</h1>
        
      </template>
      <template v-slot:po1>
          <p>slot</p>
        
      </template>
      
    
    </Footer>
    <AddBlog></AddBlog>
   
    <h1 class="text-danger">Welcome Home</h1>
    <h2 class="bg-primary">come home</h2>
    <!-- computed -->
    <button class="btn btn-danger" v-on:click="a++">Add To A</button>
    <button class="btn btn-secondary" v-on:click="b++">Add To B</button>
    <p>{{a}}</p>
    <p>{{b}}</p>
    <p>Age+ A= {{AddtoA}}</p>
    <p>Age+ B={{AddtoB}}</p>
    <div v-on:click="available=!available" v-bind:class="{available:available}">
      <span>Toggle</span> 
      </div>
      <button v-on:click="nearby=!nearby">Toggle nearby</button>
      <button v-on:click="available=!available">Toggle available</button>
    <div v-bind:class="compclasses">
      <span>Ryu</span>
    </div>
    <div v-bind:class="{red:true, yellow:true}">Bassey</div>
    <button v-on:click="success=!success">Success</button>
    <button v-on:click="error=!error">error</button>
    <p v-show="success">There and error</p>
    <p v-if="error">What a success</p>
    <ul>
      <Li v-for="(character, index) in characters" :key="character">{{index}}-{{character}}</Li>
    </ul>
    <template v-for="(wisdom, index) in wisdoms" :key="wisdom">{{index}} - {{wisdom.name}} - {{wisdom.age}}

    </template>
    <!-- bag-image -->
    <div id="bag" v-bind:class="{burst:ended}">

    </div>
    <div id="bag-health">
      <div class="" v-bind:style="{ width:health + '%'}"></div>
    </div>
    <div id="control">
      <button v-on:click="punch" v-show="!ended" class="bg-danger">Punch</button>
      <button  v-on:click="restart" class="bg-primary">Restart</button>

    </div>
    <div>we run the marathon by {{name2}} <button v-on:click="changedName">Change Name</button> </div>
    <input type="text" ref="input">
    <button v-on:click="readRef">Submits</button>
    <p>My Esther is {{output}}</p>
    <p ref="test">hello</p>
    <p>{{base}}</p>
    <p>{{greeting}}</p>


      <!-- <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Check Bootstrap
    </button> -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Wisdom from '@/components/Wisdom.vue'
import AddBlog from '@/components/AddBlog.vue'
//  export const bus= new Vue();

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Wisdom,
    AddBlog
  },
  data(){
    return{
      ninjas:[
                    {name: 'Ryu', speciality: 'Viue Component', show:false},
                    {name: 'Crystal', speciality: 'Html Wizardry', show:false},
                    {name: 'Hitoshi', speciality: 'Click Events', show:false},
                    {name: 'Tango', speciality: 'Conditionals', show:false},
                    {name: 'Kami', speciality: 'Webpack', show:false},
                    {name: 'Yoshi', speciality: 'Data Diggin', show:false},
                ],
      title: "Vue master",



      a: 4,
      b:5,
      age:10,
      available: false,
      nearby:false,
      error:false,
      success:false,
      base: 'your vue cli',
      characters: ['patient','love','peace', 'longSuffering', 'staedfast'],
      wisdoms:[
        {name:"camp" ,age:12},
        {name:'Kamp', age:23},
        {name:'keep', age:40}
      ],
      health: 100,
      ended: false,
      name: 'friday',
      name2: 'wisdom',
      output: 'beauty'
    }
  },
  methods: {
    updateValue(updatedValue){
      this.title= updatedValue

    },
    punch:function(){
      this.health-= 10
      if(this.health <= 0){
        this.ended = true

      }
    },
    restart:function(){
      this.health= 100
    },
    changedName:function(){
      this.name2 = 'okon'
    },
    readRef:function(){
     console.log(this.$refs.test.innerHTML); 
     this.output= this.$refs.input.value
    }
    
  },
  computed:{
    AddtoA:function(){
      console.log('AddtoA')
     return this.a + this.age
    },
    AddtoB:function(){
      console.log('AddtoB')
      return this.b+ this.age

    },
    compclasses:function(){
      return{
        available:this.available,
        nearby: this.nearby
      }

    },
    greeting(){
      return 'good morining'

    }

  },
}
</script>
<style scoped>
.red{
  color: yellow;
}
.available span{
  background-color: blue;
}
.nearby span{
  background-color: aquamarine;
}
#bag{
  width: 200px;
  height: 500px;
  margin: 0 auto;
  background:url('../assets/france.png') center no-repeat;
  background-size: 80%;
}
#bag.burst{
  background:url('../assets/logo.png') center no-repeat;
  background-size: 80%;

}
#bag-health{
  width: 200px;
  border: 2px solid #000;
  margin:0 auto 20px auto
}
#bag-health div{
  height: 20px;
  background: crimson;
}
#controls{
  width: 120px;
  margin: 0 auto;
}
</style>
