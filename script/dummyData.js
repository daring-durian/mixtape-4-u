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
    name: 'Yuliya',
    role: 'admin'
  }
]

const songData = [
  {
    name: 'Controversial',
    artist: 'Shallowhalo',
    album: 'Controversial',
    year: '2020',
    tags: 'pop',
    imageUrl: 'https://f4.bcbits.com/img/a4161959886_16.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/7jkTZyAUQD1ODOmxHAGoSd?si=0p2R2E-hQ2epAfzxl_-Y_w'
  },
  {
    name: 'Nothing Can Stop Us',
    artist: 'St. Etienne',
    album: 'Foxbase Alpha',
    year: '1992',
    tags: 'pop',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/FoxbaseAlpha.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/3izKffzHXSwXdhtJ9DasZU?si=_7k9OGl1TXexCgZ3s9v_gA'
  },
  {
    name: 'Go Away',
    artist: 'Strawberry Switchblade',
    album: 'Strawberry Switchblade',
    year: '1985',
    tags: 'pop',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/d/d2/Strawberry_Switchblade_Album_Cover.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/19wyEOwk4PTvfhBxSoZ34a?si=Ei9SrSlqQqe3XSNhQaU-wg'
  },
  {
    name: 'Modigliani',
    artist: 'Book Of Love',
    album: 'Book Of Love',
    year: '1986',
    tags: 'pop',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/f5/Book-of-Love-album-cover.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/53yTfRNAwCC7aLGaKlbysJ?si=kJVSt1HSS9G6B5NwO5H1AA'
  },
  {
    name: 'Deceptacon',
    artist: 'Le Tigre',
    album: 'Le Tigre',
    year: '1999',
    tags: 'rock',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/8/87/Le_Tigre_%28album%29.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/5773KSWFzg9kCc8yazjbSt?si=3SnPziejTWW13KNcBuRkCA'
  },
  {
    name: "I Don't Love Me Anymore",
    artist: 'Oneohtrix Point Never',
    album: 'Magic Oneohtrix Point Never',
    year: '2020',
    tags: 'electronic',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/93/Magic_Oneohtrix_Point_Never.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/70zcYOhqg2DR076kSbQZsR?si=cvYM6Fj8SRmH6FIFr-GwJQ'
  },
  {
    name: 'Ageispolis',
    artist: 'Aphex Twin',
    album: 'Selected Ambient Works 85-92',
    year: '1992',
    tags: 'electronic',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/8/82/Selected_Ambient_Works_85-92.png',
    songUrl:
      'https://open.spotify.com/embed/track/7KRQoq9GeWeCm0ZAXg5XMb?si=2mnHLWHFTUSYcpxMq3eNXw'
  },
  {
    name: 'Alameda',
    artist: 'Elliott Smith',
    album: 'Either/Or',
    year: '1997',
    tags: 'rock',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/fd/Elliottsmitheitheror55.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/3c1EHob1Rp5p1P37YERSr6?si=tpjPBL8ORKq1x9qkdLz14A'
  },
  {
    name: 'Ur Doing Great Sweaty',
    artist: 'Shallowhalo',
    album: 'Ur Doing Great Sweaty',
    year: '2020',
    tags: 'pop',
    imageUrl: 'https://f4.bcbits.com/img/a1572192702_16.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/4m3WWlq32JQEqOXgdRBz2F?si=N7Zd143VR9iouVBkqFlr3A'
  },
  {
    name: "Don't You Want Me",
    artist: 'The Human League',
    album: 'Dare!',
    year: '1981',
    tags: 'pop',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Dare-cover.png',
    songUrl:
      'https://open.spotify.com/embed/track/3L7RtEcu1Hw3OXrpnthngx?si=_ufp6czURLGFswoYFV52-Q'
  },
  {
    name: 'The World At Large',
    artist: 'Modest Mouse',
    album: 'Good News for People Who Love Bad News',
    year: '2004',
    tags: 'rock',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/aa/MMGoodNews5075.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/5op53ANI4exiWqFHKuwWxd?si=DeaOXZZuS-KCqJq5uOGjoA'
  },
  {
    name: 'This Year',
    artist: 'The Mountain Goats',
    album: 'The Sunset Tree',
    year: '2005',
    tags: 'rock',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/35/Themountaingoatsthesunsettreealbumcover.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/0s9aeZriwqyBYfxFzsd20R?si=dN0eNchlQKOtF-7S0Sslcg'
  },
  {
    name: 'September',
    artist: 'Earth, Wind & Fire',
    album: 'The Best of Earth, Wind & Fire Vol. 1',
    year: '1978',
    tags: 'disco',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/95/BestofEarthWind%26Fire.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/2grjqo0Frpf2okIBiifQKs?si=R8EcGX-PTvyYlbcVVDN70g'
  },
  {
    name: 'Young Moses',
    artist: 'Josh Ritter',
    album: 'Sermon on the Rocks',
    year: '2015',
    tags: 'pop',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/c/c8/Sermon_on_the_Rocks_cover.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/0HjCUl4EInIMuFB41bRD4O?si=HMa7-VUET6uEs5ds2EJiYQ'
  },
  {
    name: 'Dissect the Bird(Live)',
    artist: 'John Craigie',
    album: 'Opening for Steinbeck(Live)',
    year: '2018',
    tags: 'classical',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/e/e6/Opening_for_Steinbeck_%28live%29_John_Craigie_album.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/52Cc6qv2MckQgLjeR5Eai0?si=-NWmDN56TZ2RKnJZuM3Zxg'
  },
  {
    name: 'Tout doucement',
    artist: 'Feist',
    album: 'Let It Die',
    year: '2004',
    tags: 'rock',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/ab/Feist_Let_It_Die.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/6su54hbtgZvc2eKH125hE0?si=ohaC6EC0QESNXrTNxevfvg'
  },
  {
    name: 'Brian Wilson',
    artist: 'Barenaked Ladies',
    album: 'Gordon',
    year: '1992',
    tags: 'pop',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Gordon-album.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/2Eky0Rjbrv0YmNy3wrMtSM?si=y3Q3ZOGqSr-XZtAFf4UGYw'
  },
  {
    name: 'Crane Your Neck',
    artist: 'Lady Lamb',
    album: 'Ripely Pine',
    year: '2013',
    tags: 'rock',
    imageUrl:
      'https://media.pitchfork.com/photos/5929b9cbea9e61561daa7090/1:1/w_320/e661cf20.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/7FMedJPiag48GjON0tp2PO?si=dxYz1I8kThOR0FYWhiUfRw'
  },
  {
    name: "Don't Stop Me Now",
    artist: 'Queen',
    album: 'Jazz',
    year: '1978',
    tags: 'pop',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/06/Queen_Jazz.png',
    songUrl:
      'https://open.spotify.com/embed/track/7hQJA50XrCWABAu5v6QZ4i?si=Kww9f-obRLGwlsEbOiITXw'
  },
  {
    name: 'In The Aeroplane Over The Sea',
    artist: 'Neutral Milk Hotel',
    album: 'In The Aeroplane Over The Sea',
    year: '1998',
    tags: 'rock',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/8/83/In_the_aeroplane_over_the_sea_album_cover_copy.jpg',
    songUrl:
      'https://open.spotify.com/embed/track/4OciRObYGzPzlU40U7YRc8?si=7t15NeeNQema6XUaRhjezQ'
  },
  {
    name: 'Beautiful Life',
    artist: 'Ace of Base',
    album: 'The Bridge',
    year: '1995',
    tags: 'pop',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/23/Ace_Of_Base-The_Bridge.jpg',
    songUrl: 'https://open.spotify.com/embed/track/74jTexO94dFGyXGyeu8krd'
  },
  {
    name: 'Be My Lover',
    artist: 'La Bouche',
    album: 'Sweet Dreams',
    year: '1994',
    tags: 'electronic',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/f5/Be_My_Lover_%28La_Bouche_single_-_cover_art%29.jpg',
    songUrl: 'https://open.spotify.com/embed/track/7FoUzKTSQp25oe32pY9z5p'
  },
  {
    name: 'Pump Up the Jam',
    artist: 'Technotronic',
    album: 'Pump Up the Jam',
    year: '1989',
    tags: 'electronic',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/6c/Technotronic_Pump_Up_The_Jam_First_Cover.jpeg',
    songUrl: 'https://open.spotify.com/embed/track/21qnJAMtzC6S5SESuqQLEK'
  },
  {
    name: 'Freed from Desire',
    artist: 'Gala',
    album: 'Come into My Life',
    year: '1996',
    tags: 'electronic',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/c/c6/Gala_-_Come_into_My_Life_%281997%29.jpeg',
    songUrl: 'https://open.spotify.com/embed/track/3u5N55tHf7hXATSQrjBh2q'
  },
  {
    name: 'Show Me Love',
    artist: 'Robin S',
    album: 'Show Me Love',
    year: '1990',
    tags: 'electronic',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/b2/Robin_S_Show_Me_Love_album_cover.jpg',
    songUrl: 'https://open.spotify.com/embed/track/4t0UsYzmmmZRMTWn77jiGF'
  },
  {
    name: 'Sweet Dreams',
    artist: 'La Bouche',
    album: 'Sweet Dreams',
    year: '1994',
    tags: 'electronic',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/57/La_Bouche_Sweet_Dreams_Single_Cover.jpg',
    songUrl: 'https://open.spotify.com/embed/track/2wz5weI4PREzpexKfrKgwv'
  },
  {
    name: 'Try Me Out',
    artist: 'Corona',
    album: 'The Rhythm of the Night',
    year: '1994',
    tags: 'pop',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/21/Corona_The_Rhythm_of_the_Night_album_cover.jpg',
    songUrl: 'https://open.spotify.com/embed/track/2S8EX7GNSnoMnjSJPEAsYt'
  },
  {
    name: 'I Got to Give It Up',
    artist: 'Masterboy',
    album: 'Different Dreams',
    year: '1994',
    tags: 'electronic',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/2a/Masterboy_-_I_Got_to_Give_It_Up.jpg',
    songUrl: 'https://open.spotify.com/embed/track/2ThmEM6C0pq6bwKtDz8BBM'
  },
  {
    name: 'Blue (Da Ba Dee)',
    artist: 'Eiffel 65',
    album: 'Single',
    year: '1998',
    tags: 'pop',
    imageUrl:
      'https://www.edmsauce.com/wp-content/uploads/2020/02/Screen-Shot-2020-02-18-at-8.26.34-PM.png',
    songUrl: 'https://open.spotify.com/embed/track/2yAVzRiEQooPEJ9SYx11L3'
  },
  {
    name: '9 PM (Till I Come)',
    artist: 'ATB',
    album: "Movin' Melodies",
    year: '1998',
    tags: 'electronic',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/e/e4/MovinMelodies.jpg',
    songUrl: 'https://open.spotify.com/embed/track/1CgbwsrNDlFrRuk2ebQ7zr'
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
  {medium: null, name: 'Dance Mixtape'},
  {medium: 'vinyl', name: 'Work Mixtape'},
  {medium: 'cassette', name: 'Sad Mixtape'},
  {medium: 'cd', name: 'Romantic Mixtape'},
  {medium: 'vinyl', name: 'Workout Mixtape'},
  {medium: 'cd', name: 'Emo Mixtape'},
  {medium: 'vinyl', name: 'Yuliyas mixtape'}
]

module.exports = {userData, songData, mixtapeData, orderData}
