input.onGesture(Gesture.Shake, function () {
    accéléromètre = input.isGesture(Gesture.Shake)
    basic.showIcon(IconNames.Angry)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
let accéléromètre = false
basic.showString("Hello!")
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
