
var schema = require('..');

describe('ints', function(){
  it('should be included', function(){
    var s = schema({ count: 1 });
    s.should.eql({ count: 1 });
  })
})

describe('floats', function(){
  it('should be included', function(){
    var s = schema({ count: 1.5 });
    s.should.eql({ count: 1.5 });
  })
})

describe('booleans', function(){
  it('should be included', function(){
    var s = schema({ awesome: true });
    s.should.eql({ awesome: true });
  })
})

describe('strings', function(){
  it('should be included', function(){
    var s = schema({ user: 'tobi' });
    s.should.eql({ user: 'tobi' });
  })
})

describe('keys', function(){
  it('should be normalized', function(){
    var s = schema({
      'fooBarBaz ': 'baz',
      'foo-Bar-Baz ': 'baz',
      'something   here': 'baz',
      foo_bar_Baz: 'something'
    });

    s.should.eql({
      fooBarBaz: 'baz',
      foo_Bar_Baz: 'baz',
      something_here: 'baz',
      foo_bar_Baz: 'something'
    });
  })
})

describe('nested', function(){
  it('should join keys with "."', function(){
    var s = schema({
      user: {
        first: 'tobi',
        last: 'ferret',
        age: 2,
        nicks: {
          shuppa: true,
          foopa: true
        }
      },
      timestamp: 1231232
    });

    s.should.eql({
      'user.nicks.foopa': true,
      'user.nicks.shuppa': true,
      'user.first': 'tobi',
      'user.last': 'ferret',
      'user.age': 2,
      'timestamp': 1231232
    })
  })
})

describe('lowercase option', function(){
  it('should lowercase keys when true', function(){
    var s = schema({
      SomeStuffHere: 'whoop',
      Some: { Nested: 'stuff' }
    }, { lowercase: true });

    s.should.eql({
      'somestuffhere': 'whoop',
      'some.nested': 'stuff'
    });
  })
})