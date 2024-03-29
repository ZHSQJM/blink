import { ClassicModel} from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'
let classic = new ClassicModel();
let like = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,
    latest:true,
    first:false,
	likecount:0,
	likeStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classic.getLatest((res)=>{
     this.setData({
       classic:res
     });
    });
     
  },


  onLike:function(event){
  let behavior = event.detail.behavior;
    like.like(behavior, this.data.classic.id,this.data.classic.type)
  },

  onPrevious:function(event){
       this._updateClassic('next')
  },
  onNext:function(event){

       this._updateClassic('previous')
  },
  
  
  /**上一页 或者下一页*/
   _updateClassic: function (nextOrPrevious) {

        const index = this.data.classic.index
        classic.getClassic(index, nextOrPrevious, (res) => {
			this._getLikeStatus(res.id,res.type)
          this.setData({
            classic: res,
            latest: classic.isLatest(res.index),
            first: classic.isFirst(res.index)
          })
        })
      },
	  
	_getLikeStatus:function(artId,category){
		
		like.getClassicLikeStatus(artId,category,(res)=>{
			this.setData({
				likecount:res.fav_nums,
				likeStatus:res.like_status
				})
		})
	},
	
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})