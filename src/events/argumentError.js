// Copyright (c) 2017-2019 dirigeants - MIT License

const { Event } = require("klasa");

module.exports = class extends Event {

	run(message, command, params, error) {
		message.sendMessage(error).catch(err => this.client.emit("wtf", err));
	}

};
