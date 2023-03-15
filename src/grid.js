import Table from 'react-bootstrap/Table';
import Colunas from './colunas';
import HeadGrid from './headGrid';
import Pagination from 'react-bootstrap/Pagination';

function Grid() {
	const colunas = [{nome:'id'},{nome:'title'},{nome:'artist'},{nome:'teste'}];
	const albums = [
    {
      id: 0,
      title: 'Album One',
      artist: 'Alex'
    },
    {
      id: 1,
      title: 'Album Two',
      artist: 'Percy'
    },
    {
      id: 2,
      title: 'Album Three',
      artist: 'Kevin'
    },
    {
      id: 3,
      title: 'Album Four',
      artist: 'John'
    },
    {
      id: 4,
      title: 'Album Five',
      artist: 'Stacy'
    }
  ];
  const length = albums.length;
  let active = 1;
  let items = [];
  
  for (let number = 1; number <= 5; number++) {
				  items.push(
					<Pagination.Item key={number} active={number === active}>
					  {number}
					</Pagination.Item>,
				  );
				}
				
				
  
  return (
  <div>
		<Table responsive>
		  <thead>
			<HeadGrid colunas={colunas} />
		  </thead>
		  <tbody>
				{albums.map(item => 
					<Colunas data={item} colunas={colunas} />
				)}
		  </tbody>
		</Table>
		
                <p>Tamanho é { length }.</p>
				<Pagination>{items}</Pagination>
            </div>
		
  );
}

export default Grid;