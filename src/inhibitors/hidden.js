// Copyright 2017-2019 dirigeants - MIT License

const { Inhibitor } = require("klasa");

module.exports = class extends Inhibitor {

	run(message, command) {
		return command.hidden && message.command !== command && message.author !== this.client.owner;
	}

};
