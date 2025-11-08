input.onButtonPressed(Button.A, function () {
    strip.rotate(1)
    strip.show()
})
function indikator (pos: number) {
    range = strip.range(0, pos)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    range = strip.range(pos, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(pos + 1, 16 - pos)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
input.onButtonPressed(Button.B, function () {
    strip.rotate(-1)
    strip.show()
})
function Skapa_linje (Pos: number) {
    range = strip.range(0, 16)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(Pos - 1, 3)
    range.showColor(neopixel.colors(NeoPixelColors.Orange))
    range2 = strip.range(Pos, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 16, NeoPixelMode.RGB)
let Position = 5
basic.forever(function () {
    Skapa_linje(Position)
    basic.pause(5000)
    indikator(Position)
    basic.pause(5000)
})
