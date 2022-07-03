export const setMembers = (member) => {
	return {
		type: 'SET_MEMBERS',
		payload: member,
	};
};

export const setYoutube = (data) => {
	return {
		type: 'SET_YOUTUBE',
		payload: data,
	};
};

/*
redux 작업 흐름
- 컴포넌트에서 axios데이터 요청을 해서 반환된 결과값을 action생성함수를 통해 dispatch로 해당 액션객체를 객체를 리듀서에 전달
- 리듀서는 action객체를 인수로 받아서 type에 따라 데이터를 변형한 뒤, 스토어에 전달
- 스토어는 리듀서로부터 전달받은 state정보값을 store에 저장하고 index.js를 통해서 Provider로 루트 컴포넌트 App에 데이터 전달
- 각 자식 컴포넌트들은 useSelector를 통해서 store데이터를 전달받음
- 자식 컴포넌트에서 store 전역 데이터 변경을 위해 다시 변경할 데이터를 action객체로 만들어서 dispatch로  전달

---단점
- 각 컴포넌트에 수정될 데이터가 api 서버통신을 필요로하는 비동기 데이터일 경우 axios함수 관리가 어려워짐
- 해당 문제점을 개선하기 위해서 axios데이터 통신 함수를 순수함수 형태로 따로 관리하기 위해서 redux-saga 이용

*/
