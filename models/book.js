import {HTTP} from '../utils/http-p.js'

 class BookModel extends HTTP{
	 
	 getHotList(){
		 return this.request({
			 url:'mock/book/hot_list'
			 })
		 
	 }
	 
	 getMyBootCount(){
		 return this.request({
			 url:'mock/book/favor/count'
		 })
	 }
	 
	 getDetail(bid){
		 return this.request({
			 url:`mock/book/${bid}/detail`
		 })
	 }
	 getLikeStatus(bid){
	 		 return this.request({
	 			 url:`mock/book/${bid}/favor`
	 		 })
	 }
	 
	 getComments(bid){
	 		 return this.request({
	 			 url:`mock/book/${bid}/short_comment`
	 		 })
	 }
	 
 }
 
 export {BookModel}