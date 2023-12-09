# Parent Child

### Random Numbers

Maak twee componenten:

* Component 1:
  * Deze component genereert zelf voortdurend willekeurige getallen
  * Het minimum en maximum getal is instelbaar via publieke properties
  * het moet ook mogelijk zijn om het component te stoppen en starteren
* Component 2:
  * Deze component bevat 2 invulvelden min en max
  * Alsook een toggle button (checkbox, switch,...)
  * Component 1 wordt getoond in component 2
* De invoer van de gebruiker wordt gebruikt om component 1 te sturen (min, max, start en stop)

![](../.gitbook/assets/randomnumbers.gif)

### Todo Child

* Gebruik het todo lijstje als child component
* Zorg ervoor dat je vanuit de parent de volgende dingen kan instellen:
  * Title (default: todo lijstje)
  * Max. aantal items in delijst (standaard 0, dwz onbeperkt!)
