import {Character} from "./characters.ts";
import {Link} from "react-router-dom";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {


    return (
        <div>
            <Link to={`/characters/${props.character.id}`}>
            <p>
                {props.character.name}
            </p>
            <p>
                {props.character.species}
            </p>
        </Link>
        </div>

    )
}
