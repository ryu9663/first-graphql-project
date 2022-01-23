class Player {
  constructor(id, nationality, position, name, image) {
    this.id = id;
    this.nationality = nationality;
    this.position = position;
    this.name = name;
    this.image = image;
  }
}
export const champion = [
  new Player(0, "Korea", "MF", "J.S Park", "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/jisung-park.png"),
  new Player(1, "England", "FW", "Rooney", "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/wayne-rooney.png"),
  new Player(2, "Brazil", "MF", "Kaka", "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/kaka.png"),
];
