class Mango extends BaseClass {
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.body.isStatic = true;
    this.image = loadImage("mango.png");
  }

  display() {
    super.display();
  }
}
