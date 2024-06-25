/* eslint-disable react/react-in-jsx-scope */
import { Button, Card, Col, Form, InputNumber, Row} from 'antd';
import useDependencies from './hooks';
import Title from 'antd/es/typography/Title';

const MM1PF = () => {
	const { lambda, setLambda, mu, setMu, N, setN, results, calculateResults } =
		useDependencies();

	return (
		<>
			<Title level={4}>
				Modelo MM1PF
			</Title>
			<Form
				layout='inline'
				onFinish={calculateResults}
				style={{ marginBottom: '20px' }}
			>
				<Form.Item label='λ'>
					<InputNumber
						min={0}
						value={lambda}
						onChange={value => {
							setLambda(value);
						}}
					/>
				</Form.Item>
				<Form.Item label='μ'>
					<InputNumber
						min={0}
						value={mu}
						onChange={value => {
							setMu(value);
						}}
					/>
				</Form.Item>
				<Form.Item label='N'>
					<InputNumber
						min={0}
						value={N}
						onChange={value => {
							setN(value);
						}}
					/>
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Calcular
					</Button>
				</Form.Item>
			</Form>
				{results.L !== undefined &&
				results.W !== undefined &&
				results.Lq !== undefined &&
				results.Wq !== undefined &&
				results.Po !== undefined && 
				results.Pn !== undefined && (
					<Row gutter={[16, 16]}>
						<Col xs={24} sm={12} md={8}>
							<Card title='L' bordered={false}>
								<p>{results.L.toFixed(2)}</p>
							</Card>
						</Col>
						<Col xs={24} sm={12} md={8}>
							<Card title='W' bordered={false}>
								<p>{results.W.toFixed(2)}</p>
							</Card>
						</Col>
						<Col xs={24} sm={12} md={8}>
							<Card title='Lq' bordered={false}>
								<p>{results.Lq.toFixed(2)}</p>
							</Card>
						</Col>
						<Col xs={24} sm={12} md={8}>
							<Card title='Wq' bordered={false}>
								<p>{results.Wq.toFixed(2)}</p>
							</Card>
						</Col>
						<Col xs={24} sm={12} md={8}>
							<Card title='Po' bordered={false}>
								<p>{results.Po.toFixed(2)}</p>
							</Card>
						</Col>
						<Col xs={24} sm={12} md={8}>
							<Card title={`Pn`} bordered={false}>
							{results.Pn.map((value, index) => (
								// eslint-disable-next-line react/jsx-key
								<p>P{index}: {value.toFixed(2)}</p>
							))}
							</Card>
						</Col>
					</Row>
				)
			}
		</>
	);
};

export default MM1PF;