<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">博客</router-link>
        <router-link to="/add">写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Blogheader"
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
ul{
  list-style: none;
  margin: 0;
  text-align: center;
}
li{
  margin: 10px 10px;
  display: inline-block;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 4px;
}
nav{
  background: crimson;
  padding: 30px  0px;
  margin-bottom: 40px;
}
</style>