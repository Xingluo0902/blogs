<template>
  <div id="swiper">
    <div class="container">
      <img :src="src.url"
           alt=""
           v-for="(src,index) in srcs"
           :key="index">
    </div>
    <ul id="dot"></ul>
    <span id="previous">《</span>
    <span id="next">》</span>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  data () {
    return {
      srcs: [
        { url: require('../../assets/imge/wallhaven-n6rpeq_1920x1080.png') },

        { url: require('../../assets/imge/wallhaven-pkw6y3_1920x1080.png') },

        { url: require('../../assets/imge/wallhaven-q6o81d_1920x1080.png') },

        { url: require('../../assets/imge/wallhaven-zxgeyw_1920x1080.png') }
      ],
      lenImg: 0,
    }
  },
  created () {

  },
  mounted () {
    addLi();
  },
  methods: {
    addLi () {
      let imgs = document.getElementsByTagName('img');
      let ul = document.getElementById('dot')
      this.lenImg = imgs.length;
      for (let i = 0; i < this.lenImg; i++) {
        let li = document.createElement('li');
        ul.appendChild(li)
      }
    }
  },
}
</script>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  margin-top: 50px;
  height: 408px;
  width: 727px;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
  position: absolute;
}
.container img:nth-child(2) {
  left: calc(1 * 727px);
}
.container img:nth-child(3) {
  left: calc(2 * 727px);
}
.container img:nth-child(4) {
  left: calc(3 * 727px);
}
ul {
  position: absolute;
  top: 423px;
  left: 727px;
  cursor: pointer;
}
li {
  list-style: none;
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 40%;
}
#previous,
#next {
  position: absolute;
  font-size: 28px;
  cursor: pointer;
}
#previous {
  top: 244px;
  left: 422px;
}
#next {
  top: 244px;
  left: 1072px;
}
</style>