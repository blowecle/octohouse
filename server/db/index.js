const conn = require('./connection');
const { Sequelize } = conn;
const Artifact = require('./Artifact');
const Artist = require('./Artist');
const Post = require('./Post')
const axios = require('axios');

//seed data
const {
    artists,
    posts,
    artifacts,
  } = require("./seed.json");

//db schema
Artifact.hasMany(Artist);
Artist.hasMany(Artifact);
Post.belongsTo(Artifact);
Artifact.hasMany(Post);
Artist.hasMany(Post);
Post.hasMany(Artist);

//connect to db and seed with imported seed.json
const syncAndSeed = async (closeConn=false) => {
	try {
        await conn.sync({ force: true });
        console.log("Connected to database!");
        console.log("ARTIST DATA: ", artists)
        const artist = await Artist.bulkCreate(artists);
        console.log("artists seeded");
        const post = await Post.bulkCreate(posts);
        console.log("posts seeded");
        const artifact = await Artifact.bulkCreate(artifacts);
        if (closeConn) await conn.close();
		console.log(`Seeding successful!`);
	} catch (e) {
		console.error("Seeding database failed:", e);
	}
};

module.exports = {
	syncAndSeed,
	conn,
	Artifact,
    Artist,
    Post,
};
