import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginser:'',
    prodlist:[],
    cartlist:[]
  },
  mutations: {
    setLoginUser(state,obj){
      state.loginser=obj;
    },
    setProdList(state,obj){
      state.prodlist=[];
      state.prodlist= obj;
    },
    addCart(state,obj){
      var prod=null;
      prod=state.cartlist.find((item)=>{
        return (item.id==obj.id);
      })
      if (prod !=undefined)
        prod.count++;
      else
        state.cartlist.push(obj);
    },
    modifyCartCount(state,obj) {
      var count = parseInt(state.cartlist[obj.index].count);
      count = count + obj.num;
      if (count >= 1)
        state.cartlist[obj.index].count=count;
      else
        state.cartlist[obj.index].count=1;
    }

  },
  actions: {
  },
  modules: {
  }
})
