
function Colunas({data,colunas}) {
	
  return (
	<tr >
		{colunas.map(col => 
			<td>{data[col['nome']]}</td>
		)}
	</tr>
  );
}

export default Colunas;