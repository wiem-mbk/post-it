<template>
  <div class="home">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Postit</title>

      <link rel="stylesheet" href="style.css">
    </head>
            <!-- create add button -->
            <span type="button" class="buttonAdd" v-on:click="AddContent()">&plus;</span>
      
      <div style="display:inline" v-for="item in postits" :key="item.id">
            <!-- display notes -->
        <Postit :title="item.title" :content="item.content[0]" :id="item.id"></Postit>
        <button class='Postit' v-on:click="checkPostit(item.id)">&rarr;</button>
    <span type="button" class='buttonDelete' v-on:click="DeleteContent(item.id)">&Cross;</span>
       </div>
        </div>
        

</template>

<script>
import Postit from './postit.vue'

export default {
  name: 'Postitlist',
  components: {
    Postit
},
  data: function () {
    return {
      postits: [],
    }
  },
   created() {
    this.Getpostits()
},

  methods: {

    Getpostits: function () {
      fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => console.log(this.postits = data.notes));
    },

    

    AddContent: function () {
      fetch("http://localhost:3000/notes",{
      method: "POST",headers:{ "Content-Type" : "application/json"},
      body: JSON.stringify({"title":"Add Title Here !","content": ["Add text Here !"]}),
      
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
      this.Getpostits()
    },
      checkPostit: function (id) {
      this.$router.push("/postit/" + id);
    },

    DeleteContent: function (index) {
        fetch("http://localhost:3000/notes/"+index,{
      method: "DELETE",headers:{ "Content-Type" : "application/json"},
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
      this.Getpostits()
    },
  },


}
</script>
<style>
body {

  background-color: rgb(54, 57, 69);
  background-size: cover;
}

.Notebook {

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
}

.buttonAdd {

  color: yellow;
  font-size: xxx-large;
  font-weight: 900;
  cursor: pointer;
  margin: 20px;

}

.notebox {

  width: 300px;
  height: 300px;
  padding: 10px;
  background-color: yellow t;
  outline: none !important;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #253550;



}
.Postit{
  
color: white ;
  font-size: 3.8em;
  cursor: pointer;
  margin: 20px;
  background-color: grey;
}
.buttonDelete {

  color: yellow;
  font-size: 3em;
  font-weight: 600;
  cursor: pointer;

}
</style>