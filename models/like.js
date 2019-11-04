 import {HTTP} from '../utils/http.js'

 class LikeModel extends HTTP{

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
   
   
   getClassicLikeStatus(artId,category,sCallback){
	   
	   this.request({
		   url:`/mock/classic/${category}/${artId}/favor`,
		   success:sCallback
	   })
	   
   }
 }
export {LikeModel}