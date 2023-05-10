import './RestartGame.css'
import { RestartCounter } from '../RestartCounter/RestartCounter'

export const RestartGame = (createBoard) => {
    createBoard()
    RestartCounter()
}