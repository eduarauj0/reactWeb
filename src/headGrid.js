
function HeadGrid({colunas}) {

  return (
	<tr >
		{colunas.map((col,index) => 
			<td key={index}>{col['nome']} </td>
		)}
	</tr>
  );
}

export default HeadGrid;