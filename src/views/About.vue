<template>
  <div class="about">
    <Header></Header>
    <h1>This is an about page</h1>
    
    <div class="calculator">
      <div class="display">{{ current || "0" }}</div>
      <div class="btn" @click="clear"> clear</div>
       <div class="btn" @click="sign">+/-</div>
      <div class="btn " @click="percent">%</div>
      <div class="btn operator" @click="divide">/</div>
      <div class="btn" @click="append(7)">7</div>
      <div class="btn" @click="append(8)">8</div>
      <div class="btn" @click="append(9)">9</div>
      <div class="btn operator" @click="times">x</div>
      <div class="btn" @click="append(4)">4</div>
      <div class="btn" @click="append(5)">5</div>
      <div class="btn" @click="append(6)">6</div>
      <div class="btn operator" @click="minus">-</div>
      <div class="btn" @click="append(1)">1</div>
      <div class="btn" @click="append(2)">2</div>
      <div class="btn" @click="append(3)">3</div>
      <div class="btn operator" @click="plus">+</div>
      <div class="btn zero" @click="append(0)">0</div>
      <div class="btn" @click="dot">.</div>
      <div class="btn operator" @click="equal">=</div>
      
    </div>
    
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
// import bootstrapVue from 'bootstrap-vue'
export default {
  component:{
    name:'About',
    Header,
    // bootstrapVue,
  },
  data() {
    return {
      previous: "null",
      current: "",
      operator: "null",
      operatorClicked: false,
      
    }
  },
  methods:{
    myName(){
      console.log(this.name)

    },
    clear(){
      this.current = "";

    },
    sign(){
      this.current = this.current.charAt(0) === "-" ? this.current.slice(1): `-${this.current}`;
    },
    percent(){
      this.current= `${parseFloat(this.current)/100}`
    },
    append(number){
      if(this.operatorClicked){
        this.current = "";
        this.operatorClicked = false;
      }
      this.current= `${this.current}` + `${number}`;
    },
    dot(){
      if(this.current.indexOf('.') === -1) {
        this.append('.');
      }
      
    },
    setPrevious(){
      this.previous = this.current;
      this.operatorClicked = true;
      },
    divide(){
      this.operator = (a, b) => a / b;
      // this.previous = this.current;
      // this.operatorClicked = true;
      this.setPrevious();


    },
    times(){
      this.operator = (a, b) => a * b
      // this.previous = this.current;
      // this.operatorClicked = true;
      this.setPrevious();

    },
    plus(){
      this.operator = (a, b) => a + b
      // this.previous = this.current;
      // this.operatorClicked = true;
      this.setPrevious();

    },
    minus(){
      this.operator = (a, b) => a - b
      // this.previous = this.current;
      // this.operatorClicked = true;
      this.setPrevious();

    },
    equal(){
      this.current = `${this.operator(
        parseFloat(this.current) , 
        parseFloat(this.previous) 
      )}`;
      this.previous= null;

    }
  },
  
}
</script>
<style scoped>
.calculator{
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 400px;
  font-size: 40px
}
.display{
  grid-column: 1/5;
  background-color: brown;
  text-align: right;
  color:white
}
.zero{
  grid-column: 1/3;
}
.btn{
  background-color: #eee;
  border: 1px solid #333;
}
.operator{
  background-color: orange;
  color: white;
}
</style>
