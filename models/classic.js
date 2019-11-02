import {HTTP} from '../utils/http.js'

class ClassicModel extends HTTP{

  //获取最新一期的周刊
    getLatest(callBack){
      this.request({
        url: "mock/classic/latest",
        success: (res) => {
          callBack(res.data)
        }
      });
    }
}
export { ClassicModel}