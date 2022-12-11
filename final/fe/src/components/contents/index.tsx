import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Table,Tag,Button } from "antd"
import type { ColumnsType } from 'antd/es/table'
import 'antd/lib/table/style/css'
import 'antd/lib/tag/style/css'
import action from './action.svg'
import action2 from './action2.svg'
import { DataType } from "../datatype"
import Modals from "../modals"
import{ Layout,message } from 'antd'
import 'antd/lib/menu/style/css'
import 'antd/lib/layout/style/css'
import Search from '../../components/search'
import Delete from "../delete"
import axios from "axios"
const { Content } = Layout
// 数据
const data: DataType[] = []
const Contents: React.FC = () => {
    const nav = useNavigate()
    const [open,setOpen] = useState(true)
    const [total,Settotal] = useState(0)
    const [pageindex,setPageindex] = useState(1)
    const [size,setSize] = useState(5)
    const [datas,setdatas] = useState(data)
    const [msg,setmsg] = useState('')
    const [gender,setGender] = useState({})
    const [grade,setGrade] = useState({})
    // 页码
    const [currentNum,setCurrentNum] = useState(1)
    const linkdetail = (e:DataType)=>{
        const index = datas.indexOf(e)
        datas[index].hover = !datas[index].hover
        // 深拷贝并且更新数据重新渲染
        setdatas([...datas])
        nav('/Home/detail',{state:{data:e}})
    }
    // 使用axios获得该用户数据
    const getUserList = (page:number,pageSize:number,msg:string,gender:object,grade:object)=>{
        // 更新index与size     
        setPageindex(page)
        setSize(pageSize)
        // 获取数据，传递三个参数分别为msg，grade，gender
        axios.get('/api/stu/lists/',{
                    params: {
                      'page_number': page,
                      'page_size': pageSize,
                      'msg':msg,
                      'gender':String(gender),
                      'grade':String(grade)
                    }
                })
        .then((res)=>{
            // 成功
            if(res.data.code === 1){
                for(let i = 0;i < res.data.list.length;i++){
                    datas[i] = res.data.list[i]
                }
                datas.splice(res.data.list.length)
                setdatas([...datas])
                Settotal(res.data.size)
            }
            // 失败
            else if(res.data.code === -1){
                message.error('不存在该用户!')
                datas.splice(0)
                setdatas([...datas])
                Settotal(0)
            }else{
                message.warning('未登录!')
                datas.splice(0)
                setdatas([...datas])
                Settotal(0)
            }
        })
    }
    // 初次渲染
    useEffect(()=>{
        getUserList(1,5,'',{},{})
    },[])
    // 鼠标悬浮在action图标上出现弹窗，图标变色
    const Action = (e:DataType)=>{
        if(open){
            const index = datas.indexOf(e)
            datas[index].hover = !datas[index].hover
            // 深拷贝并且更新数据重新渲染
            setdatas([...datas])
        }
    }
    const Actions = (e:DataType)=>{
        setOpen(false)
        const index = datas.indexOf(e)
        datas[index].hover = true
        // 深拷贝并且更新数据重新渲染
        setdatas([...datas])
    }
    const Actionss = (e:DataType)=>{
        setOpen(true)
        const index = datas.indexOf(e)
        datas[index].hover = false
        // 深拷贝并且更新数据重新渲染
        setdatas([...datas])
    }
    // 定义删除函数，删除用户对应数据
    const Deletes = (e:DataType)=>{
        // 删除后端数据后重新渲染
        axios.post('/api/stu/delete',{
            data:e
        })
        .then(()=>{
            // 删除后应该重新渲染数据
            getUserList(pageindex,size,msg,gender,grade)
        })
    }
    const getPageContent=(page:number,pageSize:number)=>{
        setCurrentNum(page)
        getUserList(page,pageSize,msg,gender,grade)
    }
    // 编辑完成
    const editFinish = ()=>{
        // 更新datas？可是后端数据已经修改完毕，所以直接重新渲染下
        getUserList(pageindex,size,msg,gender,grade)
    }
    // getData,获得子组件的input框值
    const getData = (msg:string)=>{
        setmsg(msg)
    }
    // getGender,获得性别
    const getGender = (gender:object)=>{
        setGender(gender)
        setCurrentNum(1)
        getUserList(1,5,msg,gender,grade)
    }
    // getGrade,获得性别
    const getGrade = (grade:object)=>{
        setGrade(grade)
        setCurrentNum(1)
        getUserList(1,5,msg,gender,grade)
    }
    // 传给子组件重置函数
    const resetpage = ()=>{
        setCurrentNum(1)
    }
    // 定义columns
    const columns: ColumnsType<DataType> = [
        {
            title: '头像' ,
            dataIndex: 'avatar',
            key: 'avatar',
            render:(_,{avatar})=>(
                <>
                    <img src={avatar} alt="avatar" style={{width:'60px',padding:'4px'}}/>
                </>
            )
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '专业',
            dataIndex: 'profession',
            key: 'profession',
        },
        {
            title: '年级',
            dataIndex: 'grade',
            key: 'grade',
        },
        {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
            // 处理男女不同颜色标签
            render: (_, { gender }) =>(
                <>
                    <Tag color={gender==='男'?'geekblue':'volcano'} key={gender}>
                        {gender}
                    </Tag>
                </>
            )
        },
        {
            title: '电话',
            dataIndex: 'tel',
            key: 'tel',
        },
        {
            title: '邮箱',
            dataIndex: 'mail',
            key: 'mail',
        },
        {
            title: '操作',
            key: 'action',
            // 进行操作的图标
            render:(_,record)=>(
                <div>
                    {/* 分情况选择图标 */}
                    {record.hover?<img onMouseLeave={()=>Action(record)} src={action2} alt="action2" width={'28px'}/>:
                    <img onMouseOver={()=>Action(record)} src={action} alt="action" width={'28px'}/>}
                    {/* 分情况决定是否弹出action框 */}
                    {record.hover?
                        <div onMouseEnter={()=>Action(record)} onMouseLeave={()=>Action(record)} style={{boxShadow:'2px 2px 2px 0',position:'absolute',zIndex:'999',left:'40px',top:'40px',backgroundColor:'rgb(0,0,0,0)',width:'80px'}}>
                            <Button onClick={()=>linkdetail(record)} style={{backgroundColor:'white',border:'0',height:'30px',marginTop:'0px',marginLeft:'8px',width:'70px'}}>
                                <div style={{fontSize:'16px'}}>
                                    查看
                                </div>
                            </Button>
                            <Modals editFinish={editFinish} Actions={Actions} Actionss={Actionss} type={'edit'} name={'编辑'} data={record}/>
                            <Delete Deletes={Deletes} data={record}/>
                        </div>
                        :<></>}
                </div>
            )
        }
    ]
    return (
        <>
            <Search getGrade={getGrade} getGender={getGender} resetpage={resetpage} editFinish={editFinish} getUserList={getUserList} getData={getData}/>
            <Content
                className="site-layout-background"
                style={{
                    margin: '10px 14px',
                    padding: 10,
                    minHeight: 280,
                }}
            >
                {/* pagination设置底部的分页条 */}
                <Table columns={columns} dataSource={datas} pagination={{current:currentNum,total:total,simple:true,defaultCurrent:1,pageSize:5,onChange:getPageContent}}/>
            </Content>
        </>
    )
}
export default Contents