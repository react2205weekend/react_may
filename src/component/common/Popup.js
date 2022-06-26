import { forwardRef, useState, useImperativeHandle } from 'react';

//1단계 - 기존컴포넌트 함수를 화살표 함수 형식으로 변경
//2단계 - 해당 컴포넌트 함수를 forwrardRef()의 콜백으로 전달
//3단계 - 콜백으로 전달한 함수의 두번째 파라미터로 ref추가

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
