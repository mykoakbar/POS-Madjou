<template>
  <div class="hello">
    <div class="ssb">
      <button class="btn">masuk</button>
      <ul>
        <li>
          <a href="#">Menu 1</a>
          <ul>
            <li><a href="#">Submenu 1.1</a></li>
            <li><a href="#">Submenu 1.2</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Menu 2</a>
          <ul>
            <li><a href="#">Submenu 2.1</a></li>
            <li><a href="#">Submenu 2.2</a></li>
          </ul>
        </li>
        <li><a href="#">Menu 3</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>


<style>
.ssb ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ssb li {
  position: relative;
}

.ssb a {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
}

.ssb ul ul {
  position: absolute;
  top: 0;
  left: 100%;
  width: 200px;
  display: none;
}

.ssb ul ul li {
  position: relative;
}

.ssb ul ul a {
  padding: 5px 10px;
}

.ssb li a:focus > ul {
  display: block;
}
button:focus{
  background-color: red !important;
}
</style>
