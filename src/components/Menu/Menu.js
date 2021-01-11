import GameTitleCard from '../GameTitleCard/GameTitleCard';
import './Menu.css';
import { A } from 'hookrouter';

const Menu = () => {
    return (
        <div className="row bg-info pt-4 menuRow">
            <div className="col-5">
                <A href="/LettersGame">
                    <GameTitleCard cardTitle="Letters" />
                </A>
            </div>
            <div className="col-5">
                <A href="/NumbersGame">
                    <GameTitleCard cardTitle="Numbers" />
                </A>
            </div>
            <div className="col-5">
                <A href="/SightWordsGame">
                    <GameTitleCard cardTitle="Sight Words" />
                </A>
            </div>
        </div>
    )
}

export default Menu;