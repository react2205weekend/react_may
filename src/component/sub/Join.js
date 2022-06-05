import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

function Join() {
	const initVal = {
		userid: '',
		email: '',
		pwd1: '',
		pwd2: '',
	};

	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});

	//순서3 인수로 전달된 값으로 인증처리해서 에러객체값 반환함수
	const check = (val) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[!@#$%^&*()_+]/;

		//userid체크 항목
		if (val.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		//email체크 항목
		if (val.email.length < 8 || !/@/.test(val.email)) {
			errs.email =
				'이메일은 최소 8글자 이상 @를 포함해주세요.';
		}
		//pwd1 체크 항목
		if (
			val.pwd1.length < 5 ||
			!eng.test(val.pwd1) ||
			!num.test(val.pwd1) ||
			!spc.test(val.pwd1)
		) {
			errs.pwd1 =
				'비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요';
		}
		//pwd2 체크 항목
		if (val.pwd1 !== val.pwd2) {
			errs.pwd2 = '비밀번호 2개를 동일하게 입력하세요';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log('name', name);
		console.log('value', value);
		//객체에서 변수값을 key에 넣을수가 없음
		//객체에서 변수값을 key값으로 활용하러면 객체안에서 변수명을 대괄호로 묶어줌
		//setVal({...Val, userid: 현재입력된 값})
		setVal({ ...Val, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//순서2 - check함수 호출헤서 Val값에 담겨있는 값을
		//check함수의 인수로 전달해서 err객체를 생성해서 반환
		//반환된 에러객체는 다시 Err state에 옮겨담음
		setErr(check(Val));
	};

	useEffect(() => {
		console.log(Err);
	}, [Err]);

	return (
		<Layout name={'Join'}>
			{/* 순서1: 전송버튼을 눌러서 handleSubmit함수 호출 */}
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>회원가입 폼 양식</legend>
					<table border='1'>
						<caption>회원가입 정보입력</caption>
						<tbody>
							{/* userid */}
							<tr>
								<th scope='row'>
									<label htmlFor='userid'>USER ID</label>
								</th>
								<td>
									<input
										type='text'
										id='userid'
										name='userid'
										placeholder='아이디를 입력하세요'
										value={Val.userid}
										onChange={handleChange}
									/>
								</td>
							</tr>

							{/* password */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd1'
										id='pwd1'
										placeholder='비밀번호를 입력하세요'
										value={Val.pwd1}
										onChange={handleChange}
									/>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>RE-PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd2'
										id='pwd2'
										placeholder='비밀번호를 재입력하세요'
										value={Val.pwd2}
										onChange={handleChange}
									/>
								</td>
							</tr>

							{/* email */}
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-MAIL</label>
								</th>
								<td>
									<input
										type='text'
										id='email'
										name='email'
										placeholder='이메일 주소를 입력하세요'
										value={Val.email}
										onChange={handleChange}
									/>
								</td>
							</tr>

							{/* btnSet */}
							<tr>
								<th colSpan='2'>
									<input type='reset' value='CANCEL' />
									<input type='submit' value='SUBMIT' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}

export default Join;
