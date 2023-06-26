
class Character extends MovableObject {
  height = 330;
  y = 120;
  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];

 world;

  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);

    this.animate();
  }

  animate() {
    setInterval(() => {

      if(this.world.keyboard.RIGHT){

      let i = this.currentImage % this.IMAGES_WALKING.length; //let i = 0 % 6 (Modulu % ist der mathematische Rest)
      // i = 0,1,2,3,4,5,0,1,2,3,4,5,0....
      let path = this.IMAGES_WALKING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
      }
    }, 300);
  }


  jump() {}
}