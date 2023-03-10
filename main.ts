input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
})
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
	
})
