import axios from 'axios'
import { useState } from 'react';
import { Button, Modal, Spin, Progress, Space} from 'antd';

const HomeChile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [percent, setPercent] = useState(0)
    const fetchData = async function (url){
        let result = '';
        const decoder = new TextDecoder();
        const response = await fetch(url);
    
        for await (const chunk of response.body){
            result += decoder.decode(chunk, {stream:true});
            const lines = result.split('\n');
            result = lines.pop() || '';
    
            for(const line of lines){
                //adding points one by one to D3 here
                update([JSON.parse(line)]);
            }
        }
    }
    const showModal = () => {
        setPercent(0)
        axios({
            method: 'GET',
            url: '/api/Inicializar',
            httpAgent: new http.Agent({ keepAlive: true }),
            httpsAgent: new https.Agent({ keepAlive: true }),
         }).then((res)=>{
            console.log(res)
            percent>100?setPercent(100):setPercent((percent) => percent + 2.18)
        })
            // if(res.data=='<Response streamed [200 OK]>'){
            //     percent>100?setPercent(100):setPercent((percent) => percent + 2.18)
            
        //     // res.blob().then(blob => {
        //     //     let url = window.URL.createObjectURL(blob);
        //     //     let a = document.createElement('a');
        //     //     a.href = url;
        //     //     a.download = 'LiderChile.xlsx';
        //     //     a.click();
        //     // });
        //     // for(let i=0;i<urls.length;i++){
        //     //     axios.post('http://192.168.100.92:8004/api/Lider',{url:urls[i].url,hoja:urls[i].hoja}).then((res)=>{
        //     //         percent>100?setPercent(100):setPercent((percent) => percent + 2.18)           
        //     //     }).catch(()=>{
        //     //         percent>100?setPercent(100):setPercent((percent) => percent + 2.18)
        //     //     })
        //     // }
        // })
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
            <Progress type="circle" percent={percent} />
           <Space wrap>
                <Spin type="circle"  tip="Generando archivo" size="large" />
            </Space>
        </Modal>
    </>
    );
}

export default HomeChile