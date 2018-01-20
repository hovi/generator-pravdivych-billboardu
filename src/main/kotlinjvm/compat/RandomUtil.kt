package compat

import java.util.Random

val random = Random(System.currentTimeMillis())

fun nextInt(max: Int): Int {
    return random.nextInt(max)
}
