import LettersGame from "./components/LettersGame/LettersGame";
import Menu from "./components/Menu/Menu";
import NumbersGame from "./components/NumbersGame/NumbersGame";
import SightWordsGame from "./components/SightWordsGame/SightWordsGame";

const routes = {
    "/": () => <Menu />,
    "/LettersGame": () => <LettersGame />,
    "/NumbersGame": () => <NumbersGame />,
    "/SightWordsGame": () => <SightWordsGame />
}

export default routes;