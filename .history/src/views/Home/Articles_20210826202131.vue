<template>
  <div id="articles">
    <article-item v-for="(article,index) in articles"
                  :key="index"
                  :article='article'></article-item>
  </div>
</template>

<script>
import ArticleItem from '@/views/Home/ArticleItem';
import { loadArticles } from '@/netWork/require'
export default {
  name: 'Articles',
  components: {
    ArticleItem
  },
  data () {
    return {
      boolLike: false,
      boolCollection: false,
      boolComment: false,
      title: 'javaScript',
      content: 'vue-axios-javaScript',
      articles: null,
    }
  },
  created () {
    loadArticles().then(res => {
      this.articles = res.data;
      console.log(this.articles)
    }).catch(err => {
      console.log(err)
    });
  },
  methods: {
    toDetails () {
      this.$router.push('/details');
    },
  },
}
</script>

<style scoped>
#articles {
  padding-top: 10px;
  cursor: pointer;
}

/* .feature {
  margin-top: 18px;
  display: flex;
}
.feature span {
  font-family: "iconfont";
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 10px;
}
.feature span:hover {
  color: #e67e22;
}
.active {
  color: #e67e22;
} */
</style>