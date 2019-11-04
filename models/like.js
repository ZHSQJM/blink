 import {HTTP} from '../utils/http.js'

 class LikeModel extends HTTP{

   /**点击喜欢与不喜欢*/
   like(behavior,ArtId,category){
     let url = behavior == 'like'?'like':'like/cancle'
     this.request({
       url:'mock/classic/latest',
       method:'GET',
       data:{
         ArtId: ArtId,
         category: category
       }
     });
   }
   
   /*获取喜欢的状态**/
   getClassicLikeStatus(artId,category,sCallback){
	   
	   this.request({
		   url:`mock/classic/${category}/${artId}/favior`,
		   success:sCallback
	   })
	   
   }
 }
export {LikeModel}