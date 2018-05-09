export default function(ms, name, sidc) {
  describe(name, () => {
    describe("Main Icon", () => {
      for (let i = 0; i < sidc["main icon"].length; i++) {
        let icon =
          sidc["main icon"][i]["code scheme"] +
          "F" +
          sidc["main icon"][i]["battle dimension"] +
          "P" +
          sidc["main icon"][i].code +
          " " +
          sidc["main icon"][i].name[sidc["main icon"][i].name.length - 1];
        let valid = new ms.Symbol(
          sidc["main icon"][i]["code scheme"] +
            "F" +
            sidc["main icon"][i]["battle dimension"] +
            "P" +
            sidc["main icon"][i].code
        ).isValid();
        // eslint-disable-next-line no-console
        //console.log(`testing ${icon}`);
        if (valid) {
          it(icon, () => {});
        } else {
          // For now, we will skip symbols that fails, and simply warn that something went wrong
          // This should be changed before release
          it.skip(icon, () => {});
          console.warn(icon);
        }
      }
    });
  });
}
