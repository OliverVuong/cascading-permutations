function Row({ id, index, data, setData }) {

  const update = (attribute, event) => {
    data[index][attribute] = event.target.value;
    setData([...data]);
  }

  const updateIndexes = () => {
    for(let i = 0; i < data.length; i++) {
      data[i]['index'] = i;
    }
  }

  const remove = () => {
    let data = data.filter(dataRow => dataRow.id === id);
    updateIndexes();
    setData([...data]);
  }

  return (
    <>
      <label>Group: {index + 1}</label>
      <br />
      <label>Time Lag: </label>
      <input 
        placeholder='3s'
        value={data[index]['timelag']}
        onChange={(event) => update('timelag', event)}
      />
      <br />
      <label>Mechanic: </label>
      <input 
        placeholder='Debuff'
        value={data[index]['mechanic']}
        onChange={(event) => update('mechanic', event)}
      />
      <br />
      <label>Next Row: </label>
      <input 
        placeholder='2,3,5'
        value={data[index]['next']}
        onChange={(event) => update('next', event)}
      />
      <br />
      <button onClick={remove}>Remove</button>
      <br />
    </>
  );
}

export default Row;
