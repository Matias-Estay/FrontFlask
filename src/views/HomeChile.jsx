import axios from 'axios'
import { useState } from 'react';
import { Button, Modal, Progress, Space} from 'antd';

const HomeChile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [percent, setPercent] = useState(0)
    const showModal = () => {
        setPercent(0)
        axios.post('/api/Inicializar').then((res)=>{
            // for(let i=0;i<urls.length;i++){
            //     axios.post('http://192.168.100.92:8004/api/Lider',{url:urls[i].url,hoja:urls[i].hoja}).then((res)=>{
            //         percent>100?setPercent(100):setPercent((percent) => percent + 2.18)           
            //     }).catch(()=>{
            //         percent>100?setPercent(100):setPercent((percent) => percent + 2.18)
            //     })
            // }
        })
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
     setIsModalOpen(false);
    };

    return (
    <>
        <Button type="primary" onClick={showModal}>
            Generar documento de Lider
        </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
           <Space wrap>
                <Progress type="circle" percent={percent} />
            </Space>
        </Modal>
    </>
    );
}

export default HomeChile