function Match(props){
      const {x,y,z}=props
    const ans=((x==y)&&(y==z))?"MATCHING":"NOT MATCHING"
   
    return (
        <div className="container">
        <div><span style={{fontSize:"50px"}}>{x}  {y}  {z}</span> <br/> {ans}<hr/></div>
             </div>
        )
    
}
export default Match;
