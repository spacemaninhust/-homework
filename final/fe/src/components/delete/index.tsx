// 此组件为删除组件
import React ,{ FC , useState}from "react"
import { Button,Modal } from "antd"
import 'antd/lib/modal/style/css'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { DataType } from "../datatype"
interface Props{
    Deletes: (e:DataType)=>void
    data:DataType
}
const Delete:FC<Props> = (props) =>{
    const name = props.data.name
    // 使用两个变量确定两次确认，doubleclick要求快速，不太合适
    const [open1,setOpen1] = useState(false)
    const [open2,setOpen2] = useState(false)
    const [modalText, setModalText] = useState('确定要删除用户"' + name + '"吗?')
    const showModal = () => {
        setOpen1(true)
        setOpen2(true)
    }
    const handleOk = () => {
        setOpen1(!open1)
        setModalText('再次确定要删除用户"' + name + '"吗?')
        if(!open1){
            setOpen1(false)
            setOpen2(false)
            props.Deletes(props.data)
        }
    }
    const handleCancel = () => {
        setOpen1(false)
        setOpen2(false)
    }
    return (
        <>
            <Button onClick={showModal} style={{backgroundColor:'white',border:'0',height:'30px',marginTop:'0px',marginLeft:'8px',width:'70px'}}>
                <div style={{fontSize:'16px'}}>
                    删除
                </div>
            </Button>
            <Modal
                title={
                    [<div key="title"><ExclamationCircleOutlined key="title" color="yello"/>提示</div>]
                }
                open={open1||open2}
                onCancel={handleCancel}
                footer={[
                    // 可根据需要定义 一个或者 2个按钮
                   <Button key="back" onClick={handleCancel}>取消</Button>,
                   <Button key="submit" type="primary" onClick={handleOk}>确认</Button>
                ]}
            >
                {modalText}
            </Modal>
        </>
        
    )
}
export default Delete