<template>
  <div id="addBlog">
    <h2></h2>
    <form v-if="!submit" id="test">

      <h3 ref="userinfo">博客标题</h3>
      <input type="text" v-model="blog.title" required id="del" >

      <h3>博客内容</h3>
      <textarea v-model="blog.content"></textarea>


      <div id="checkbox">
        <label>vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular4</label>
        <input type="checkbox" value="Angular4" v-model="blog.categories">
      </div>

      <h3>作者</h3>

      <select v-model="blog.author">
        <option v-for="author in authors" :key="author" y>{{ author }}</option>
      </select>

      <button @click.prevent="post">提交博客</button>
    </form>


    <h1 v-if="submit">您的博客发送成功</h1>

    <div id="preview">
      <h3>博客总览</h3>

      <p>{{ blog.title }}</p>
      <h3>博客内容</h3>
      <p>{{ blog.content }}</p>
      <h3>博客分类</h3>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{ category }}</li>
      </ul>
      <h3>作者 ： {{ blog.author }}</h3>
      <button v-if="submit" @click.prevent="recove">晓得了</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addBlog",
  data() {
    return {
      blog: {
        title: " ",
        content: " ",
        categories: [],
        author: " "
      },
      authors: ["Feng", "Zheng", "Ying"],
      submit: false
    }
  },
  methods: {
    post: function () {
      this.$http.post("https://jsonplaceholder.typicode.com/posts", {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      })
          .then(function (data) {
            console.log(data),
                this.submit = true
          });
      document.querySelector("#test").reset();

    },
    recove: function () {
      this.submit = false;

    },
  },
  props: {}
};
</script>

<style scoped>
#addBlog * {
  box-sizing: border-box;
}

#addBlog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"], textarea, select {
  width: 100%;
  display: block;
  padding: 8px;

}

#checkbox label {
  display: inline-block;
  margin-top: 0px;
}

#checkbox input {
  display: inline-block;
  margin-right: 10px;
}

button {
  display: block;
  margin: 20px auto;
  background: crimson;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 14px;
  font-size: 18px;
  cursor: pointer;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

textarea {
  height: 200px;
}
</style>
