var udp = require('../')
var buf = Buffer.from([
  0xea, 0x61, 0xe2, 0xde, 0x00, 0x50, 0xd5, 0x20, 0x80, 0x00, 0x00, 0x00, 0x00,
  0x04, 0x41, 0x81, 0xc6, 0xe0, 0x46, 0xba, 0xfd, 0xc6, 0x87, 0x22, 0x10, 0xd7,
  0xeb, 0xda, 0xd7, 0x4f, 0x62, 0x45, 0xac, 0x6b, 0xce, 0x7e, 0x6a, 0x8d, 0x4d,
  0xbc, 0xd2, 0x57, 0x32, 0x76, 0xcf, 0xa0, 0xde, 0x22, 0x38, 0xf7, 0xe0, 0xd8,
  0xee, 0x6e, 0xe0, 0xa1, 0xe8, 0xb3, 0x3e, 0x29, 0x6e, 0x08, 0x9a, 0x4a, 0xad,
  0x6e, 0x51, 0xed, 0x0b, 0xf6, 0x13, 0xff, 0xd8, 0x24, 0xbf, 0xba, 0xa4, 0x0b,
  0x05, 0xad
])
console.log(udp.decode(buf))
