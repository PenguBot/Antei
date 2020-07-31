// Copyright 2017-2019 dirigeants - MIT License

const { Event } = require("klasa");

module.exports = class extends Event {

	async run(old, message) {
		if (this.client.ready && !old.partial && old.content !== message.content) this.client.monitors.run(message);
	}

};
