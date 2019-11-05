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
	 
 }
 
 export {BookModel}