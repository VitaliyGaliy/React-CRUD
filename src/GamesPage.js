import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { fetchGames, deleteGame } from './actions'
import GamesList from './GamesList'

class GamesPage extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    return (
      <div>
        <h1>New Page</h1>
      <GamesList games={this.props.games} deleteGame={this.props.deleteGame}/>
      </div>
    );
  }
}
GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage)
