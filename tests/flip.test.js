const flip = require("../index");

describe("Array of rows", () => {
  test("flips 2x2 matrix", () => {
    let matrix = [["r1,c1", "r1,c2"], ["r2,c1", "r2,c2"]];
    let output = [["r1,c2", "r1,c1"], ["r2,c2", "r2,c1"]];
    expect(flip(matrix)).toEqual(output);
  });

  test("flips 3x2 matrix", () => {
    let matrix = [["r1,c1", "r1,c2"], ["r2,c1", "r2,c2"], ["r3,c1", "r3,c2"]];
    let output = [["r1,c2", "r1,c1"], ["r2,c2", "r2,c1"], ["r3,c2", "r3,c1"]];
    expect(flip(matrix)).toEqual(output);
  });

  test("flips 10x10 matrix", () => {
    let matrix = [
      [
        "r1,c1",
        "r1,c2",
        "r1,c3",
        "r1,c4",
        "r1,c5",
        "r1,c6",
        "r1,c7",
        "r1,c8",
        "r1,c9",
        "r1,c10"
      ],
      [
        "r2,c1",
        "r2,c2",
        "r2,c3",
        "r2,c4",
        "r2,c5",
        "r2,c6",
        "r2,c7",
        "r2,c8",
        "r2,c9",
        "r2,c10"
      ],
      [
        "r3,c1",
        "r3,c2",
        "r3,c3",
        "r3,c4",
        "r3,c5",
        "r3,c6",
        "r3,c7",
        "r3,c8",
        "r3,c9",
        "r3,c10"
      ],
      [
        "r4,c1",
        "r4,c2",
        "r4,c3",
        "r4,c4",
        "r4,c5",
        "r4,c6",
        "r4,c7",
        "r4,c8",
        "r4,c9",
        "r4,c10"
      ],
      [
        "r5,c1",
        "r5,c2",
        "r5,c3",
        "r5,c4",
        "r5,c5",
        "r5,c6",
        "r5,c7",
        "r5,c8",
        "r5,c9",
        "r5,c10"
      ],
      [
        "r6,c1",
        "r6,c2",
        "r6,c3",
        "r6,c4",
        "r6,c5",
        "r6,c6",
        "r6,c7",
        "r6,c8",
        "r6,c9",
        "r6,c10"
      ],
      [
        "r7,c1",
        "r7,c2",
        "r7,c3",
        "r7,c4",
        "r7,c5",
        "r7,c6",
        "r7,c7",
        "r7,c8",
        "r7,c9",
        "r7,c10"
      ],
      [
        "r8,c1",
        "r8,c2",
        "r8,c3",
        "r8,c4",
        "r8,c5",
        "r8,c6",
        "r8,c7",
        "r8,c8",
        "r8,c9",
        "r8,c10"
      ],
      [
        "r9,c1",
        "r9,c2",
        "r9,c3",
        "r9,c4",
        "r9,c5",
        "r9,c6",
        "r9,c7",
        "r9,c8",
        "r9,c9",
        "r9,c10"
      ],
      [
        "r10,c1",
        "r10,c2",
        "r10,c3",
        "r10,c4",
        "r10,c5",
        "r10,c6",
        "r10,c7",
        "r10,c8",
        "r10,c9",
        "r10,c10"
      ]
    ];
    let output = [
      [
        "r1,c10",
        "r1,c9",
        "r1,c8",
        "r1,c7",
        "r1,c6",
        "r1,c5",
        "r1,c4",
        "r1,c3",
        "r1,c2",
        "r1,c1"
      ],
      [
        "r2,c10",
        "r2,c9",
        "r2,c8",
        "r2,c7",
        "r2,c6",
        "r2,c5",
        "r2,c4",
        "r2,c3",
        "r2,c2",
        "r2,c1"
      ],
      [
        "r3,c10",
        "r3,c9",
        "r3,c8",
        "r3,c7",
        "r3,c6",
        "r3,c5",
        "r3,c4",
        "r3,c3",
        "r3,c2",
        "r3,c1"
      ],
      [
        "r4,c10",
        "r4,c9",
        "r4,c8",
        "r4,c7",
        "r4,c6",
        "r4,c5",
        "r4,c4",
        "r4,c3",
        "r4,c2",
        "r4,c1"
      ],
      [
        "r5,c10",
        "r5,c9",
        "r5,c8",
        "r5,c7",
        "r5,c6",
        "r5,c5",
        "r5,c4",
        "r5,c3",
        "r5,c2",
        "r5,c1"
      ],
      [
        "r6,c10",
        "r6,c9",
        "r6,c8",
        "r6,c7",
        "r6,c6",
        "r6,c5",
        "r6,c4",
        "r6,c3",
        "r6,c2",
        "r6,c1"
      ],
      [
        "r7,c10",
        "r7,c9",
        "r7,c8",
        "r7,c7",
        "r7,c6",
        "r7,c5",
        "r7,c4",
        "r7,c3",
        "r7,c2",
        "r7,c1"
      ],
      [
        "r8,c10",
        "r8,c9",
        "r8,c8",
        "r8,c7",
        "r8,c6",
        "r8,c5",
        "r8,c4",
        "r8,c3",
        "r8,c2",
        "r8,c1"
      ],
      [
        "r9,c10",
        "r9,c9",
        "r9,c8",
        "r9,c7",
        "r9,c6",
        "r9,c5",
        "r9,c4",
        "r9,c3",
        "r9,c2",
        "r9,c1"
      ],
      [
        "r10,c10",
        "r10,c9",
        "r10,c8",
        "r10,c7",
        "r10,c6",
        "r10,c5",
        "r10,c4",
        "r10,c3",
        "r10,c2",
        "r10,c1"
      ]
    ];
    expect(flip(matrix)).toEqual(output);
  });
});
describe("Array of columns", () => {
  test("flips 2x2 matrix", () => {
    let matrix = [["r1,c1", "r2,c1"], ["r1,c2", "r2,c2"]];
    let output = [["r1,c2", "r2,c2"], ["r1,c1", "r2,c1"]];
    expect(flip(matrix, { arrayOfColumns: true })).toEqual(output);
  });

  test("flips 3x2 matrix", () => {
    let matrix = [["r1,c1", "r2,c1", "r3,c1"], ["r1,c2", "r2,c2", "r3,c2"]];
    let output = [["r1,c2", "r2,c2", "r3,c2"], ["r1,c1", "r2,c1", "r3,c1"]];
    expect(flip(matrix, { arrayOfColumns: true })).toEqual(output);
  });
});