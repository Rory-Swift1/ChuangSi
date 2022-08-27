import './index.css'
import {Link} from 'react-router-dom'

function Login(){
  return(
      <div className="login">
        <div className='login-image'>
         <div className='image-content'>

         </div>
         </div>
       <div className='form-title'>欢迎登录创思设备管理系统</div>
       <div className='email'>
        <div><span>邮箱</span></div>
        <input type='text' name='email' />
       </div>
       <div className='password'>
       <div><span>密码</span></div>
        <input type='password' name='password' />
       </div>
       <div className='check'>
       <input type="checkbox" name="remember" value="aaa" />
       <span>记住我</span>
       </div>
       <div className='forget-password'>
         <a href='/'>忘记密码</a>
       </div>
       <button>登录</button>
       <div className='to-regist'>
        <span>你还没有账号？</span>
        <Link to='/regist' >注册账号</Link>
       </div>
      </div>
  );

}


export default Login;