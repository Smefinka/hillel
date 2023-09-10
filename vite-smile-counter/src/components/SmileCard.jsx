import Card from "./UI/Card";
import style from "./Smile.module.scss";
import { useState } from 'react';

let winners;
function SmileCard(props){
    const [count,setCount] = useState(0);
   
    function handleClick(e){
        setCount(count+1);
       
       props.counts[e.target.id] = count+1;
       console.log(props.counts);
       return props.counts;
    }
   
   
return(
<>
<Card>
<p className={style.smile_img}>{props.img}</p>
<h2 key={props.key1}  className={style.smile_name}> {props.elName}</h2>
<button onClick={handleClick} id={props.key1}>Click times {count}</button>

</Card>

</>
);
}
export default SmileCard;