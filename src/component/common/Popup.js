import { forwardRef, useState, useImperativeHandle } from 'react';

//1단계 - 기존컴포넌트 함수를 화살표 함수 형식으로 변경
//2단계 - 해당 컴포넌트 함수를 forwrardRef()의 콜백으로 전달
//3단계 - 콜백으로 전달한 함수의 두번째 파라미터로 ref추가

/*
	기본적으로 react는 단방향 데이터 바인딩 (부모 -> 자식)
	자식에서 부모로 데이터를 전달하려면 부모에서 자식 컴포넌트를 useRef로 참조
	자식에서 리턴되는 값이 있어야지 부모에서 자식 컴포넌트를 참조
	forwrardRef()는 자식 JSX 요소를 ref에 담아서  부모요소로 리턴가능
	만약 내보낼 값이 JSX가 아닌 특정 커스텀 객체일떄는 useImperativeHandle을 사용해야 함
	사용방법은 위와 동일
*/

const Popup = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
		};
	});

	return (
		<>
			{Open && (
				<aside className='pop'>
					<div className='con'>
						{props.children}
						<span className='close' onClick={() => setOpen(false)}>
							close
						</span>
					</div>
				</aside>
			)}
		</>
	);
});

export default Popup;
