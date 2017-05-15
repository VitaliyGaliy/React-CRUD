import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { saveGame, fetchGame, updateGame } from './actions'
import GamesForm from './GamesForm'

class GamesFormPage extends React.Component {

  state = {
    redirect: false
  }

componentDidMount = () => {
  console.log('nextProps')
  if (this.props.match.params._id) {
    this.props.fetchGame(this.props.match.params._id);
  }
}

saveGame = ({_id, title, cover }) => {
  if (_id) {
    return this.props.updateGame({ _id, title, cover }).then(
      () => {this.setState({ redirect: true })},
      (err) => err.response.json().then(({errors}) => this.setState({ errors, loding: false}))
    )
  } else {
    return this.props.saveGame({ title, cover}).then(
      () => {this.setState({ redirect: true })},
      (err) => err.response.json().then(({errors}) => this.setState({ errors, loding: false}))
    )
  }
}

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect /> :
          <GamesForm
            game={this.props.game}
            saveGame={this.saveGame}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  if (props.match.params._id) {
    console.log('props.match.params._id', props.match.params._id)
    console.log('state.games', state.games)
    return {
      game: state.games.find(item => item._id === props.match.params._id)
    }
  }
  return { game: null }
}

export default connect(mapStateToProps, { saveGame, fetchGame, updateGame })(GamesFormPage);
