/* eslint-disable react/react-in-jsx-scope */
import { Button, Col, Form, InputNumber, Layout, Row } from "antd";
import useDependencies from "./hooks";
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const MM1 = () => {
    
    const {lambda, setLambda, mu, setMu, k, setK, results, calculateResults} = useDependencies();

    return (
        <Layout>
          <Header>
            <Title style={{ color: 'white' }} level={4}>
              Modelo de Colas un Solo Canal con Llegadas de Poisson y Tiempos de Servicio Exponenciales
            </Title>
          </Header>
          <Content style={{ padding: '50px' }}>
            <Form layout="vertical" onFinish={calculateResults}>
              <Form.Item label="λ">
                <InputNumber min={0} value={lambda} onChange={(value) => { setLambda(value); }} />
              </Form.Item>
              <Form.Item label="μ">
                <InputNumber min={0} value={mu} onChange={(value) => { setMu(value); }} />
              </Form.Item>
              <Form.Item label="K">
                <InputNumber min={0} value={k} onChange={(value) => { setK(value); }} />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Calcular
              </Button>
            </Form>
            {results.L !== undefined && results.W !== undefined && results.Lq !== undefined && results.Wq !== undefined && results.p !== undefined && results.Po !== undefined && results.PnK !== undefined && (
              <div style={{ marginTop: '20px' }}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Title level={4}>L: {results.L.toFixed(2)}</Title>
                  </Col>
                  <Col span={8}>
                    <Title level={4}>W: {results.W.toFixed(2)}</Title>
                  </Col>
                  <Col span={8}>
                    <Title level={4}>Lq: {results.Lq.toFixed(2)}</Title>
                  </Col>
                  <Col span={8}>
                    <Title level={4}>Wq: {results.Wq.toFixed(2)}</Title>
                  </Col>
                  <Col span={8}>
                    <Title level={4}>p: {results.p.toFixed(2)}</Title>
                  </Col>
                  <Col span={8}>
                    <Title level={4}>Po: {results.Po.toFixed(2)}</Title>
                  </Col>
                  <Col span={8}>
                    <Title level={4}>Pn&gt;k: {results.PnK.toFixed(2)}</Title>
                  </Col>
                </Row>
              </div>
            )}
          </Content>
        </Layout>
      );
}

export default MM1	