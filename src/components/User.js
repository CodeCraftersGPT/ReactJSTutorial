import react,{useState} from 'react';

export default function User() {
    const [name,setName] = useState({firstName:'Elon', lastName:'Musk'})




    function updateFirstName(e){
        const nameValue = e.target.value;
        setName({...name,firstName:nameValue});
    }


    function updateLastName(e){
        const nameValue = e.target.value;
        setName({...name,lastName:nameValue});
    }
  return (
    <>
    <div>
        <h1>{name.firstName}</h1> : <h1>{name.lastName}</h1>
    </div>
    <div>
        <form>
        <div> first name : <input type="text"  value={name.firstName}  onChange={updateFirstName}    />    </div>
            <div> lastName  : <input type="text" value={name.lastName} onChange={updateLastName}    />    </div>
        </form>
    </div>
    </>
  )
}


