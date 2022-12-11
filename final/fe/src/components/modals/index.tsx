// 此组件为点击添加人员与编辑的组件
import React, { useState , FC  } from 'react'
import {DataType} from '../datatype/index'
import {
    Cascader,
    Form,
    Input,
    Select,
    Divider
} from 'antd'
import 'antd/lib/form/style/css'
import 'antd/lib/cascader/style/css'
import { Button, Modal } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import axios from 'axios'
import 'antd/lib/modal/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/upload/style/css'
// 定义年级选择
const grades = [
    {
        value: '2022级',
        label: '2022级',
    },
    {
        value: '2021级',
        label: '2021级',
    },
    {
        value: '2020级',
        label: '2020级',
    },
    {
        value: '2019级',
        label: '2019级',
    }
]
// 定义性别选择
const genders = [
    {
        value: '男',
        label: '男',
    },
    {
        value: '女',
        label: '女',
    }
]
// 定义表单样式
const formItemLayout = {
    labelCol: {
      xs: { span: 20 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
}
// 定义两个下拉框的样式
const dropdownRender = (menus: React.ReactNode) => (
    <div style={{ height:70 }}>
      {menus}
      <Divider style={{ margin: 14 }} />
    </div>
)
const dropdownRender1 = (menus: React.ReactNode) => (
    <div style={{ height:130 }}>
      {menus}
      <Divider style={{ margin: 20 }} />
    </div>
)
// 定义电话号头部码选择框
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
            <Select.Option value="86">+86</Select.Option>
            <Select.Option value="87">+87</Select.Option>
        </Select>
    </Form.Item>
)
// Props
interface Props{
    name:string
    type:string
    data:DataType
    Actions:(e:DataType)=>void
    Actionss:(e:DataType)=>void
    editFinish:()=>void
}

const Modals: FC<Props> = (props) => {
    const [form] = Form.useForm()
    const [open, setOpen] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [modalText, setModalText] = useState('')
    const [valid,setValid] = useState(false)
    const [value,setValue] = useState({})
    const showModal = () => {
        setOpen(true)
        props.Actions(props.data)
    }
    const handleOk = () => {
        // 判断数据是否合法
        if(valid){
            setModalText('数据提交中……')
            setConfirmLoading(true)
            // 在这里提交数据到后端，数据为value
            // 如果是添加用户直接提交
            if(props.type === 'add'){
                axios.post('/api/stu/update',{data:value})
                .then(()=>{
                    // 得到后端res，
                    // 这里提交数据前已经验证是否登录以及数据是否合法，因此不需要额外操作
                    // 添加的用户会默认在最后一页，因此不需要刷新也不需要重新渲染?
                    props.editFinish()
                })
            }
            // 如果是编辑用户，需要将数据的key传入后端
            else{
                axios.post('/api/stu/update',{data:value,key:props.data.key})
                .then(()=>{
                    // 得到后端res，
                    // 这里提交数据前已经验证是否登录以及数据是否合法，因此不需要额外操作
                    // 编辑后的数据需要重新渲染，这里不好的一点是数据与显示分离了，调用父组件的方法重新渲染下数据
                    // 调用editFinish函数
                    props.editFinish()
                })
            }
            // 延时2秒钟
            setTimeout(() => {
            // 清空数据
            form.resetFields()
            setOpen(false)
            setConfirmLoading(false)
            setModalText('')
            props.Actionss(props.data)
            }, 1000)
        }else{
            setModalText('数据不合法!')
        }
    }
    // 取消按钮，open设置为false
    const handleCancel = () => {
        setOpen(false)
        setModalText('')
        props.Actionss(props.data)
    }
    // finish后代表form表单填写完毕，但是此时不应该提交数据到后端
    // 应该等到handleOK后提交，创建一个变量存储values供handleOk使用
    const onFinish = (values: object) => {
        // 将values赋值
        setValue(values)
        setValid(true)
        setModalText('数据合法!')
    }
    const title = props.type==='add'?'添加':'编辑'
    return (
        <>
            {/* 两个地方使用了此Modal，分情况选择button */}
            {props.type==='add'?
                <Button onClick={showModal} type="default" style={{backgroundColor:'#1890ff',border:'0',boxShadow:'2px 2px 2px 0 ',height:'30px',marginTop:'8px',marginLeft:'14px'}}>
                    <div style={{display:'flex'}}>
                        <PlusCircleOutlined style={{ fontSize: '18px', color: 'white' ,marginTop:'3px',marginBottom:'4px'}}/>
                        <div style={{color:'white',fontSize:'16px',marginLeft:'10px',marginTop:'0px'}}>
                            {props.name}
                        </div>
                    </div>
                </Button>
                :
                <Button onClick={showModal} type="default" style={{backgroundColor:'white',border:'0',height:'30px',marginTop:'0px',marginLeft:'8px',width:'70px'}}>
                    <div style={{fontSize:'16px'}}>
                        {props.name}
                    </div>
                </Button>
            }
            <div >
                <Modal
                    title={title+'用户'}
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    okText={'提交'}
                    cancelText={'取消'}
                    style={{textAlign:'center'}}
                    // 每次打开都是新的值
                    destroyOnClose={true}
                >
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                            prefix: '86',
                            // 不同情况判断
                            grade: props.type==='add'?'':[props.data.grade],
                            gender: props.type==='add'?'':[props.data.gender]
                        }}
                        scrollToFirstError
                    >
                        {/* 姓名 */}
                        <Form.Item
                            initialValue={props.data.name}
                            name="nickname"
                            label="姓名"
                            tooltip="用户姓名"
                            rules={[{ required: true, message: '请输入姓名!', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>
                        {/* 专业 */}
                        <Form.Item
                            initialValue={props.data.profession}
                            name="profession"
                            label="专业"
                            tooltip="用户专业"
                            rules={[{ required: true, message: '请输入专业!'}]}
                        >
                            <Input />
                        </Form.Item>
                        {/* 年级选择，设置了19-22四个年级 */}
                        <Form.Item
                            name="grade"
                            label="年级"
                            // initialValue={props.data.grade}
                            rules={[
                            { type: 'array', required: true, message: '请选择年级!' },
                            ]}
                        >
                            <Cascader options={grades} dropdownRender={dropdownRender1} />
                        </Form.Item>
                        {/* 性别选择，只有男女 */}
                        <Form.Item
                            name="gender"
                            label="性别"
                            // initialValue={props.data.gender}
                            rules={[
                            { type: 'array', required: true, message: '请选择性别!' },
                            ]}
                        >
                            <Cascader options={genders} dropdownRender={dropdownRender} />
                        </Form.Item>
                        {/* 电话号码，判断是否合法 */}
                        <Form.Item
                            name="tel"
                            label="电话"
                            initialValue={props.data.tel}
                            rules={[
                            { required: true, message: '请输入电话!' },
                            {
                                pattern:
                                /(^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\d{8}$)/,
                                message:'电话号码不合法!'
                            }
                            ]}
                        >
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        </Form.Item>
                        {/* email，判断是否合法 */}
                        <Form.Item
                            name="email"
                            label="邮箱"
                            initialValue={props.data.mail}
                            rules={[
                            {
                                type: 'email',
                                message: '邮箱不合法!',
                            },
                            {
                                required: true,
                                message: '请输入邮箱!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        {/* 头像 */}
                        <Form.Item
                            name="avatar"
                            label="头像"
                            initialValue={props.data.avatar}
                            rules={[
                            {
                                required: true,
                                message: '请上传头像(输入文件网址)!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        {/* 修改完毕 */}
                        <Form.Item >
                            <Button type="primary" htmlType="submit" style={{marginLeft:'160px'}}>
                                {title+'完成'}
                            </Button>
                        </Form.Item>
                    </Form>
                    <p style={{fontSize:'20px'}}>{modalText}</p>
                </Modal>
            </div>
        </>
    )
}

export default Modals