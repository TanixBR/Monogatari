import Component from './../../lib/Component';
import { Monogatari } from './../../monogatari';

class ChoiceContainer extends Component {

	constructor () {
		super ();

		this.props = {
			choices: []
		};
	}

	shouldProceed () {
		// If a choice is currently being displayed, the player should not be able
		// to advance until one is chosen.
		return Promise.reject ('Choice Container awaiting for user input.');
	}

	willRollback () {
		// If a choice is visible right now, we can simply remove it and let the
		// game revert to the previous statement.
		this.remove ();
		return Promise.resolve ();
	}

	onReset () {
		this.remove ();
		return Promise.resolve ();
	}

	willMount () {
		return Promise.resolve ();
	}

	didMount () {
		return Promise.resolve ();
	}

	render () {
		const choices = this.props.choices.map ((choice) => {
			return `<button data-do="${choice.Do}" ${ choice.Class ? `class="${choice.Class}"`: ''} data-choice="${choice._key}">${choice.Text}</button>`;
		}).join ('');

		return `
			<div data-content="wrapper">
				${choices}
			</div>
		`;
	}
}

ChoiceContainer._id = 'choice-container';


Monogatari.registerComponent (ChoiceContainer);