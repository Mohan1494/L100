abstract class ConcessionItem {
  abstract serve(): void;
}

class Popcorn extends ConcessionItem {
  serve() { console.log("Serving Popcorn"); }
}

class Soda extends ConcessionItem {
  serve() { console.log("Serving Soda"); }
}

class Candy extends ConcessionItem {
  serve() { console.log("Serving Candy"); }
}

class HotDog extends ConcessionItem {
  serve() { console.log("Serving HotDog"); }
}

class Nachos extends ConcessionItem {
  serve() { console.log("Serving Nachos"); }
}

export function highnoc() {
  let items: ConcessionItem[] = [
    new Popcorn(), new Soda(), new Candy(), new HotDog(), new Nachos()
  ];

  items.forEach(item => item.serve());

  console.log("High NOC = 5 children of ConcessionItem");
}

highnoc();
