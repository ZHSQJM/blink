// component/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      index:{
          type:String,
          //监听这个变量改变的时候
          observer: function (newVal, oldVal, changePath) {
            let val = newVal < 10 ? '0' + newVal : newVal;
              this.setData({
                _index: '08'
              })
        }
      },
     
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    year:'',
    month:'',
    _index:''
  },


attached:function(){
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  this.setData({
    year:year,
    month:this.data.months[month]
  });
},
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
