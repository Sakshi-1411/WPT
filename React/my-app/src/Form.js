export default function Form(){
    return(
        <form >
        Name:<input type="text" name="Sakshi"/>
        State:<input type="text" name="Ka"/>
        City:<input type="text" name="NPN"/>
        <input type ="submit" onClick={(event)=>{
            console.log("Sakshi");
            console.log(event.target.value);
        }}/>
        </form>

    )

}