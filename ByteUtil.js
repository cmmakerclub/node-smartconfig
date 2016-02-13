var ByteUtil = function() {
    // * Split uint8 to 2 bytes of high byte and low byte. e.g. 20 = 0x14 should
    // * be split to [0x01,0x04] 0x01 is high byte and 0x04 is low byte
    // * 
    // * @param uint8
    // *            the char(uint8)
    // * @return the high and low bytes be split, byte[0] is high and byte[1] is
    // *         low
    this.splitUint8To2bytes = function(char) {
        var buffer = new Buffer([char.charCodeAt(0)]);
        var result = buffer.hexSlice().split('').map(function(v) {
            return parseInt(v, 10);
        });
        return result;
    }

    this.combine2bytesToOne = function(low, high) {
        var buffer = new Buffer([low<<4|high]);
        return buffer.readUInt8();
    }

    this.parseBssid= function(b) {
        return b.hexSlice();
    }

    this.convertByte2Uint8= function(b) {
        var buffer = new Buffer([b.charCodeAt(0)]);
        return buffer.readUInt8();
    }
    this.convertUint8toByte = function(b) {
        var buffer = new Buffer([b.charCodeAt(0)]);
        return buffer.readInt8();
    }
}


module.exports = ByteUtil;