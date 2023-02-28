let sound1, sound2, delay1, delay2, sound3, sound4, delay3, delay4;
let delayTimeSlider1,
  pitchSlider1,
  octaveSlider1,
  delayTimeSlider3,
  pitchSlider3,
  octaveSlider3;
let delayTimeSlider2,
  pitchSlider2,
  octaveSlider2,
  delayTimeSlider4,
  pitchSlider4,
  octaveSlider4;
let panSlider1, panSlider2, panSlider3, panSlider4;
let volumeSlider1, volumeSlider2, volumeSlider3, volumeSlider4;

let isPlaying = false;



function preload() {
  sound1 = loadSound("RullyShabaraSampleF5.wav");
  sound2 = loadSound("RullyShabaraSampleF4.wav");
  sound3 = loadSound("RullyShabaraSampleF26.mp3");
  sound4 = loadSound("RullyShabaraSampleT29.mp3");
}

function setup() {
  createCanvas(390, 600);
  background(25);

  
  sound1.stop();
  sound2.stop();

  delay1 = new p5.Delay();
  delay1.process(sound1, 0.12, 0.7, 2300);
  delay2 = new p5.Delay();
  delay2.process(sound2, 0.12, 0.7, 2300);
  delay3 = new p5.Delay();
  delay3.process(sound3, 0.12, 0.7, 2300);
  delay4 = new p5.Delay();
  delay4.process(sound4, 0.12, 0.7, 2300);

  // Add a start button
  let startButton = createButton("Start/Stop");
startButton.class('button');

  startButton.position(159, 160);
  startButton.mousePressed(togglePlay);

  function togglePlay() {
    isPlaying = !isPlaying;

    if (isPlaying) {
      sound1.play();
      sound1.loop();
      sound2.play();
      sound2.loop();
      sound3.play();
      sound3.loop();
      sound4.play();
      sound4.loop();
    } else {
      sound1.stop();
      sound2.stop();
      sound3.stop();
      sound4.stop();
    }
  }

  // Column 1
 textSize(8);
  fill(255);
  text("DELAY", 180, 35);
  text("RATE", 180, 55);
  text("PITCH", 180, 75);
  text("PAN", 180, 120);
  text("VOL", 180, 140);
  
  text("DELAY", 180, 215);
  text("RATE", 180, 235);
  text("PITCH", 180, 255);
  text("PAN", 180, 300);
  text("VOL", 180, 320);



  delayTimeSlider1 = createSlider(0, 1, 0.12, 0.01).position(20, 40).class('slider');
  pitchSlider1 = createSlider(0.5, 2, 0, 0.02);

  octaveSlider1 = createSlider(-2, 2, 0, 0.2);

  delayTimeSlider1.position(20, 20);
  pitchSlider1.position(20, 40).class('slider');

  octaveSlider1.position(20, 60).class('slider');

  panSlider1 = createSlider(-1, 1, 0, 0.01);
  panSlider1.position(20, 110).class('slider');

  volumeSlider1 = createSlider(0, 1, 0, 0.01);
  volumeSlider1.position(20, 130).class('slider');

  delayTimeSlider3 = createSlider(0, 1, 0.12, 0.01);
  pitchSlider3 = createSlider(0.5, 2, 1, 0.01);

  octaveSlider3 = createSlider(-2, 2, 0, 0.1);

  delayTimeSlider3.position(20, 200).class('slider');
  pitchSlider3.position(20, 220).class('slider');

  octaveSlider3.position(20, 240);

  panSlider3 = createSlider(-1, 1, 0, 0.01);
  panSlider3.position(20, 290).class('slider');

  volumeSlider3 = createSlider(0, 1, 1, 0.01);
  volumeSlider3.position(20, 310).class('slider');

  // Column 2
  delayTimeSlider2 = createSlider(0, 1, 0.12, 0.01);
  pitchSlider2 = createSlider(0.5, 2, 1, 0.01);

  octaveSlider2 = createSlider(-2, 2, 0, 0.1);

  delayTimeSlider2.position(230, 20).class('slider');
  pitchSlider2.position(230, 40).class('slider');

  octaveSlider2.position(230, 60).class('slider');

  panSlider2 = createSlider(-1, 1, 0, 0.01);
  panSlider2.position(230, 110).class('slider');

  volumeSlider2 = createSlider(0, 1, 0, 0.01);
  volumeSlider2.position(230, 130).class('slider');

  delayTimeSlider4 = createSlider(0, 1, 0.12, 0.01);
  pitchSlider4 = createSlider(0.5, 2, 1, 0.01);

  octaveSlider4 = createSlider(-2, 2, 0, 0.1);

  delayTimeSlider4.position(230, 200).class('slider');
  pitchSlider4.position(230, 220).class('slider');

  octaveSlider4.position(230, 240).class('slider');

  panSlider4 = createSlider(-1, 1, 0, 0.01);
  panSlider4.position(230, 290).class('slider');

  volumeSlider4 = createSlider(0, 1, 0, 0.01);
  volumeSlider4.position(230, 310).class('slider');
}

function draw() {
  

  if (!isPlaying) {
    return;
  }

  // Column 1
  delay1.delayTime(delayTimeSlider1.value());
  sound1.rate(pitchSlider1.value() * pow(2, octaveSlider1.value()));
  sound1.amp(volumeSlider1.value());
  sound1.pan(panSlider1.value());

  delay3.delayTime(delayTimeSlider3.value());
  sound3.rate(pitchSlider3.value() * pow(2, octaveSlider3.value()));
  sound3.amp(volumeSlider3.value());
  sound3.pan(panSlider3.value());

  // Column 2
  delay2.delayTime(delayTimeSlider2.value());
  sound2.rate(pitchSlider2.value() * pow(2, octaveSlider2.value()));
  sound2.amp(volumeSlider2.value());
  sound2.pan(panSlider2.value());

  delay4.delayTime(delayTimeSlider4.value());
  sound4.rate(pitchSlider4.value() * pow(2, octaveSlider4.value()));
  sound4.amp(volumeSlider4.value());
  sound4.pan(panSlider4.value());
}