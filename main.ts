let 次數 = 0
let 開始 = false
input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.UntilDone)
    次數 = 0
    開始 = true
    basic.pause(20000)
    開始 = false
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    if (開始) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
        次數 += 1
    }
})
basic.forever(function () {
    basic.showNumber(次數)
    basic.pause(500)
})
