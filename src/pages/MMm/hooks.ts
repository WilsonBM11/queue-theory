import { useState } from 'react';
import { factorial } from 'mathjs';


const useDependencies = () => {
	const [lambda, setLambda] = useState<number | null>(null);
	const [mu, setMu] = useState<number | null>(null);
	const [m, setM] = useState<number | null>(null);
	const [results, setResults] = useState<{
		L?: number;
		W?: number;
		Lq?: number;
		Wq?: number;
		p?: number;
		Po?: number;
	}>({});

	const calculateResults = () => {
		if (lambda !== null && mu !== null && m !== null) {
			const Po = calculatePo();
			if(Po !== undefined){
				const L = calculateL(Po);
				if(L !== undefined){
					const W = L / lambda;
					const Lq = L - (lambda / mu);
					const Wq = Lq / lambda;
					const p = lambda / (mu * m);
					setResults({ L, W, Lq, Wq, p, Po});
				}
			}
			console.log(results);
		}
	};

	const calculatePo = () => {
		// Calculate the value of Po
		if (lambda !== null && mu !== null && m !== null) {
			
			if (m * mu <= lambda) {
				console.log("Se debe cumplir: m * mu > lambda");
			}
		
			// Calculate the first part of the denominator
			let firstPart = 0;
			for (let n = 0; n <= m - 1; n++) {
				firstPart += (1 / factorial(n)) * Math.pow(lambda / mu, n);
			}
		
			// Calculate the second part of the denominator
			const secondPart = (1 / factorial(m)) * Math.pow(lambda / mu, m) * (m * mu) / (m * mu - lambda);
		
			// Calculate the denominator
			const denominator = firstPart + secondPart;
		
			// Calculate P0
			const Po = 1 / denominator;
		
			return Po;
		}
	}

	const calculateL = (Po:number) => {

		if (lambda !== null && mu !== null && m !== null && Po !== undefined) {

			// Calculate the first term in the formula for L
			const firstTerm = (lambda * mu * Math.pow(lambda / mu, m)) /
			((factorial(m - 1)) * Math.pow(m * mu - lambda, 2)) * Po;
	
			// Calculate the second term in the formula for L
			const secondTerm = lambda / mu;
		
			// Calculate L
			const L = firstTerm + secondTerm;
		
			return L;
		}
	}

	return { lambda, setLambda, mu, setMu, m, setM, calculateResults, results };
};

export default useDependencies;
