// priority: 0

onEvent("recipes", (event) => {
  // Change recipes here
  const smeltBlast = (out, inp, name) => {
    event.smelting(out, inp).id("create:smelting/" + name);
    event.blasting(out, inp).id("create:blasting/" + name);
  };
  smeltBlast(
    "pixelmon:platinum_ingot",
    "create:crushed_platinum_ore",
    "platinum_ingot_from_crushed"
  );
  smeltBlast(
    "pixelmon:silver_ingot",
    "create:crushed_silver_ore",
    "silver_ingot_from_crushed"
  );
});
