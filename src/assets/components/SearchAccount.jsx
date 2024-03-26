import '../components/SearchAccount.css'
import { useState } from 'react'
function SearchAccount() {
    const randomAccounts=[
        {
            id:1, accountNumber:'1234567890', balance:5000,name:"Ismail Oladimeji"
        },
        {
            id:2, accountNumber:'2345678901', balance:4000,name:"Islamiat Oladimeji"
        },
        {
            id:3, accountNumber:'3456789012', balance:3000,name:"Ali ameen Kareem"
        },
        {
            id:4, accountNumber:'4567890123', balance:2000,name:"Ameerah Kareem"
        },
        {
            id:5, accountNumber:'5678901234', balance:5000,name:"Quadri Adebayo"
        },
        {
            id:6, accountNumber:'6789012345', balance:5000,name:"Qodilat Adebayo"
        },
    ]
    const [accounts,setAccounts] = useState(randomAccounts)
    const [searchAcc,setSearchAcc]=useState(null)
    

    const findAcc = (accountId)=>{
        let result = accounts.find((acc) => acc.id === accountId)
        setSearchAcc(result)
        console.log(result)
     }
   return(
    <div>
        <label >
     <h1>Find My Account</h1>
     {
        accounts.map((acc) =>(
           <ul key={acc.id}>

            <button onClick={()=>findAcc(acc.id)}>{acc.id}</button>
           </ul> 
        ))
     }
        
        </label>
      <div>
      <h2>Selected Account</h2> 
      {searchAcc &&(
          <div>
              <p>Account Name:{searchAcc.name}</p>
              <p>Account Number:{ searchAcc.accountNumber}</p>
              <p>Balance:{searchAcc.balance}</p>
          </div>
      )}
      </div>
  </div>
   )
}

export default SearchAccount 