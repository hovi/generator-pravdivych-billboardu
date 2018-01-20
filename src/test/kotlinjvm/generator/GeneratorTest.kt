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
    fun generateTestMameRadi() {
        val simpleGenerator = SimpleGenerator.ZEMAN_NAME_RADI
        for (i in 1..1000) {
            println(simpleGenerator.generate())
        }
    }

    @Test
    fun generateTestNeMameRadi() {
        val simpleGenerator = SimpleGenerator.ZEMAN_NENAME_RADI
        for (i in 1..1000) {
            println(simpleGenerator.generate())
        }
    }
}