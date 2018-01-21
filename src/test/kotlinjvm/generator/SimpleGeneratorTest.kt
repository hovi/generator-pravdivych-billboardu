package generator

import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class SimpleGeneratorTest {

    @Test
    fun testBasic() {
        val simpleGenerator = SimpleGenerator()

        simpleGenerator.addLine("body = value")
        assertTrue(simpleGenerator.keys.containsKey("body"))
        assertEquals("value", simpleGenerator.evaluateKey("body"))
    }

    @Test
    fun testEvaluate() {
        val simpleGenerator = SimpleGenerator()

        simpleGenerator.addLine("body = value")
        assertTrue(simpleGenerator.keys.containsKey("body"))
        assertEquals(simpleGenerator.evaluate("<body>"), simpleGenerator.evaluateKey("body"))
    }

    @Test
    fun testMultipleValues() {
        val simpleGenerator = SimpleGenerator()

        simpleGenerator.addLine("body = value1 | value2")
        assertTrue(simpleGenerator.keys.containsKey("body"))
        val value = simpleGenerator.evaluateKey("body")
        assertTrue(value.contains("value"))
    }

    @Test
    fun testSimpleReplacement() {
        val simpleGenerator = SimpleGenerator()
        simpleGenerator.addLine("body = value1")
        val value = simpleGenerator.evaluate("A <body> A")
        assertEquals("A value1 A", value)
    }

    @Test
    fun testReplacements() {
        val simpleGenerator = SimpleGenerator()
        simpleGenerator.addLine("body = value1")
        val value = simpleGenerator.evaluate("<body>")
        assertEquals("value1", value)
    }

    @Test
    fun testReplacementRepeats() {
        val simpleGenerator = SimpleGenerator()
        simpleGenerator.addLine("body = value1")
        simpleGenerator.addLine("body = value2")
        for (index in 1..100) {
            val value = simpleGenerator.evaluate("<body><body>")
            assertTrue(value.contains("value1"))
            assertTrue(value.contains("value2"))
        }
    }

    @Test
    fun testReplacementRepeatsNoDeadlock() {
        val simpleGenerator = SimpleGenerator()
        simpleGenerator.addLine("body = value1")
        for (index in 1..100) {
            val value = simpleGenerator.evaluate("<body><body>")
            assertEquals("value1value1", value)
        }
    }
}