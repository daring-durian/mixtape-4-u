const userData = [
  {email: 'Kathy@email.com', password: '123', name: 'Kathy'},
  {
    email: 'Desiree@email.com',
    password: '456',
    name: 'Desiree'
  },
  {
    email: 'Allyson@email.com',
    password: '789',
    name: 'Allyson'
  },
  {
    email: 'yuliya@email.com',
    password: 'password',
    name: 'Yuliya'
  }
]

const songData = [
  {
    name: 'The World At Large',
    artist: 'Modest Mouse',
    album: 'Good News for People Who Love Bad News',
    year: '2004',
    tags: 'rock',
    imageUrl: '/album-art/AKAA.png',
    songUrl:
      'https://open.spotify.com/embed/track/5op53ANI4exiWqFHKuwWxd?si=DeaOXZZuS-KCqJq5uOGjoA'
  },
  {
    name: 'This Year',
    artist: 'The Mountain Goats',
    album: 'The Sunset Tree',
    year: '2005',
    tags: 'rock',
    imageUrl: '/album-art/AKAA.png',
    songUrl:
      'https://open.spotify.com/embed/track/0s9aeZriwqyBYfxFzsd20R?si=dN0eNchlQKOtF-7S0Sslcg'
  },
  {
    name: 'September',
    artist: 'Earth, Wind & Fire',
    album: 'The Best of Earth, Wind & Fire Vol. 1',
    year: '1978',
    tags: 'disco',
    imageUrl: '/album-art/AKAA.png',
    songUrl:
      'https://open.spotify.com/embed/track/2grjqo0Frpf2okIBiifQKs?si=R8EcGX-PTvyYlbcVVDN70g'
  },
  {
    name: 'Young Moses',
    artist: 'Josh Ritter',
    album: 'Sermon on the Rocks',
    year: '2015',
    tags: 'pop',
    imageUrl: '/album-art/AKAA.png',
    songUrl:
      'https://open.spotify.com/embed/track/0HjCUl4EInIMuFB41bRD4O?si=HMa7-VUET6uEs5ds2EJiYQ'
  },
  {
    name: 'Dissect the Bird(Live)',
    artist: 'John Craigie',
    album: 'Opening for Steinbeck(Live)',
    year: '2018',
    tags: 'classical',
    imageUrl: '/album-art/AKAA.png',
    songUrl:
      'https://open.spotify.com/embed/track/52Cc6qv2MckQgLjeR5Eai0?si=-NWmDN56TZ2RKnJZuM3Zxg'
  },
  {
    name: 'Tout doucement',
    artist: 'Feist',
    album: 'Let It Die',
    year: '2004',
    tags: 'rock',
    imageUrl: '/album-art/AKAA.png',
    songUrl:
      'https://open.spotify.com/embed/track/6su54hbtgZvc2eKH125hE0?si=ohaC6EC0QESNXrTNxevfvg'
  },
  {
    name: 'Brian Wilson',
    artist: 'Barenaked Ladies',
    album: 'Gordon',
    year: '1992',
    tags: 'pop',
    imageUrl: '/album-art/AKAA.png',
    songUrl:
      'https://open.spotify.com/embed/track/2Eky0Rjbrv0YmNy3wrMtSM?si=y3Q3ZOGqSr-XZtAFf4UGYw'
  },
  {
    name: 'I Specialize In Love',
    artist: 'Sharon Brown',
    album: 'I Specialize In Love',
    year: '2010',
    tags: 'disco',
    imageUrl: '/album-art/AKAA.png',
    songUrl:
      'https://open.spotify.com/embed/track/1SRtnntbQW1KKO6rzEO7ac?si=LSf43l4sSLa0zvXKc9oP6A'
  },
  {
    name: "Don't Stop Me Now",
    artist: 'Queen',
    album: 'Jazz',
    year: '1978',
    tags: 'pop',
    imageUrl: '/album-art/AKAA.png',
    songUrl:
      'https://open.spotify.com/embed/track/7hQJA50XrCWABAu5v6QZ4i?si=Kww9f-obRLGwlsEbOiITXw'
  },
  {
    name: 'The Quiet Things That No One Ever Knows',
    artist: 'Brand New',
    album: 'Deja Entendu',
    year: '2003',
    tags: 'rock',
    imageUrl: '/album-art/AKAA.png',
    songUrl:
      'https://open.spotify.com/embed/track/3IlY76VbP31zwPY0S2EMjh?si=3auIFpj1Q-Sb_qO5Bv9JRQ'
  }
]

const orderData = [
  {fulfulled: false},
  {fulfilled: false},
  {fulfilled: true},
  {fulfulled: false},
  {fulfilled: false},
  {fulfilled: true},
  {fulfilled: false}
]

const mixtapeData = [
  {medium: 'vinyl', name: 'Dance Mixtape'},
  {medium: 'vinyl', name: 'Work Mixtape'},
  {medium: 'cassette', name: 'Sad Mixtape'},
  {medium: 'cd', name: 'Romantic Mixtape'},
  {medium: 'vinyl', name: 'Workout Mixtape'},
  {medium: 'cd', name: 'Emo Mixtape'},
  {medium: 'vinyl', name: 'Yuliyas mixtape'}
]

module.exports = {userData, songData, mixtapeData, orderData}
