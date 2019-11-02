// component/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
     type:Boolean,
     value:false
    },
    count:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesImg:"images/like.png",
    noImg:"images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
     let like = this.properties.like;
     let count = this.properties.count;
      count = like?count-1:count+1;
      this.setData({
        count:count,
        like:!like
      })


      //激活
      let behavior = this.properties.like?'like':'cancle'

      this.triggerEvent('like',{
        behavior:behavior
      },{})
    }

  }
})
