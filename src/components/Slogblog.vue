<template>
  <div id="Slogblog">
    <h1>{{blog.title |to-uppercase }}  </h1>
    <article>{{blog.body | s-length }}</article>
  </div>
</template>

<script>
export default {
  name: "Slogblog",
  data(){
    return{
      id:this.$route.params.id,
      blog:{}
    }
  },
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/posts/" + this.id)
    .then( function (res){
      this.blog=res.body
    })
  },
  methods:{

  }

}
</script>

<style scoped>
  #Slogblog{
    max-width: 960px;
    margin: 20px auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
  }
</style>