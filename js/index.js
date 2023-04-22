const speaker = [
  {
    id: 1,
    image: './image/sandro-g.jpg',
    name: 'Sandra kelly',
    position: 'Chair',
    background: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  
  {
    id: 2,
    image: './image/sandro.jpg',
    name: 'M Muster',
    position: 'Coordinator',
    background: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 3,
    image: './image/jake.jpg',
    name: 'Tim Thom',
    position: 'Grandmaster',
    background: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 4,
    image: './image/jack.jpg',
    name: 'zakes Zane',
    position: 'IM Master',
    background: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 5,
    image: './image/andrey.jpg',
    name: 'Kelly Aile',
    position: 'Player',
    background: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 6,
    image: './image/tide_trasher.jpg',
    name: 'Bratney Lewis',
    position: 'Player',
    background: 'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
];

function createSpeakers(id, name, image, position, background) {
  return `
    <section class="speakers">
              <img
                src="${name}"
                alt="speaker1"
                class="img-speaker"
              />
              <div class="speaker-info">
                <p class="name">${image}</p>
                <p class="speaker-title">${position}</p>
                <p class="title-bar-speaker lowbar-title"></p>
                <article class="speaker-bio">
                   ${background}
                </article>
              </div>
            </section>
    `;
}

let speakers = '';

speaker.forEach((item) => {
  const html = createSpeakers(
    item.id,
    item.image,
    item.name,
    item.position,
    item.background,
  );
  speakers += html;
});

document.getElementById('speaker-container').innerHTML = speakers;



let countDownDate = new Date("nov 11, 2023 12:00:00").getTime();

let x = setInterval(function() {
let now = new Date().getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);



  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);