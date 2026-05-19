ServerEvents.tags("item", event => {
  event.add("c:music_discs", "supplementaries:pancake");
})

ServerEvents.tags("fluid", event => {
  event.add("create:bottomless/allow", "createaddition:bioethanol")
})
