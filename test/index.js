
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
      'Foo-Bar ': 'baz',
      'Something Here': 'baz',
      foo_bar_Baz: 'something'
    });

    s.should.eql({
      foo_bar: 'baz',
      something_here: 'baz',
      foo_bar_baz: 'something'
    });
  })
})

describe('nested', function(){
  it('should join keys with "."', function(){
    var s = schema({
      user: {
        first: 'tobi',
        last: 'ferret',
        age: 2
      },
      timestamp: 1231232
    });

    s.should.eql({
      'user.first': 'tobi',
      'user.last': 'ferret',
      'user.age': 2,
      'timestamp': 1231232
    })
  })
})