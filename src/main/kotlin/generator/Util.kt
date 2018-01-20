package generator

import compat.nextInt

fun <E> Array<E>.getRandomElement() = this[nextInt(this.size)]
fun <E> List<E>.getRandomElement() = this[nextInt(this.size)]