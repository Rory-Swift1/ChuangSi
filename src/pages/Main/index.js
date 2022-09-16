import { Link } from 'react-router-dom'
import './index.css'

function Main() {
      return (
            <div className='main'>
                  <div className='Header'>
                        <div className='Header-content'>
                              <div className='Navbar-container'>
                                    <div className='Navbar-title'>
                                          <div className='img-content'></div>
                                          <span>创思找工作</span>
                                    </div>
                                    <ul className='Navbar'>
                                          <li><a href='/'>首页</a></li>
                                          <li><a href='/'>岗位展示</a></li>
                                          <li><a href='/'>工作分类</a></li>
                                          <li><a href='/'>关于创思</a></li>
                                    </ul>
                                    <div className='Navbar-publish'>
                                          <button>发布岗位</button>
                                    </div>

                                    <div className='Navbar-login'>
                                          <Link to='/login' >登录</Link>
                                    </div>
                                    <p className='header-content-description'>
                                          260+ 岗位需求
                                    </p>
                                    <p className='header-content-description2'>
                                          预祝你在创思信息找到心仪工作
                                    </p>
                                    <p className='header-content-description3'>
                                          创思信息以“工匠精神”推动产业互联网升级，推动政府事务单位业务处理自动化，助力工业4.0转型升级！
                                    </p>
                                    <button className='show-position'>查看岗位</button>

                              </div>
                        </div>
                  </div>
                  <div className='Popular-search'>
                        <div className='search-content'>
                              <input type='text' placeholder='输入岗位关键字' />
                              <input type='text' placeholder='位置' />
                              <select  >
                                    <option>分类</option>
                                    <option>分类1</option>
                                    <option>分类2</option>
                                    <option>分类3</option>
                              </select>
                              <select  >
                                    <option>选择岗位信息</option>
                                    <option>分类1</option>
                                    <option>分类2</option>
                                    <option>分类3</option>
                              </select>
                              <button>找工作</button>
                        </div>
                        <div className='hot-words'>
                              <div className='hot-words-title'>
                                    <span>最近搜索热词：</span>
                              </div>
                              <div className='hot-words-tags'>
                                    <span>JAVA工程师</span>
                                    <span>web后端工程师</span>
                                    <span>UI/UX</span>
                                    <span>行政管理</span>
                              </div>
                        </div>
                  </div>
                  <div className='Popular-Category'>
                    <div className='card-web-design'>
                    </div>
                    <div className='Card-Script-Marketing'>
                    </div>
                    <div className='Card-Script-Progammer'></div>
                    <div className='Card-Script-Writer'></div>
                    <p className='Competition-title'>
                    创思竞争优势
                    </p>
                    <p className='Competion-description'>
                    创思信息科技发展有限公司成立于2000年，是国内智慧政务、智慧企业、智慧社区及智慧生活领域的信息化综合服务提供商，主要致力于为政企客户、社会团体和个人提供集软件开发、系统集成、IT运维、平台建设等于一体的信息化综合解决方案。 创思信息注重跟踪最新技术发展趋势，在大数据、云计算、移动互联网、人工智能、云移动设备等领域都已创建了多个具有自主知识产权且处于国内领先地位的核心技术平台。
                    </p>
                  </div>
                  <div className='Top-Companies'>
                  </div>
                  <div className='Looking'>
                        <div className='Looking-job'>

                        </div>
                        <div className='Looking-expert'>

                        </div>

                  </div>
                  <div className='Testimonial'>

                  </div>

                  <div className='Footer'>

                  </div>
            </div>
      );
}


export default Main;