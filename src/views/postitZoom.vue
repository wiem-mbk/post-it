<template>
 <!-- display notes -->
<div>

   <Postit :title="title" :content="content[0]" :id="id"></Postit>
    <button  class='Postit' v-on:click="goBack()">&larr;</button>
</div>

</template>

<script>
import Postit from './postit.vue';

export default {
  name: 'PostitZoom',
  components: {
    Postit
},
  data: function () {
  return {
    title: "",
    content: [],
    id:"",
  }
},

    methods:{
       Getpostit: function(index){
      fetch("http://localhost:3000/notes/"+index)
      .then((res) => res.json())
      .then((data) => {this.title = data.title;this.content =data.content});
      

      },

        goBack: function (){
        this.$router.push('/')
    },
    },
    created: function () {
      let url = window.location.href
        this.Getpostit(url.slice(-1))
        this.id=url.slice(-1)
  },
          }
</script>

<style>
.Postit{
  
color: white ;
  font-size: 3.8em;
  cursor: pointer;
  margin: 20px;
  background-color: grey;
}
</style>