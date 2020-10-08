<template>
  <div v-theme="'narrow'" id="Showblog">
    <input type="text" placeholder="搜索" v-model="search">
    <h1>博客总览</h1>
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
      </router-link>
      <article>{{ blog.body | slice }}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Showblog",
  data() {
    return {
      blogs: [],
      search: "",
      test:null
    }
  },
  methods:{
     // re:function (){
     //   this.$router.push("/blog/" + this.id);
     // }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    slice(value) {
      return value.slice(0, 100);
    }
  },
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      })
    }
  },
  created() {
    // this.$http.get('../../public/posts.json')
    //     .then(function (data) {
    //       this.blogs = data.body.slice(0, 10)
    //     })
    this.$http.get('http://localhost:8080/api/cartList/')
        .then(function(res){
          this.blogs = res.data.result.slice(0,10)
        })
  },
  directives: {
    'rainbow': {
      bind(el) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      }
    },
    'theme': {
      bind(el, binding) {
        if (binding.value == 'wide') {
          el.style.maxWidth = "1260px";
        } else if (binding.value == 'narrow') {
          el.style.maxWidth = "560px"
        }
      }
    }
  },


}


</script>

<style scoped>
#Showblog {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
input{
  width: 200px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid mediumvioletred;
}
a{
  text-decoration: none;
}
</style>