namespace SpriteKind {
    export const Location = SpriteKind.create()
    export const Coin = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.setScore(info.score() + 25)
    otherSprite.destroy()
})
function setLevelTileMap () {
    if (Level == 0) {
        tiles.setCurrentTilemap(tilemap`level12`)
        Death_Respawn = 20
        FollowSpeed = 50
    }
    if (Level == 1) {
        tiles.setCurrentTilemap(tilemap`level30`)
        Death_Respawn = 25
        FollowSpeed = 65
    }
    if (Level == 2) {
        tiles.setCurrentTilemap(tilemap`level19`)
        FollowSpeed = 80
    }
    if (Level == 1) {
        tiles.setCurrentTilemap(tilemap`level35`)
    }
}
function createEnemy () {
    enemy2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    enemy2,
    assets.animation`myAnim1`,
    200,
    true
    )
    tiles.placeOnRandomTile(enemy2, sprites.swamp.swampTile0)
    enemy2.follow(mySprite, 100)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    music.wawawawaa.play()
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, Death_Respawn))
    info.changeLifeBy(-1)
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(0, 50))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, Death_Respawn))
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(0, 0))
    music.wawawawaa.play()
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, Death_Respawn))
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(0, 50))
    music.wawawawaa.play()
    info.changeLifeBy(-1)
})
function CreateEnemy () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    myEnemy,
    assets.animation`myAnim0`,
    200,
    true
    )
    tiles.placeOnRandomTile(myEnemy, sprites.swamp.swampTile0)
    myEnemy.follow(mySprite, 50)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 25))
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(0, 15))
    Level = 2
    setLevelTileMap()
    game.splash("Next Level UNLOCKED!", "Click Any Button To Continue")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    game.splash("Next Level UNLOCKED!", "Click Any Button To Continue")
    Level = 3
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 25))
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(0, 15))
    setLevelTileMap()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    game.splash("Next Level UNLOCKED!", "Click Any Button To Continue")
    Level = 1
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 25))
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(0, 15))
    tiles.placeOnTile(enemy2, tiles.getTileLocation(0, 10))
    setLevelTileMap()
})
let enemy2: Sprite = null
let Death_Respawn = 0
let FollowSpeed = 0
let myEnemy: Sprite = null
let new_coin: Sprite = null
let mySprite: Sprite = null
let Level = 0
setLevelTileMap()
Level = 1
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
for (let value of tiles.getTilesByType(assets.tile`myTile28`)) {
    new_coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 4 4 4 5 5 f . . 
        . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 4 4 4 4 4 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnTile(new_coin, value)
    tiles.setTileAt(value, assets.tile`myTile14`)
}
info.setScore(0)
animation.runImageAnimation(
mySprite,
assets.animation`MainCharachter`,
200,
true
)
info.setLife(3)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 24))
CreateEnemy()
myEnemy.follow(mySprite, FollowSpeed)
mySprite.ay = 350
game.onUpdate(function () {
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
})
