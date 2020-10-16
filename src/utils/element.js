// 引入vuex
import Vue from 'vue'
// 引入对话框和消息框的组件
import { MessageBox,Message,Button} from 'element-ui'
// 把相关的组件或者组件中的属性或者方法挂载到Vue的组件中
Vue.use(Button)
Vue.prototype.$msgbox = MessageBox; // 组件中通过this.$msgbox()显示提示框
Vue.prototype.$alert = MessageBox.alert; // 组件中通过this.$alert()显示对话框
Vue.prototype.$message = Message; // 组件中通过this.$message()显示消息框