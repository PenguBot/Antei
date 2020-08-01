// Copyright 2017-2019 dirigeants - MIT License

const { Serializer } = require("@pengubot/antei");
const URL = require("url");

module.exports = class extends Serializer {

	deserialize(data, piece, language) {
		const url = URL.parse(data);
		if (url.protocol && url.hostname) return data;
		throw language.get("RESOLVER_INVALID_URL", piece.key);
	}

};
