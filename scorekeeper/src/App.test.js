import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
	players = [
		{
         name: 'Kunegunda',
         score: 5,
       },
       {
         name: 'Antoś',
         score: 0,
       }
	]
	shallow(<App />);
	appComponent.setState({ players });
	const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
	onScoreUpdate(0, 5);
	const playersAfterUpdate = appComponent.state('players');
	//alternatywnie appComponent.state.players
	playersAfterUpdate[0].score
	//NAPISANIE ASERCJI!!!!!!!
}





