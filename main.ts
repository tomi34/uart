bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteLine("1010")
})
bluetooth.startUartService()
