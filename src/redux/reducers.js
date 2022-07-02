/*
  Reducer : 전역 데이터인 store에 초기 데이터를 전달해주거나 기존 데이터를 변경 (변경자)
*/
import { combineReducers } from 'redux';

const initMember = {
	members: [
		{
			name: 'Julia',
			position: 'CEO',
			pic: 'member1.jpg',
		},
		{
			name: 'David',
			position: 'Vice President',
			pic: 'member2.jpg',
		},
		{
			name: 'Emily',
			position: 'Back-end Dev',
			pic: 'member3.jpg',
		},
		{
			name: 'Paul',
			position: 'Front-end Dev',
			pic: 'member4.jpg',
		},
		{
			name: 'Peter',
			position: 'UI Designer',
			pic: 'member5.jpg',
		},
	],
};

//초기데이터를 state에 저장했다가
//추후 action개개체가 전달되면
//action객체의 타입에 따라 기존 데이터를 변경해서 리턴
const memberReuder = (state = initMember, action) => {
	switch (action.type) {
		case 'SET_MEMBERS':
			return { ...state, members: action.payload };

		default:
			return state;
	}
};

//전달된 각각의 reducer를 하나로 합쳐서 반환
const reducers = combineReducers({ memberReducer });

export default reducers;
