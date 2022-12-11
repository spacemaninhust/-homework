import React ,{ FC }from "react"
import { NavLink ,useLocation} from "react-router-dom"
import "./index.css"
const Detail: FC = () =>{
    // 获得传递的参数
    const location = useLocation()
    const data = location.state.data
    return (
        <div className={"detail"}>
            <nav className="nav">
                <NavLink
                    to="/Home"
                    end
                    className={"nav-item"}
                >
                    人员管理/
                </NavLink>
                <div className={"nav-active"}>
                    查看详情
                </div>
            </nav>
            <div className="detail-information">
                <div className="detail-information-title">
                    人员详细信息
                </div>
                <div className="avatar">
                    <div>头像:</div>
                    <img src={data.avatar} className="avatar-img" />
                </div>
                <div className="name">
                    <div>
                        姓名:
                    </div>
                    <div className="information">
                        {data.name}
                    </div>
                </div>
                <div className="name">
                    <div>
                        专业:
                    </div>
                    <div className="information">
                        {data.profession}
                    </div>
                </div>
                <div className="name">
                    <div>
                        年级:
                    </div>
                    <div className="information">
                        {data.grade}
                    </div>
                </div>
                <div className="name">
                    <div>
                        性别:
                    </div>
                    <div className="information">
                        {data.gender}
                    </div>
                </div>
                <div className="name">
                    <div>
                        电话:
                    </div>
                    <div className="information">
                        {data.tel}
                    </div>
                </div>
                <div className="name">
                    <div>
                        邮箱:
                    </div>
                    <div className="information">
                        {data.mail}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail