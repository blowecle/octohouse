const conn = require('./connection');
const { Sequelize } = conn;
const Artifact = require('./Artifact');
const Artist = require('./Artist');
const Post = require('./Post');
const Story = require('./Story');
const axios = require('axios');

//seed data
const {
    artists,
    posts,
    artifacts,
    story
  } = require("./seed.json");

//db schema
Artifact.hasMany(Artist, {as: 'artists'});
Artist.hasMany(Artifact, {as: 'artifacts'});
Post.belongsTo(Artifact);
Artifact.hasMany(Post);
Artist.hasMany(Post);
Post.hasMany(Artist);

//connect to db and seed with imported seed.json
const syncAndSeed = async (closeConn=false) => {
	try {
        await conn.sync({ force: true });
        console.log("Connected to database!");
        
        await Artist.bulkCreate(artists);
        await Post.bulkCreate(posts);
        await Artifact.bulkCreate(artifacts);
        await Story.bulkCreate(story);
        
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
