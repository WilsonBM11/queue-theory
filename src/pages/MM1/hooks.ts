import { useState } from 'react';

const useDependencies = () => {
	const [lambda, setLambda] = useState<number | null>(null); // Promedio de Llegadas por Periodo (horas, min)
	const [mu, setMu] = useState<number | null>(null); // Promedio de Clientes o Unidades Atendidas por Periodo
	const [k, setK] = useState<number | null>(null);
	const [results, setResults] = useState<{
		L?: number;
		W?: number;
		Lq?: number;
		Wq?: number;
		p?: number;
		Po?: number;
		PnK?: number;
	}>({});

	interface Costs {
		serviceCost?: string;
		waitingCost?: string;
	}

	const costs: Costs = {
		serviceCost: "m * Cs = canales * costo-canal",
		waitingCost: "(λ * Wq) * Cw"
	}

	const calculateResults = () => {
		if (lambda !== null && mu !== null && k !== null) {
			const L = lambda / (mu - lambda); // Promedio de Clientes o Unidades en el Sistema
			const W = 1 / (mu - lambda); // Tiempo Promedio de Clientes o Unidades en el Sistema
			const Lq = lambda ** 2 / (mu * (mu - lambda)); // Promedio de Clientes o Unidades en la Cola
			const Wq = lambda / (mu * (mu - lambda)); // Tiempo Promedio de Clientes o Unidades en la Cola
			const p = lambda / mu; // Probabilidad de Uso del Sistema
			const Po = 1 - lambda / mu; // Tiempo ocioso, Probabilidad de Nadie en el Sistema
			const PnK = (lambda / mu) ** (k + 1);
			setResults({ L, W, Lq, Wq, p, Po, PnK });
			console.log(results);
			console.log(costs);
		}
	};

	return { lambda, setLambda, mu, setMu, k, setK, calculateResults, results };
};

export default useDependencies;
