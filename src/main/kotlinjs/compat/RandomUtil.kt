package compat


import kotlin.js.Math

fun nextInt(max: Int): Int {
    return kotlin.math.floor((Math.random() * max)).toInt();
}
