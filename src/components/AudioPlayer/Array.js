export default class NextSong extends Array {
  next() {
      return this[++this.current];
  }
}
export const nextSong = new NextSong();