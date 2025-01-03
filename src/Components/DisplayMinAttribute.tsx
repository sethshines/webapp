const DisplayMinAttribute = ({ minValues, reset }) => {

    return <section >
    {Object.keys(minValues).map((v)=><div>{v}: {minValues[v]}</div>)}
    <button onClick={()=>reset()}>Close</button>
  </section>
};

export default DisplayMinAttribute;