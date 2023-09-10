import SmileCard from "./SmileCard";
import { useState } from 'react';
import SmileWinner from "./SmileWinner";
import CardContainer from "./UI/CardContainer";
const counts = {
}
function SmilesCards(props){
 
  let result;
  const [answer, setAnswer] = useState(undefined)

  function findLargestValue() {
    let largestValue = null;
      let largestKey = null;
        for (const key in counts) {
          if (counts.hasOwnProperty(key)) {
            const value = counts[key];
            if (largestValue === null || value > largestValue) {
              largestValue = value;
              largestKey = key;
            }
          }
        }
        return largestKey;
      }
  function showResults(){
   result = findLargestValue();
   let answerResult = props.emojies.filter((el) => (el.id === +result ));
   setAnswer(answerResult[0])
}
return(
<>
<div>
{answer &&<SmileWinner name={answer['name']} img={answer['img']} />}
</div>
<CardContainer>
{props.emojies.map((el) => (
<SmileCard counts={counts} elName = { el.name } key1= { el.id } img={ el.img } />
        ))}
</CardContainer>
<div className="center-container"><button onClick={showResults} className="who-wins-button">Who win </button></div>

</>
);
}
export default SmilesCards;