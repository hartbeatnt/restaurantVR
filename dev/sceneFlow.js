import URLS from './urls'

class FlowPoint {
  constructor(videoSource) {
    this.src = videoSource,
    this.options = []
  }
}

const fpts = {};
Object.keys(URLS).forEach(key=>{
  fpts[key] = new FlowPoint(URLS[key])
})

fpts.intro.options = [
  fpts.gardenSalad, 
  fpts.friedChicken,
  fpts.grilledCheese,
  fpts.blt,
  fpts.hamburger
]
fpts.gardenSalad.options = [
  fpts.dressing
]
fpts.dressing.options = [
  fpts.ranch,
  fpts.balsamic,
  fpts.thousandIsland,
  fpts.bleuCheese
]
fpts.friedChicken.options = [ fpts.sideDish ]
fpts.grilledCheese.options = [ fpts.bread ]
fpts.blt.options = [ fpts.bread ]
fpts.hamburger.options = [ fpts.bread ]
fpts.bread.options = [ fpts.white, fpts.wheat ]
fpts.ranch.options = [ fpts.finale ]
fpts.balsamic.options = [ fpts.finale ]
fpts.thousandIsland.options = [ fpts.finale ]
fpts.bleuCheese.options = [ fpts.finale ]
fpts.wheat.options = [ fpts.sideDish ]
fpts.white.options = [ fpts.sideDish ]
fpts.cheese.options = [fpts.yesCheese, fpts.noCheese ]
fpts.yesCheese.options = [ fpts.toppings ]
fpts.noCheese.options = [ fpts.toppings ]
fpts.toppings = [ fpts.yesEverything, fpts.noEverything]
fpts.yesEverything.options = [ fpts.sideDish ]
fpts.noEverything.options = [ fpts.sideDish ]
fpts.sideDish.options = [
  fpts.mashedPotatoes,
  fpts.fries,
  fpts.sideSalad,
  fpts.coleSlaw,
  fpts.fruit,
]
fpts.mashedPotatoes.options = [ fpts.finale ]
fpts.fries.options = [ fpts.finale ]
fpts.sideSalad.options = [ fpts.dressing ]
fpts.coleSlaw.options = [ fpts.finale ]
fpts.fruit.options = [ fpts.finale ]

export default fpts