import Button from 'react-bootstrap/Button';

function Colunas({data,colunas,indexKey}) {
	
  return (
	<tr >
		{colunas.map((col,index) => 
			col['botao'] 
			? 
			<td key={index+''+indexKey}><Button variant="secondary" href="https://react-bootstrap.github.io/components/buttons/" size="sm"> Ação {indexKey+''+index}</Button></td> 
			:
			<td key={index+''+indexKey}>{data[col['nome']]}</td>
		)}
	</tr>
  );
}

export default Colunas;