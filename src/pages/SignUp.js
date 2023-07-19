import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSignupPage = styled.div`
  .container {
    display: flex;
    border: 1px solid #cdcdcd;
    padding: 48px 16px 16px;

    .inputform {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 40px;

      &:first-child {
        margin-top: 0;
      }
    }

    .inputName {
      width: 144px;
      font-size: 18px;
    }

    input {
      font-size: 16px;
      width: 360px;
      border: none;
      border-bottom: 1px solid gray;
      padding-bottom: 4px;

      &:focus {
        outline: none;
      }

      &::placeholder {
        font-size: 14px;
      }
    }

    .buttonContainer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 36px;
      gap: 16px;
    }
    .cancelBtn {
      background-color: white;
      color: black;
      border-radius: 10px;
      border: 1px solid gray;
      width: 128px;
      height: 44px;
      font-size: 16px;
    }
    .joinBtn {
      background-color: black;
      color: white;
      border-radius: 10px;
      border: none;
      width: 128px;
      height: 44px;
      font-size: 16px;
    }

    .buttons {
      display: flex;
      justify-content: end;
      gap: 8px;

      button {
        font-size: 12px;
        color: #cdcdcd;
        &:hover {
          color: #000000;
        }
      }
    }
  }
`;

const SignUpPage = () => (
  <StyledSignupPage>
    <div className='container'>
      <form className='container__form'>
        <div className='inputform'>
          <h4 className='inputName'>아이디</h4>
          <input type='text' placeholder='아이디를 입력해주세요.' />
        </div>
        <div className='inputform'>
          <h4 className='inputName'>비밀번호</h4>
          <input type='password' placeholder='비밀번호를 입력해주세요.' />
        </div>
        <div className='inputform'>
          <h4 className='inputName'>비밀번호 확인</h4>
          <input type='password' placeholder='비밀번호를 재입력해주세요.' />
        </div>
        <div className='inputform'>
          <h4 className='inputName'>이메일</h4>
          <input type='email' placeholder='이메일을 입력해주세요.' />
        </div>
        <div className='inputform'>
          <h4 className='inputName'>닉네임</h4>
          <input type='text' placeholder='닉네임을 입력해주세요.' />
        </div>
        <div className='buttonContainer'>
          <button type='button' className='joinBtn'>
            회원가입
          </button>
          <button type='button' className='cancelBtn'>
            취소
          </button>
        </div>
        <div className='buttons'>
          <Link to='/'>
            <button>홈</button>
          </Link>
          <Link to='/auth/signin'>
            <button>로그인</button>
          </Link>
        </div>
      </form>
    </div>
  </StyledSignupPage>
);

export default SignUpPage;
