import { Link } from 'react-router-dom';
import './index.css'

function Regist(){
  return(
    <div className="regist">
    <div className='regist-image'>
     <div className='regist-image-content'>
     </div>
     </div>
   <div className='rg-form-title'>欢迎注册创思设备管理系统</div>
   <div className='rg-userName'>
    <div><span>姓名</span></div>
    <input type='text' name='username' />
   </div>
   <div className='rg-email'>
    <div><span>邮箱</span></div>
    <input type='text' name='email' />
   </div>
   <div className='rg-password'>
   <div><span>密码</span></div>
    <input type='password' name='password' />
   </div>
   <div className='rg-passwordlevel'>
    密码强度
   </div>
   <div className='rg-check-agree'>
   <input type="checkbox" name="remember" value="aaa" />
   <span>我已阅读用户协议并同意</span>
   </div>
   <button>注册</button>
   <div className='to-login'>
    <span>你已有平台账号？</span>
    <Link to='/login' >用户登录</Link>
   </div>
   <div className='rg-forget-password'>
     <a href='/'>忘记密码</a>
   </div>
  </div>
  );

}


export default Regist;