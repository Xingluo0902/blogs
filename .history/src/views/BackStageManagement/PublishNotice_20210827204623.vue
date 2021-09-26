<template>
  <div id="creation">
    <el-button type="primary"
               @click="$router.go(-1)">返回</el-button>
    <div class="content">
      <el-form ref="article"
               :model="notice"
               label-width="80px">

        <el-form-item>
          <el-input v-model="notice.title"
                    placeholder="请输入标题..."></el-input>
        </el-form-item>
        <el-form-item>
          <el-col :span="11">
            <el-date-picker type="date"
                            placeholder="选择日期"
                            v-model="notice.date1"
                            style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line"
                  :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间"
                            v-model="notice.date2"
                            style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-tiptap v-model="notice.content"
                     :extensions="extensions"
                     placeholder="请输入内容..."
                     style="height:300px" />
        </el-form-item>
        <el-button type="primary"
                   class="publish"
                   @click="publish">发布公告</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import NavBar from '@/views/navBar/NavBar';
import { publishNewNotice } from '@/netWork/require';
import {
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  ListItem,
  BulletList,
  OrderedList,
  TextAlign,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  FormatClear,
  TextColor,
  TextHighlight,
  Preview,
  Link,
  Image,
  Fullscreen,
  SelectAll,
  FontType,
  FontSize
} from 'element-tiptap';

export default {
  name: 'Creation',
  components: {
    NavBar
  },
  data () {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }), // 在气泡菜单中渲染菜单按钮
        new Underline({ bubble: true, menubar: false }), // 在气泡菜单而不在菜单栏中渲染菜单按钮
        new Italic(),
        new Strike(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TextAlign(),
        new History(),
        new Table(),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        new FormatClear(),
        new TextColor(),
        new TextHighlight(),
        new Preview(),
        new Fullscreen(),
        new SelectAll(),
        new FontType(),
        new FontSize(),
        new Link(),
        new Image()
      ],
      notice: {
        title: '',
        date1: '',
        date2: '',
        content: ''
      }
    }
  },
  methods: {
    publish () {
      let publishNotice = {
        noticeTitle: this.title,
        noticeContent: this.content,
        // dateTime: this.date1 + this.date2
      }
      console.log(this.$qs.stringify(publishNotice))
      //   publishNewNotice(this.$qs.stringify(this.notice)).then(res => {
      //     console.log(res);
      //   }).catch(err => {
      //     console.log(err);
      //   })
    }
  },

}
</script>

<style scoped>
#creation {
  height: 100vh;
  background-size: cover;
}

.content {
  width: 78%;
  margin: 0 auto;
  padding-top: 24px;
}
.publish {
  margin-left: 50%;
}
</style>