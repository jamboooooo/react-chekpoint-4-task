import { useState } from "react";

function Detective() {
    const [sherlok, setSherlok] = useState('психопат')

    return <h1>Шерлок - {sherlok}</h1>
}

export default Detective