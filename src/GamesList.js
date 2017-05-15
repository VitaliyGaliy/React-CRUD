import React, {PropTypes} from 'react'
import GameCard from './GameCard'

const GamesList = ({ games, deleteGame }) => {
  const emptyMessage = (
    <p>There are no games yet in your collection.</p>
  );

  const gamesList = (
    <div className="ui four cards">
      { games.map(game => <GameCard game={game} key={game._id} deleteGame={deleteGame}/>)}
    </div>
  )
  return (
    <div>
      {games.length === 0 ? emptyMessage : gamesList}
    </div>
  );
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
  deleteGame: PropTypes.func.isRequired
};

export default GamesList
