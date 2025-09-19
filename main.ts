/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mercy
 * Created on: Sep 2025
 * This program shows tempeture
*/

// variable tempeture
let temperature : number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// comment
input.onButtonPressed(Button.A, function() {
    let temperature = input.temperature()
    basic.showString('Temperature is')
    basic.showNumber(temperature)
    basic.showString('C')
})
