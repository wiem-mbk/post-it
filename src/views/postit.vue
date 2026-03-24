<template>
  <!-- display notes -->
  <div id="NotebookApp" class="Notebook">
    <textarea id="title" class='title' style="color: black" v-on:input="SaveNotes()">{{ title }}</textarea>
    <textarea id="content" class='notebox' style="color:black" v-on:input="SaveNotes()">{{ content }}</textarea>

  </div>

</template>

<script>

export default {
  name: 'Postit',
  props: ['title', 'content', 'id'],
  components: {

  },
  data: function () {
    return {
    }
  },


  methods: {

    SaveNotes: function () {

      let title = document.getElementById("title").value
      let content = document.getElementById("content").value
      fetch("http://localhost:3000/notes/" + this.id, {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "title": title, "content": [content] })

      })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
    }
  },
  created: function () {
    console.log(this.title)
  },

}
</script>

<style>
body {

  background-color: rgb(54, 57, 69);
  background-size: cover;
}

.title {

  width: 300px;
  height: 20px;
  padding: 10px;
  background-color: yellow;
  outline: none !important;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #253550;

}

.Notebook {

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
}

.buttonAdd {

  color: yellow;
  font-size: xx-large;
  font-weight: 900;
  cursor: pointer;
  margin: 20px;

}

.notebox {

  width: 300px;
  height: 90px;
  padding: 10px;
  background-color: yellow;
  outline: none !important;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #253550;
}

</style>