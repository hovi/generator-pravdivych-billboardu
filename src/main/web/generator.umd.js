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
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var replaceFirst = Kotlin.kotlin.text.replaceFirst_680rmw$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var numberToInt = Kotlin.numberToInt;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
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
    var $receiver = sections.get_za3lpa$(0);
    var tmp$;
    var tmp$_0 = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    var $receiver_0 = sections.get_za3lpa$(1);
    var tmp$_1;
    var tmp$_2 = trim(Kotlin.isCharSequence(tmp$_1 = $receiver_0) ? tmp$_1 : throwCCE()).toString();
    var $receiver_1 = sections.get_za3lpa$(2);
    var tmp$_3;
    return new GeneratorResult(tmp$_0, tmp$_2, trim(Kotlin.isCharSequence(tmp$_3 = $receiver_1) ? tmp$_3 : throwCCE()).toString(), getRandomElement(images));
  };
  function SimpleGenerator$Companion() {
    SimpleGenerator$Companion_instance = this;
    this.ZEMAN_NAME_RADI = ZemanMameRadi_getInstance().generate();
    this.ZEMAN_NENAME_RADI = ZemanNeMameRadi_getInstance().generate();
    this.DEFAULT = this.ZEMAN_NAME_RADI;
  }
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
  function GeneratorResult(header, content, footer, foto) {
    this.header = header;
    this.content = content;
    this.footer = footer;
    this.foto = foto;
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
  GeneratorResult.prototype.component4 = function () {
    return this.foto;
  };
  GeneratorResult.prototype.copy_w74nik$ = function (header, content, footer, foto) {
    return new GeneratorResult(header === void 0 ? this.header : header, content === void 0 ? this.content : content, footer === void 0 ? this.footer : footer, foto === void 0 ? this.foto : foto);
  };
  GeneratorResult.prototype.toString = function () {
    return 'GeneratorResult(header=' + Kotlin.toString(this.header) + (', content=' + Kotlin.toString(this.content)) + (', footer=' + Kotlin.toString(this.footer)) + (', foto=' + Kotlin.toString(this.foto)) + ')';
  };
  GeneratorResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.header) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    result = result * 31 + Kotlin.hashCode(this.footer) | 0;
    result = result * 31 + Kotlin.hashCode(this.foto) | 0;
    return result;
  };
  GeneratorResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.header, other.header) && Kotlin.equals(this.content, other.content) && Kotlin.equals(this.footer, other.footer) && Kotlin.equals(this.foto, other.foto)))));
  };
  function getRandomElement($receiver) {
    return $receiver[nextInt($receiver.length)];
  }
  function getRandomElement_0($receiver) {
    return $receiver.get_za3lpa$(nextInt($receiver.size));
  }
  var images;
  var commonSimples;
  var commonRespectedPeople;
  var commonBadGuys;
  var commonPatrioticLine;
  var commonLovingFooter;
  var commonLovingHeader;
  var commonStop;
  var commonContent;
  var simples;
  var respectedPeople;
  var badGuys;
  var patrioticLine;
  var lovingFooter;
  var lovingHeader;
  var stop;
  var content;
  function ZemanMameRadi() {
    ZemanMameRadi_instance = this;
  }
  ZemanMameRadi.prototype.generate = function () {
    var simpleGenerator = new SimpleGenerator();
    simpleGenerator.add_puj7f4$('test', 'tested');
    simpleGenerator.add_c1kmwu$('simples', simples);
    simpleGenerator.add_c1kmwu$('loving-footer', lovingFooter);
    simpleGenerator.add_c1kmwu$('loving-header', lovingHeader);
    simpleGenerator.add_c1kmwu$('respected-people', respectedPeople);
    simpleGenerator.add_c1kmwu$('bad-guys', badGuys);
    simpleGenerator.add_c1kmwu$('stop', stop);
    simpleGenerator.add_c1kmwu$('patriotic-line', patrioticLine);
    simpleGenerator.add_61zpoe$(content);
    return simpleGenerator;
  };
  ZemanMameRadi.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ZemanMameRadi',
    interfaces: []
  };
  var ZemanMameRadi_instance = null;
  function ZemanMameRadi_getInstance() {
    if (ZemanMameRadi_instance === null) {
      new ZemanMameRadi();
    }
    return ZemanMameRadi_instance;
  }
  var simples_0;
  var respectedPeople_0;
  var badGuys_0;
  var patrioticLine_0;
  var lovingFooter_0;
  var lovingHeader_0;
  var stop_0;
  var content_0;
  function ZemanNeMameRadi() {
    ZemanNeMameRadi_instance = this;
  }
  ZemanNeMameRadi.prototype.generate = function () {
    var simpleGenerator = new SimpleGenerator();
    simpleGenerator.add_puj7f4$('test', 'tested');
    simpleGenerator.add_c1kmwu$('simples', simples_0);
    simpleGenerator.add_c1kmwu$('loving-footer', lovingFooter_0);
    simpleGenerator.add_c1kmwu$('loving-header', lovingHeader_0);
    simpleGenerator.add_c1kmwu$('respected-people', respectedPeople_0);
    simpleGenerator.add_c1kmwu$('bad-guys', badGuys_0);
    simpleGenerator.add_c1kmwu$('stop', stop_0);
    simpleGenerator.add_c1kmwu$('patriotic-line', patrioticLine_0);
    simpleGenerator.add_61zpoe$(content_0);
    return simpleGenerator;
  };
  ZemanNeMameRadi.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ZemanNeMameRadi',
    interfaces: []
  };
  var ZemanNeMameRadi_instance = null;
  function ZemanNeMameRadi_getInstance() {
    if (ZemanNeMameRadi_instance === null) {
      new ZemanNeMameRadi();
    }
    return ZemanNeMameRadi_instance;
  }
  var Math_0 = Math;
  function nextInt(max) {
    var x = Math.random() * max;
    return numberToInt(Math_0.floor(x));
  }
  Object.defineProperty(SimpleGenerator, 'Companion', {
    get: SimpleGenerator$Companion_getInstance
  });
  var package$generator = _.generator || (_.generator = {});
  package$generator.SimpleGenerator = SimpleGenerator;
  package$generator.GeneratorResult = GeneratorResult;
  package$generator.getRandomElement_4b5429$ = getRandomElement;
  package$generator.getRandomElement_2p1efm$ = getRandomElement_0;
  var package$data = package$generator.data || (package$generator.data = {});
  Object.defineProperty(package$data, 'images', {
    get: function () {
      return images;
    }
  });
  Object.defineProperty(package$data, 'commonSimples', {
    get: function () {
      return commonSimples;
    }
  });
  Object.defineProperty(package$data, 'commonRespectedPeople', {
    get: function () {
      return commonRespectedPeople;
    }
  });
  Object.defineProperty(package$data, 'commonBadGuys', {
    get: function () {
      return commonBadGuys;
    }
  });
  Object.defineProperty(package$data, 'commonPatrioticLine', {
    get: function () {
      return commonPatrioticLine;
    }
  });
  Object.defineProperty(package$data, 'commonLovingFooter', {
    get: function () {
      return commonLovingFooter;
    }
  });
  Object.defineProperty(package$data, 'commonLovingHeader', {
    get: function () {
      return commonLovingHeader;
    }
  });
  Object.defineProperty(package$data, 'commonStop', {
    get: function () {
      return commonStop;
    }
  });
  Object.defineProperty(package$data, 'commonContent', {
    get: function () {
      return commonContent;
    }
  });
  Object.defineProperty(package$data, 'ZemanMameRadi', {
    get: ZemanMameRadi_getInstance
  });
  Object.defineProperty(package$data, 'ZemanNeMameRadi', {
    get: ZemanNeMameRadi_getInstance
  });
  var package$compat = _.compat || (_.compat = {});
  package$compat.nextInt_za3lpa$ = nextInt;
  images = ['drsny.gif', 'prekvapeny.png', 'recnicky.png', 'vyjukany.png', 'vysmaty.png'];
  commonSimples = ['<loving-header> +++ Tato zem\u011B je na\u0161e!', 'Srdcem +++ za lidi, \nrozumem za republiku', '<loving-header> +++ Zeman \u0159\xEDk\xE1 \n v\u017Edycky pravdu!', '<loving-header> +++ Nestyd\xEDm se \n za prezidenta!'];
  commonRespectedPeople = ['Martin Konvi\u010Dka', 'Franti\u0161ek Ringo \u010Cech', 'Tereza Pergnerov\xE1', 'Dan H\u016Flka', 'Andrej Babi\u0161', 'Va\u0161e babi\u010Dka', 'KS\u010CM', 'Zden\u011Bk Tro\u0161ka', 'SPD', 'Tomio Okamura', 'ANO'];
  commonBadGuys = ['imigrant\u016Fm', 'Draho\u0161ovi', 'isl\xE1mu'];
  commonPatrioticLine = ['Tato zem\u011B\n je na\u0161e!', 'Zemi si vz\xEDt\n nenech\xE1me!', 'Proti \nisl\xE1mu!', 'Za na\u0161e d\u011Bti!', 'Svou zemi v\xE1m ned\xE1me!'];
  commonLovingFooter = ['Volte \nZemana!', 'Nevolte \nDraho\u0161e!', 'Zeman \nna Hrad!', 'Zeman \nznovu!'];
  commonLovingHeader = ['N\xE1\u0161 prezident', 'Srdcem', 'Rozumem'];
  commonStop = ['l\u017E\xEDm, strachu a\n nen\xE1visti', 'Moskv\u011B a\n Kremlu', 'hlup\xE1k\u016Fm a\n omezenc\u016Fm', 'star\xFDm struktur\xE1m', '<bad-guys> a\\n <bad-guys>'];
  commonContent = '\n\ncontent = <simples> +++ <footer>\ncontent = Stop +++ <stop> +++\\n<footer>\ncontent = <loving-header> +++ Vol\xED ho i\\n <respected-people> +++ <footer>\n\nfooter =  <loving-footer> | <patriotic-line>\n\n';
  simples = commonSimples;
  respectedPeople = commonRespectedPeople;
  badGuys = commonBadGuys;
  patrioticLine = commonPatrioticLine;
  lovingFooter = commonLovingFooter;
  lovingHeader = commonLovingHeader;
  stop = commonStop;
  content = '\n\n\n' + commonContent;
  simples_0 = commonSimples;
  respectedPeople_0 = commonRespectedPeople;
  var $receiver = ['mimozem\u0161\u0165an\u016Fm', 'podnikatel\u016Fm', 'kav\xE1rn\xEDk\u016Fm', 'Kalouskovi', 'chemtrails', 'intelektu\xE1l\u016Fm', 'slu\u0161nosti', 'lidskosti', 'evangel\xEDk\u016Fm', 'novin\xE1\u0159\u016Fm', 'v\xED\u0159e', 'solidarit\u011B', 'rozumu', 'abstinent\u016Fm', 'spravedlnosti', 'soudnosti', 'T\u0159et\xED velmoci', 'Pussy Riot', 'akademik\u016Fm', 'vzd\u011Blanc\u016Fm', 'aktivist\u016Fm', 'd\u016Fstojnosti', 'fotbalov\xFDm fanou\u0161k\u016Fm', 'vegetari\xE1n\u016Fm', 'vegan\u016Fm'];
  var elements = commonBadGuys;
  badGuys_0 = $receiver.concat(elements);
  var $receiver_0 = ['Za na\u0161e pejsky!', 'Za Vyso\u010Dinu!', 'Za Bechera!'];
  var elements_0 = commonPatrioticLine;
  patrioticLine_0 = $receiver_0.concat(elements_0);
  var $receiver_1 = ['Volte \nTrumpa!', 'Volte \nKreml!', 'Volte \nLosnu!', 'Volte \nMa\u017E\u0148\xE1ka!', 'Losnu \nnebo Ma\u017E\u0148\xE1ka', 'Volte \nBa\u017E\u0148\xE1ka!', 'Volte \nkr\xE1le Vyso\u010Diny!'];
  var elements_1 = commonLovingFooter;
  lovingFooter_0 = $receiver_1.concat(elements_1);
  var $receiver_2 = ['Cite\u010Dky', 'Nemyslete!'];
  var elements_2 = commonLovingHeader;
  lovingHeader_0 = $receiver_2.concat(elements_2);
  var $receiver_3 = ['hlup\xE1k\u016Fm a\n populist\u016Fm', 'vulgarit\u011B a\n dezinformaci', 'vulgarit\u011B a\n neurvalosti', 'zedn\xE1\u0159\u016Fm a\n \u0158\xEDmsk\xE9mu klubu', 'Nejedl\xE9mu, Myn\xE1\u0159ovi a\n dal\u0161\xEDm p\u0159\xE1tel\u016Fm'];
  var elements_3 = commonStop;
  stop_0 = $receiver_3.concat(elements_3);
  content_0 = '\n\n\n' + commonContent;
  Kotlin.defineModule('generator.umd', _);
  return _;
}));

//# sourceMappingURL=generator.umd.js.map
