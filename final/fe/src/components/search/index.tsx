// 此组件为搜索以及筛选组件
import React, { ChangeEvent, useState , FC } from 'react'
import { Button,Cascader, Divider } from 'antd'
import 'antd/lib/button/style/css'
import Modals from '../modals'
import {DataType} from '../datatype/index'
// 定义数据
const data:DataType ={
    key:'',
    avatar:'',
    name:'',
    profession:'',
    grade:'',
    gender:'',
    tel:'',
    mail:'',
    hover:false
}
// 定义下拉框的样式
const dropdownRender = (menus: React.ReactNode) => (
    <div style={{ height:140 }}>
      {menus}
      <Divider style={{ margin: 14 }} />
    </div>
)
const grades = [   
    {
        value: '2019级',
        label: '2019级'
    },
    {
        value: '2020级',
        label: '2020级'
    },
    {
        value: '2021级',
        label: '2021级'
    },
    {
        value: '2022级',
        label: '2022级'
    },
]
const genders = [
    {
        value: '男',
        label: '男'
    },
    {
        value: '女',
        label: '女'
    }
]
interface Props{
    getData:(e:string)=>void
    getUserList:(a:number,b:number,c:string,d:object,e:object)=>void
    editFinish:()=>void
    resetpage:()=>void
    getGender:(e:object)=>void
    getGrade:(e:object)=>void
}
const Search: FC<Props> = (props) => {
    // 获得input框输入内容
    const [value,setvalue] = useState("")
    const [gender,setGender] = useState({})
    const [grade,setGrade] = useState({})
    const [newgrade,setNewgrade] = useState([''])
    const [newgender,setNewgender] = useState([''])
    const getvalue = (e:ChangeEvent<HTMLInputElement>)=>{
        setvalue(e.target.value)
        props.getData(e.target.value)
    }
    const search = ()=>{
        // 重置页面再搜索
        props.resetpage()
        props.getUserList(1,5,value,gender,grade)
    }
    const getgender = (values:object) =>{
        if(values === undefined){
            setGender({})
            // 获得数据后类似搜索向父组件传值
            props.getGender({})
        }else{
            setGender(values)
            // 获得数据后类似搜索向父组件传值
            props.getGender(values)
            setNewgender([String(values)])
        }
    }
    const getgrade = (values:object) =>{
        if(values === undefined){
            setGrade({})
            // 获得数据后类似搜索向父组件传值
            props.getGrade({})
        }else{
            setGrade(values)
            // 获得数据后类似搜索向父组件传值
            props.getGrade(values)
            setNewgrade([String(values)])
        }
    }
    const reset = ()=>{
        setvalue('')
        setGrade({})
        setGender({})
        setNewgrade([''])
        setNewgender([''])
        // 向父组件传值
        props.getData('')
        props.getGender({})
        props.getGrade({})
        // 重置页面再搜索
        props.resetpage()
        props.getUserList(1,5,'',{},{}) 
    }
    return (
        <div style={{display:'flex'}}>
            {/* 添加用户按钮 */}
            <Modals editFinish={props.editFinish} Actions={()=>{console.log(1)}} Actionss={()=>{console.log(1)}} name='添加用户' type='add' data={data}/>
            {/* 输入框 */}
            <input value={value} onChange={(e)=>getvalue(e)} type="text" placeholder='姓名' style={{border:'0',boxShadow:'2px 2px 2px 0' ,height:'29px',marginTop:'8px',marginLeft:'20px'}}/>
            {/* 搜索按钮 */}
            <Button onClick={search} style={{backgroundColor:'#1890ff',border:'0',boxShadow:'2px 2px 2px 0 ',height:'29px',marginTop:'8px',marginLeft:'20px'}} >
                <div style={{color:'white'}}>
                    搜索
                </div>
            </Button>
            <div style={{marginTop:'11px',marginLeft:'5px'}}>选择年级:</div>
            <Cascader allowClear={false} value={newgrade} style={{width:'120px',marginLeft:'20px',marginTop:'8px'}} onChange={getgrade} options={grades} dropdownRender={dropdownRender} />
            <div style={{marginTop:'11px',marginLeft:'5px'}}>选择性别:</div>
            <Cascader allowClear={false} value={newgender} style={{width:'120px',marginLeft:'20px',marginTop:'8px'}} onChange={getgender} options={genders} dropdownRender={dropdownRender} />
            {/* 重置按钮 */}
            {/* 点击此按钮清空输入框以及选择框 */}
            <Button onClick={reset} style={{backgroundColor:'#1890ff',border:'0',boxShadow:'2px 2px 2px 0',height:'29px',marginTop:'8px',marginLeft:'20px'}} type='default'>
                <div style={{color:'white'}}>
                    重置
                </div>
            </Button>
        </div>
    )
}
export default Search