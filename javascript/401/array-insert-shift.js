"use strict";

function arrayReverse(arr) {
  const spliced = arr.splice(1, 1, "3");
  console.log("array after changed:", arr);
  console.log("the change:", spliced);
}

arrayReverse(["1", "2", "3"]);
// expected result : [1,3,3]
