import { useEffect } from "react";

type Props = {
    message: string;
}
function Hello({ message }: Props) {

    useEffect(() => {
        //Chamada para controle de status do componente!
    }, []);

    return (
        <h1>Hello {message}!</h1>
    )
}

export default Hello;