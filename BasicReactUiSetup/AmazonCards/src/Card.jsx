import './App.css'
import Price from './Price'
export default function Card({Title,Description,idx}){
    let oldPrice =['2999', '3999', '1999'];
    let newPrice =['999', '1999', '1559'];
    return (
       
        <>
        <div className='card'>
            <h3>{Title}</h3>
            <p>{Description}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}  />
        </div>
        </>
    )
}