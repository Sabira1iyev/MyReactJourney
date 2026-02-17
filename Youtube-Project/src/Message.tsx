function Message() {

    let name = "Sfaesvgbae";

    function getName(){
        if(name === "Sabir")return name;
        else{
            return "Aliyev";
        }
    }
    return (
        <>

            <h1>Hello {getName()}</h1>
        </>
    )
} 

export default Message;