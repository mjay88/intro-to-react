
export default function Clicker2({message, buttonText}) {
    function handleClick(){
        console.log(message);
    }
    return (
    <button onClick={handleClick}>{buttonText}</button>
  )
}
