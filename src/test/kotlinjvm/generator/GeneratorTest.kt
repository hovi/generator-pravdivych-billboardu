package generator

import org.junit.Test
import kotlin.test.assertEquals


class GeneratorTest {

    @Test
    fun basicDefaultTest() {
        val simpleGenerator = SimpleGenerator.DEFAULT
        assertEquals("tested", simpleGenerator.evaluateKey("test"))
        assertEquals("tested", simpleGenerator.evaluate("<test>"))
        assertEquals(simpleGenerator.evaluateKey("test"), simpleGenerator.evaluate("<test>"))
    }

    @Test
    fun generateTest() {
        val simpleGenerator = SimpleGenerator.DEFAULT
        for (i in 1..20) {
            println()
            println(simpleGenerator.generate())
            println()
        }
    }
}