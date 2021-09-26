<template>
  <div id="details">
    <nav-bar></nav-bar>
    <div class="details">
      <h1>{{article.title}}</h1>
      <div class="introduce">
        <span>原创</span>
        <span>作者：{{article.userId}}</span>
        <span>时间：2021-8-21</span>
        <span>版权</span>
      </div>
    </div>
    <div class="article">
      <p>{{article.content}}</p>
    </div>

    <div class="end">
      <div class="endWriter">
        <span>
          <img src="~assets/imge/wallhaven-q6o81d_1920x1080.png"
               alt="">
        </span>
        <span>作者：{{article.userId}}</span>
      </div>
      <div class="endIcon">
        <span @click="like"
              :class="{active:boolLike}">&#xe619;{{article.likeNumber}}</span>
        <span @click="collection"
              :class="{active:boolCollection}">&#xe61a;</span>
      </div>
    </div>
    <publish-comment></publish-comment>
    <comments v-for="(comment,index) in comments"
              :key="index"
              :comment='comment'></comments>
  </div>
</template>

<script>

import NavBar from '@/views/navBar/NavBar'
import PublishComment from '@/views/details/PublishComment'
import Comments from '@/views/details/Comments'
import { loadArticles, getOneComment, getAllComments } from '@/netWork/require'

export default {
  name: 'Details',
  data () {
    return {
      boolLike: false,
      boolCollection: false,
      boolComment: false,
      blogsId: null,
      article: {},
      comments: [],
    }
  },
  created () {
    this.blogsId = this.$route.query.blogsId;
    loadArticles().then(res => {
      for (let i of res.data) {
        if (i.blogsId == this.blogsId) {
          this.article = i;
        }
      }
    }).catch(err => {
      console.log(err)
    });
  },
  mounted () {
    console.log(this.$qs.stringify({ blogId: this.blogsId }))
    getOneComment({ blogId: this.blogsId }).then(res => {
      // this.comments = res.data;
      console.log(res)
      console.log('getOneComment')
    }).catch(err => { })
  },
  methods: {
    like () {
      console.log('like')
      this.boolLike = !this.boolLike;
      if (this.boolLike) {
        this.article.likeNumber++;
      } else {
        this.article.likeNumber--;
      }
    },
    collection () {
      console.log('collection')
      this.boolCollection = !this.boolCollection;
    },
    commentReply () {
      console.log('commentReply')
    }
  },
  components: {
    NavBar,
    PublishComment,
    Comments
  }
}
</script>

<style scoped>
#details {
  width: 560px;
  margin: 0 auto;
  background-color: #fff;
}
.details {
  margin-top: 33px;
}
h1 {
  width: 533px;
  margin: 0 auto;
  margin-top: 10px;
}
.introduce {
  display: flex;
  width: 533px;
  height: 58px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
  background-color: rgb(250, 246, 246);
  font-size: 8px;
}
.introduce span:first-child {
  width: 35px;
  height: 20px;
  background-color: #f8bfbf;
  color: azure;
  border-radius: 5px;
  line-height: 20px;
  text-align: center;
  font-weight: 600;
  cursor: progress;
}
.introduce span:nth-child(2),
.introduce span:nth-child(3),
.endWriter span:last-child {
  margin: 19px 39px;
  font-size: 8px;
  color: #909399;
  font-weight: 600;
}
.introduce span:nth-child(4) {
  color: #409eff;
  margin-top: 40px;
  margin-left: 198px;
}
.article {
  width: 533px;
  margin: 20px auto;
  height: 300px;
  background-color: skyblue;
  font-size: 8px;
}

.endWriter span:last-child {
  margin: 0 15px;
}
.endIcon span {
  font-family: "iconfont";
  font-size: 8px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 28px;
  cursor: pointer;
}
.endIcon span {
  margin: 0 18;
}
.feature span:hover {
  color: #e67e22;
}
.active {
  color: #e67e22;
}
.end {
  display: flex;
  width: 533px;
  height: 38px;
  margin: 0 auto;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.1);
}
.endWriter {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 18px;
}
.endWriter span:first-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}
.endIcon {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-right: 10px;
}
</style>


