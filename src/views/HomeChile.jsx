import axios from 'axios'
import { useState } from 'react';
import { Button, Row, Spin, Col, Card, Flex} from 'antd';
import '../assets/css/cols.css'
const { Meta } = Card;
const HomeChile = () => {
    const [loading_lider, setLoadingLider] = useState(false)
    const [loading_santa, setLoadingSanta] = useState(false)
    const [loading_jumbo, setLoadingJumbo] = useState(false)
    const Generar_Archivo_LiderCH = () => {
        setLoadingLider(true)
        axios({
            method: 'GET',
            url: '/api/LiderCH',
            timeout: 900000,
            responseType: 'blob',
            headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                'Content-Type': 'application/json'
              },
         }).then((res)=>{
            let url = window.URL.createObjectURL(res.data);
            let a = document.createElement('a');
            a.href = url;
            a.download = 'LiderChile.xlsx';
            a.click();
            setLoadingLider(false)
        }).catch((error)=>{
            console.log(error)
            setLoadingLider(false)
        })
    };

    const Generar_Archivo_SantaCH = () => {
        setLoadingSanta(true)
        axios({
            method: 'GET',
            url: '/api/SantaCH',
            timeout: 900000,
            responseType: 'blob',
            headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                'Content-Type': 'application/json'
              },
         }).then((res)=>{
            let url = window.URL.createObjectURL(res.data);
            let a = document.createElement('a');
            a.href = url;
            a.download = 'SantaChile.xlsx';
            a.click();
            setLoadingSanta(false)
        }).catch((error)=>{
            console.log(error)
            setLoadingSanta(false)
        })
    };
    
    const Generar_Archivo_JumboCH = () => {
        setLoadingJumbo(true)
        axios({
            method: 'GET',
            url: '/api/JumboCH',
            timeout: 900000,
            responseType: 'blob',
            headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                'Content-Type': 'application/json'
              },
         }).then((res)=>{
            let url = window.URL.createObjectURL(res.data);
            let a = document.createElement('a');
            a.href = url;
            a.download = 'JumboChile.xlsx';
            a.click();
            setLoadingJumbo(false)
        }).catch((error)=>{
            console.log(error)
            setLoadingJumbo(false)
        })
    };

    return (
        <Row gutter={[0,26]} style={{overflow:'auto', textAlign:'-webkit-center', marginTop:'5%'}}>
            <Col flex="1 0 33%">
                <Card
                    style={{width: 300}}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <>
                        <Button type="primary" onClick={Generar_Archivo_LiderCH}>
                            Generar documento de Lider
                        </Button>
                        <Spin tip="Estamos generando tu archivo, por favor ten paciencia esto puede tardar varios minutos" spinning={loading_lider} fullscreen />
                    </>
                    ]}
                    >
                    <Meta
                    title="Descarga de archivo"
                    description="Texto descriptivo"
                    />
                </Card>  
            </Col>
            <Col flex="1 0 33%">
                <Card
                    style={{width: 300}}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                    <>
                        <Button type="primary" onClick={Generar_Archivo_SantaCH}>
                            Generar documento de Santa Isabel
                        </Button>
                        <Spin tip="Estamos generando tu archivo, por favor ten paciencia esto puede tardar varios minutos" spinning={loading_santa} fullscreen />
                    </>
                    ]}
                    >
                    <Meta
                    title="Descarga de archivo"
                    description="Texto descriptivo"
                    />
                </Card>
            </Col>
            <Col flex="1 0 33%">
                <Card
                    style={{width: 300}}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <>
                        <Button type="primary" onClick={Generar_Archivo_JumboCH}>
                            Generar documento de Jumbo
                        </Button>
                        <Spin tip="Estamos generando tu archivo, por favor ten paciencia esto puede tardar varios minutos" spinning={loading_jumbo} fullscreen />
                    </>
                    ]}
                    >
                    <Meta
                    title="Descarga de archivo"
                    description="Texto descriptivo"
                    />
                </Card>
            </Col>
        </Row>
    );
}

export default HomeChile