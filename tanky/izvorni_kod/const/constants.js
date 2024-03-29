const Constants = Object.freeze({
MAX_POWER: 0.175,
MAX_REVERSE: 0.155,
POWER_FACTOR: 0.004,
REVERSE_FACTOR: 0.003,

DRAG: 0.95,
ANGULAR_DRAG: 0.95,
TURN_SPEED: 0.002,


// PLAYER
	PLAYER_WIDTH: 50,
	PLAYER_HEIGHT: 75,

// MAP
	MAP_SIZE: 3000,
	TILE_WIDTH: 50,
	TILE_HEIGHT: 50,

// MATCHMAKING
	MAX_PLAYERS_ALLOWED: 2,

// PROJECTILE
	PROJECTILE_RADIUS: 20,
// COLLECTIBLES
	SPEED_BOOST_TYPE: 2,
	TRIPLE_SHOT_TYPE: 3,
	SPEED_BOOST_TIME: 30,
	TRIPLE_SHOT_TIME: 30,

});
if (typeof window === 'undefined') {
	module.exports = Constants;
} else {
	window.Constants = Constants;
}
