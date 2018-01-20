(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'generator.umd'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'generator.umd'.");
    }
    root['generator.umd'] = factory(typeof this['generator.umd'] === 'undefined' ? {} : this['generator.umd'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ensureNotNull = Kotlin.ensureNotNull;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var Unit = Kotlin.kotlin.Unit;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var replaceFirst = Kotlin.kotlin.text.replaceFirst_680rmw$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var numberToInt = Kotlin.numberToInt;
  function Literal() {
  }
  Literal.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Literal',
    interfaces: []
  };
  function StringLiteral(content) {
    this.content = content;
  }
  StringLiteral.prototype.evaluate = function () {
    return this.content;
  };
  StringLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringLiteral',
    interfaces: [Literal]
  };
  StringLiteral.prototype.component1 = function () {
    return this.content;
  };
  StringLiteral.prototype.copy_61zpoe$ = function (content) {
    return new StringLiteral(content === void 0 ? this.content : content);
  };
  StringLiteral.prototype.toString = function () {
    return 'StringLiteral(content=' + Kotlin.toString(this.content) + ')';
  };
  StringLiteral.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  StringLiteral.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  function GroupLiteral(key, literals) {
    this.key = key;
    this.literals = literals;
  }
  GroupLiteral.prototype.evaluate = function () {
    return getRandomElement(this.literals).evaluate();
  };
  GroupLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GroupLiteral',
    interfaces: [Literal]
  };
  GroupLiteral.prototype.component1 = function () {
    return this.key;
  };
  GroupLiteral.prototype.component2 = function () {
    return this.literals;
  };
  GroupLiteral.prototype.copy_52rx84$ = function (key, literals) {
    return new GroupLiteral(key === void 0 ? this.key : key, literals === void 0 ? this.literals : literals);
  };
  GroupLiteral.prototype.toString = function () {
    return 'GroupLiteral(key=' + Kotlin.toString(this.key) + (', literals=' + Kotlin.toString(this.literals)) + ')';
  };
  GroupLiteral.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.literals) | 0;
    return result;
  };
  GroupLiteral.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.literals, other.literals)))));
  };
  function grammar(init) {
    var builder = new Builder();
    init(builder);
    return builder;
  }
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function Builder() {
    this.keyRegex = Regex('<([^>]*)>');
    this.lineRegex = '([^=]*)=(.*)';
    this.groupLiterals = LinkedHashMap_init();
  }
  function Builder$KeyLiteral($outer, key) {
    this.$outer = $outer;
    this.key = key;
  }
  Builder$KeyLiteral.prototype.evaluate = function () {
    return ensureNotNull(this.$outer.groupLiterals.get_11rb$(this.key)).evaluate();
  };
  Builder$KeyLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyLiteral',
    interfaces: [Literal]
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function Builder$GroupLiteralBuilder($outer, key, literals) {
    this.$outer = $outer;
    if (key === void 0)
      key = null;
    if (literals === void 0) {
      literals = ArrayList_init();
    }
    this.key = key;
    this.literals = literals;
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  Builder$GroupLiteralBuilder.prototype.build = function () {
    var tmp$;
    var literalObjects = ArrayList_init();
    tmp$ = this.literals.iterator();
    while (tmp$.hasNext()) {
      var literalValue = tmp$.next();
      literalObjects.add_11rb$(this.$outer.parse_61zpoe$(literalValue));
    }
    return new GroupLiteral(ensureNotNull(this.key), copyToArray(literalObjects));
  };
  Builder$GroupLiteralBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GroupLiteralBuilder',
    interfaces: []
  };
  Builder.prototype.parse_61zpoe$ = function (value) {
    println('parse: ' + value);
    if (this.keyRegex.matches_6bul2c$(value)) {
      return new Builder$KeyLiteral(this, this.keyRegex.replace_x2uqeu$(value, '$1'));
    }
     else {
      return new StringLiteral(value);
    }
  };
  function Builder$LineBuilder($outer, line) {
    this.$outer = $outer;
    if (line === void 0)
      line = null;
    this.line = line;
  }
  Builder$LineBuilder.prototype.build = function () {
    var tmp$;
    var key = replace(ensureNotNull(this.line), this.$outer.lineRegex, '$1');
    var literalObjects = ArrayList_init();
    var restLiteralValues = replace(ensureNotNull(this.line), this.$outer.lineRegex, '$2');
    println('KEY: ' + key);
    println('RLV: ' + restLiteralValues + '    ');
    tmp$ = split(restLiteralValues, ['|']).iterator();
    while (tmp$.hasNext()) {
      var literalValue = tmp$.next();
      println('LV: ' + literalValue);
      literalObjects.add_11rb$(this.$outer.parse_61zpoe$(literalValue));
    }
    return new GroupLiteral(key, copyToArray(literalObjects));
  };
  Builder$LineBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineBuilder',
    interfaces: []
  };
  Builder.prototype.group_m4in2s$ = function (init) {
    var stringBuilder = new Builder$GroupLiteralBuilder(this);
    init(stringBuilder);
    var groupLiteral = stringBuilder.build();
    this.groupLiterals.put_xwzc9p$(groupLiteral.key, groupLiteral);
    return groupLiteral;
  };
  Builder.prototype.line_lgxhm0$ = function (init) {
    var stringBuilder = new Builder$LineBuilder(this);
    init(stringBuilder);
    var groupLiteral = stringBuilder.build();
    this.groupLiterals.put_xwzc9p$(groupLiteral.key, groupLiteral);
    return groupLiteral;
  };
  Builder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Builder',
    interfaces: []
  };
  function g$lambda$lambda($receiver) {
    $receiver.key = 'vyrok';
    $receiver.literals = mutableListOf(['<vyrok3>', 'v\u0161ichni jsou \u0161\xEDlen\xED']);
    return Unit;
  }
  function g$lambda$lambda_0($receiver) {
    $receiver.line = 'vyrok2 = 1 | 2 | 3';
    return Unit;
  }
  function g$lambda($receiver) {
    $receiver.group_m4in2s$(g$lambda$lambda);
    $receiver.line_lgxhm0$(g$lambda$lambda_0);
    return Unit;
  }
  var g;
  function main(args) {
    println('Hello JavaScript!');
  }
  var simples;
  var respectedPeople;
  var badGuys;
  var patrioticLine;
  var lovingFooter;
  var lovingHeader;
  var content;
  function SimpleGenerator() {
    SimpleGenerator$Companion_getInstance();
    this.keys = LinkedHashMap_init();
    this.lineRegex = Regex('([A-Za-z-]*) = (.*)');
    this.replacementRegex = Regex('(?:<([A-Za-z-]*)>)');
  }
  SimpleGenerator.prototype.add_61zpoe$ = function (text) {
    var tmp$;
    tmp$ = Regex('\n').split_905azu$(text, 0).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      this.addLine_61zpoe$(line);
    }
  };
  SimpleGenerator.prototype.addLine_61zpoe$ = function (line) {
    if (isBlank(line)) {
      return;
    }
    if (!this.lineRegex.matches_6bul2c$(line)) {
      throw new IllegalArgumentException('Illegal line: ' + line);
    }
    var key = this.lineRegex.replace_x2uqeu$(line, '$1');
    var values = split(replace(this.lineRegex.replace_x2uqeu$(line, '$2'), '\\n', '\n'), ['|']);
    this.add_kwv3np$(key, values);
  };
  SimpleGenerator.prototype.add_puj7f4$ = function (key, value) {
    this.add_c1kmwu$(key, [value]);
  };
  SimpleGenerator.prototype.add_kwv3np$ = function (key, values) {
    if (this.keys.containsKey_11rb$(key)) {
      var merged = plus(ensureNotNull(this.keys.get_11rb$(key)), values);
      this.keys.put_xwzc9p$(key, merged);
    }
     else {
      this.keys.put_xwzc9p$(key, values);
    }
  };
  SimpleGenerator.prototype.add_c1kmwu$ = function (key, values) {
    this.add_kwv3np$(key, toList(values));
  };
  SimpleGenerator.prototype.evaluateKey_61zpoe$ = function (key) {
    if (!this.keys.containsKey_11rb$(key)) {
      throw new IllegalArgumentException('Key not found: ' + key);
    }
    return this.evaluate_61zpoe$(getRandomElement_0(ensureNotNull(this.keys.get_11rb$(key))));
  };
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  SimpleGenerator.prototype.evaluate_61zpoe$ = function (value) {
    var tmp$;
    var results = this.replacementRegex.findAll_905azu$(value);
    var evaluated = value;
    tmp$ = results.iterator();
    while (tmp$.hasNext()) {
      var result = tmp$.next();
      var $receiver = result.groupValues.get_za3lpa$(1);
      var tmp$_0;
      var key = trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString();
      var $receiver_0 = result.groupValues.get_za3lpa$(0);
      var tmp$_1;
      var group = trim(Kotlin.isCharSequence(tmp$_1 = $receiver_0) ? tmp$_1 : throwCCE()).toString();
      evaluated = replaceFirst(evaluated, group, this.evaluateKey_61zpoe$(key));
    }
    return evaluated;
  };
  SimpleGenerator.prototype.generate = function () {
    var content = this.evaluateKey_61zpoe$('content');
    var sections = split(content, ['+++']);
    if (sections.size !== 3) {
      throw new IllegalStateException('Invalid result: ' + content);
    }
    return new GeneratorResult(sections.get_za3lpa$(0), sections.get_za3lpa$(1), sections.get_za3lpa$(2));
  };
  function SimpleGenerator$Companion() {
    SimpleGenerator$Companion_instance = this;
    this.DEFAULT = this.generateDefault();
  }
  SimpleGenerator$Companion.prototype.generateDefault = function () {
    var simpleGenerator = new SimpleGenerator();
    simpleGenerator.add_puj7f4$('test', 'tested');
    simpleGenerator.add_c1kmwu$('simples', simples);
    simpleGenerator.add_c1kmwu$('loving-footer', lovingFooter);
    simpleGenerator.add_c1kmwu$('loving-header', lovingHeader);
    simpleGenerator.add_c1kmwu$('respected-people', respectedPeople);
    simpleGenerator.add_c1kmwu$('bad-guys', badGuys);
    simpleGenerator.add_c1kmwu$('patriotic-line', patrioticLine);
    simpleGenerator.add_61zpoe$(content);
    return simpleGenerator;
  };
  SimpleGenerator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SimpleGenerator$Companion_instance = null;
  function SimpleGenerator$Companion_getInstance() {
    if (SimpleGenerator$Companion_instance === null) {
      new SimpleGenerator$Companion();
    }
    return SimpleGenerator$Companion_instance;
  }
  SimpleGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleGenerator',
    interfaces: []
  };
  function GeneratorResult(header, content, footer) {
    this.header = header;
    this.content = content;
    this.footer = footer;
  }
  GeneratorResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeneratorResult',
    interfaces: []
  };
  GeneratorResult.prototype.component1 = function () {
    return this.header;
  };
  GeneratorResult.prototype.component2 = function () {
    return this.content;
  };
  GeneratorResult.prototype.component3 = function () {
    return this.footer;
  };
  GeneratorResult.prototype.copy_6hosri$ = function (header, content, footer) {
    return new GeneratorResult(header === void 0 ? this.header : header, content === void 0 ? this.content : content, footer === void 0 ? this.footer : footer);
  };
  GeneratorResult.prototype.toString = function () {
    return 'GeneratorResult(header=' + Kotlin.toString(this.header) + (', content=' + Kotlin.toString(this.content)) + (', footer=' + Kotlin.toString(this.footer)) + ')';
  };
  GeneratorResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.header) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    result = result * 31 + Kotlin.hashCode(this.footer) | 0;
    return result;
  };
  GeneratorResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.header, other.header) && Kotlin.equals(this.content, other.content) && Kotlin.equals(this.footer, other.footer)))));
  };
  function getRandomElement($receiver) {
    return $receiver[nextInt($receiver.length)];
  }
  function getRandomElement_0($receiver) {
    return $receiver.get_za3lpa$(nextInt($receiver.size));
  }
  var Math_0 = Math;
  function nextInt(max) {
    var x = Math.random() * max;
    return numberToInt(Math_0.floor(x));
  }
  var package$generator = _.generator || (_.generator = {});
  package$generator.Literal = Literal;
  package$generator.StringLiteral = StringLiteral;
  package$generator.GroupLiteral = GroupLiteral;
  package$generator.grammar_tyyvyp$ = grammar;
  Builder.KeyLiteral = Builder$KeyLiteral;
  Builder.GroupLiteralBuilder = Builder$GroupLiteralBuilder;
  Builder.LineBuilder = Builder$LineBuilder;
  package$generator.Builder = Builder;
  Object.defineProperty(package$generator, 'g', {
    get: function () {
      return g;
    }
  });
  package$generator.main_kand9s$ = main;
  Object.defineProperty(package$generator, 'simples', {
    get: function () {
      return simples;
    }
  });
  Object.defineProperty(package$generator, 'respectedPeople', {
    get: function () {
      return respectedPeople;
    }
  });
  Object.defineProperty(package$generator, 'badGuys', {
    get: function () {
      return badGuys;
    }
  });
  Object.defineProperty(package$generator, 'patrioticLine', {
    get: function () {
      return patrioticLine;
    }
  });
  Object.defineProperty(package$generator, 'lovingFooter', {
    get: function () {
      return lovingFooter;
    }
  });
  Object.defineProperty(package$generator, 'lovingHeader', {
    get: function () {
      return lovingHeader;
    }
  });
  Object.defineProperty(package$generator, 'content', {
    get: function () {
      return content;
    }
  });
  Object.defineProperty(SimpleGenerator, 'Companion', {
    get: SimpleGenerator$Companion_getInstance
  });
  package$generator.SimpleGenerator = SimpleGenerator;
  package$generator.GeneratorResult = GeneratorResult;
  package$generator.getRandomElement_4b5429$ = getRandomElement;
  package$generator.getRandomElement_2p1efm$ = getRandomElement_0;
  var package$compat = _.compat || (_.compat = {});
  package$compat.nextInt_za3lpa$ = nextInt;
  g = grammar(g$lambda);
  simples = ['<loving-header> +++ Tato zem\u011B je na\u0161e!', 'Srdcem +++ za lidi, rozumem za republiku', '<loving-header> +++ Zeman \u0159\xEDk\xE1 v\u017Edycky pravdu!', '<loving-header> Nestyd\xEDm se za prezidenta!'];
  respectedPeople = ['Martin Konvi\u010Dka', 'Franti\u0161ek Ringo \u010Cech', 'Tereza Pergnerov\xE1', 'Dan H\u016Flka'];
  badGuys = ['imigrant\u016Fm', 'Draho\u0161ovi', 'mimozem\u0161\u0165an\u016Fm', 'isl\xE1mu', 'podnikatel\u016Fm', 'kav\xE1rn\xEDk\u016Fm', 'Kalouskovi', 'chemtrails'];
  patrioticLine = ['Tato zem\u011B\n je na\u0161e!', 'Zemi si vz\xEDt\n nenech\xE1me!', 'Proti isl\xE1mu!', 'Za na\u0161e d\u011Bti!'];
  lovingFooter = ['Volte Zemana!', 'Nevolte Draho\u0161e!', 'Zeman na hrad!', 'Zeman znovu!'];
  lovingHeader = ['N\xE1\u0161 prezident', 'Srdcem'];
  content = '\ncontent = +++ <simples> +++ <footer>\ncontent = Stop +++ <bad-guys> a\\n <bad-guys> +++ <footer>\ncontent = Stop +++ l\u017E\xEDm, strachu a\\n nen\xE1visti +++\\n<footer>\ncontent = <loving-header> +++ Vol\xED ho i\\n <respected-people> +++ <footer>\n\n\nfooter =  <loving-footer> | <patriotic-line>\n\n';
  main([]);
  Kotlin.defineModule('generator.umd', _);
  return _;
}));

//# sourceMappingURL=generator.umd.js.map
