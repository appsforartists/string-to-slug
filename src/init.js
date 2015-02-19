var diacritics  = require("diacritics");

var stringToSlug = function (string) {

                // converts "#ÆRO GIRLS!^!" to "aero-girls"
  var result =  diacritics.remove(
                  string
                ).toLowerCase(

                // replace + and & with "-and-"
                ).replace(
                  /[+&]+/g,
                  "-and-"

                // remove periods (to make acronyms look better)
                ).replace(
                  /\.+/g,
                  ""

                // replace non-letters/numbers with dashes
                ).replace(
                  /[^a-z^0-9]+/g,
                  "-"

                // trim dashes from head & tail
                ).replace(
                  /^\-+|\-+$/g,
                  ""
                );

  return result;
};

module.exports = stringToSlug;
