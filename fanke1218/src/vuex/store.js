import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		orderList: []
	},
	mutations: {
		add_order(state, item){
			var flag = false;
			state.orderList.forEach(function(n, index, arr){
				if(n.name === item.name){
					flag = true;
					arr[index] = item;
				}
			});
			if(!flag){
				state.orderList.push(item);
			}
		}
	},
	actions: {
		addOrder({commit}, item){
			commit("add_order", item);
		}
	},
	getters: {
		getOrderList:function(state){
			return state.orderList;
		}
	}
});