// Copyright (c) 2017-2019 dirigeants - MIT License

const { MultiArgument } = require("klasa");

module.exports = class extends MultiArgument {

	constructor(...args) {
		super(...args, { aliases: ["...piece"] });
	}

	get base() {
		return this.store.get("piece");
	}

};
