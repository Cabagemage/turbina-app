import nazare from '../mp3/nazare.mp3'
import gosudarstvo from '../mp3/gosudarstvo.mp3'
import hadnDadn from '../mp3/hadnDadn.mp3'
import Letov from '../images/Letov.jpg'
import hadn from '../images/hadn.jpg'
import Monetochka from '../images/Monetochka.jpg'
const songs = [
  {
    id: "0",
    title: "На заре",
    musician: "Монеточка",
    poet: "Альянс",
    audio: nazare,
    cover: Monetochka,
    videoUrl: "https://youtu.be/BvJle-E_4JI",
    lyrics: `Ровный бег моей судьбы
    Ночь, печаль и блеск души
    Лунный свет и майский дождь
    В небесах
    Долгий век моей звезды
    Сонный блеск земной росы
    Громкий смех и райский мед
    В небесах`
  },
  {
    id: "1",
    title: "Государство",
    musician: "Гражданская оборона",
    poet: "Егор Летов",
    audio: gosudarstvo,
    cover: Letov,
    videoUrl: "",
    lyrics: `Ржавый бункер - моя свобода
    Сладкий пряник засох давно
    Сапогом моего народа
    Старшина тормозит говно.

    Запрятанный за углом
    Убитый помойным ведром
    Добровольно ушедший в подвал
    Заранее обреченный на полнейший провал`
  },
  {
    id: "54",
    title: "Мы сегодня дома",
    musician: "Хадн-Дадн",
    poet: "Мы",
    audio: hadnDadn,
    cover: hadn,
    videoUrl: "https://youtu.be/BvJle-E_4JI",
    lyrics: `Ровный бег моей судьбы
    Ночь, печаль и блеск души
    Лунный свет и майский дождь
    В небесах
    Долгий век моей звезды
    Сонный блеск земной росы
    Громкий смех и райский мед
    В небесах`
  },
];

export { songs };
