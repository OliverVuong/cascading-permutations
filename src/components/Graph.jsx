import { useState } from 'react'
import Row from './Row.jsx'
import uuid4 from 'uuid4';


function Graph() {
  const [data, setData] = useState([]);

  const addGroup = () => {
    setData(
      [...data, 
      {
        id: uuid4(),
        index: data.length,
        timelag: '',
        mechanic: '',
        next: '',
      }]
    )
  }

  return (
    <>
    {data.length > 0 ? 'timelag: ' + data[0]['timelag'] : 'no data to display'}
    <br />
    {data.map((rowData) => {return <Row key={rowData.id} id={rowData.id} index={rowData.index} data={data} setData={setData}/>})}
    <button onClick={addGroup}>Add Group</button>
    </>
  );
}

export default Graph;