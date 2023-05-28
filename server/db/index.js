const conn = require('./connection');
const { Sequelize } = conn;
const axios = require('axios');

//db models
const Artifact = require('./Artifact');
const Artist = require('./Artist');
const Post = require('./Post');
const Story = require('./Story');
const ArtifactArtist = require('./ArtifactArtist');

//seed data imported from seed.json
const {
    artists,
    // posts,
    artifacts,
    artifactArtist,
    // story
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
        
        //seeding db with artists, posts, artifacts, and story arrays imported from seed.json
        await Artist.bulkCreate(artists);
        // await Post.bulkCreate(posts);
        await Artifact.bulkCreate(artifacts);
        await ArtifactArtist.bulkCreate(artifactArtist);
        // await Story.bulkCreate(story);
        
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
