//import { gameBoardWinnerSquares } from "../../types/gameTypes"
import { gameBoardWinnerSquares } from "../../../types/Tic-Tac-Toe/gameTypes"

export const WinnerSquares = (gameBoardSquaresClickedByPlayers) => {
    for (const squares of gameBoardWinnerSquares) {
        let [a, b, c] = squares

        if(gameBoardSquaresClickedByPlayers[a] 
            && (gameBoardSquaresClickedByPlayers[a] == gameBoardSquaresClickedByPlayers[b] 
            && gameBoardSquaresClickedByPlayers[a] == gameBoardSquaresClickedByPlayers[c])) 
        {
            return [a, b, c]
        }
    }

    return []
}
