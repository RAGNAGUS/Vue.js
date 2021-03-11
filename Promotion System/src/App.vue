<template>
  <h1>{{title}}</h1><br>

  <!-- Show Modal -->
  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
       <a href="#">Sign up now</a> 
       <a href="#">more info</a> 
      </template>
    <h1>Sing up for the Giveaway!</h1>
    <p>Grab your code for half price</p>
    </Modal>
  </teleport>
  <!-- End Show Modal -->

  <!-- Show ModalTwo -->
  <teleport to="#modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
    <h1>Sing up for the newsletter</h1>
    <p>For updates and promo codes!</p>
    </Modal>
  </teleport>
  <!-- End Show ModalTwo -->


  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModalTwo">Open Modal</button>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: { Modal },
  data(){
    return{
      title: 'My First Vue App',
      header: 'Sing up for the Giveaway!',
      text: 'Grab your code for half price!',
      showModal: false,
      showModalTwo: false
    }
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
