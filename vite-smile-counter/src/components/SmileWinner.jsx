import style from "./Smile.module.scss";
function SmileWinner(props){
return(
    <>
    <h2 className="user-name">Winner</h2>
    <h3>Smile name: {props.name}</h3>
    <p className={style.smile_img}>{props.img}</p>
    </>
    
)
}
export default SmileWinner;