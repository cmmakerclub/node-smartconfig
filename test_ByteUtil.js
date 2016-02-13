var assert = require('assert');
var ByteUtil = require("./ByteUtil");

var byteUtil = new ByteUtil;

describe('test_splitUint8To2bytes', function(){
  it('should return [0x02, 0x01]', function(){
    var character = String.fromCharCode(33);
    var result = byteUtil.splitUint8To2bytes(character);
    assert.strictEqual(result[0], 0x02);
    assert.strictEqual(result[1], 0x01);
  });
});

describe('test_splitUint8To2bytes', function(){
  it('should return [0x02, 0x02]', function(){
    var character = String.fromCharCode(34);
    var result = byteUtil.splitUint8To2bytes(character);
    assert.strictEqual(result[0], 0x02);
    assert.strictEqual(result[1], 0x02);
  });
});

describe('test_combine2bytesToOne', function(){
  it('should return 34', function(){
    var low = 0x02;
    var high = 0x02;
    var result = byteUtil.combine2bytesToOne(low, high);
    assert.strictEqual(result, 34);
  });
});

describe('test_combine2bytesToOne', function(){
  it('should return 33', function(){
    var low = 0x02;
    var high = 0x01;
    var result = byteUtil.combine2bytesToOne(low, high);
    assert.strictEqual(result, 33);
  });
});

describe('test_parseBssid', function(){
  it('should return 0ffe349aa3c4', function(){
    var b = new Buffer([15, -2, 52, -102, -93, -60]);
    var result = byteUtil.parseBssid(b);
    assert.strictEqual(result, '0ffe349aa3c4');
  });
});

describe('test_convertUint8toByte', function(){
  it('should return test_convertUint8toByte', function(){
    var c1 = String.fromCharCode(97);
    var c2 = String.fromCharCode(128);
    var c3 = String.fromCharCode(255);
    assert.strictEqual(byteUtil.convertByte2Uint8(c1), 97);
    assert.strictEqual(byteUtil.convertByte2Uint8(c2), 128);
    assert.strictEqual(byteUtil.convertByte2Uint8(c3), 255);
  });
});

describe('test_convertUint8toByte', function(){
  it('should return test_convertUint8toByte', function(){
    var c1 = String.fromCharCode(97);
    var c2 = String.fromCharCode(128);
    var c3 = String.fromCharCode(255);
    assert.strictEqual(byteUtil.convertUint8toByte(c1), 97);
    assert.strictEqual(byteUtil.convertUint8toByte(c2), -128);
    assert.strictEqual(byteUtil.convertUint8toByte(c3), -1);
  });
});

  // private static void test_convertUint8toByte()
  //       {
  //           char c1 = 'a';
  //           // 128: 1000 0000 should be -128 in byte
  //           // 255: 1111 1111 should be -1 in byte
  //           char c2 = (byte)128;
  //           char c3 = 255;
  //           if (convertUint8toByte(c1) == 97 && convertUint8toByte(c2) == -128
  //                   && convertUint8toByte(c3) == -1)
  //           {
  //               System.out.println("test_convertUint8toByte(): pass");
  //           }
  //           else
  //           {
  //               System.out.println("test_convertUint8toByte(): fail");
  //           }
  //       }
