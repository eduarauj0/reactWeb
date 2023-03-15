
function HeadGrid({colunas}) {

  return (
	<tr >
		{colunas.map(col => 
			<td>{col['nome']}</td>
		)}
	</tr>
  );
}

export default HeadGrid;