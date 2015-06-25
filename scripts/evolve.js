$(function() {
  
  // properties

  var population = [];
  var ideal = { R: 0, G: 105, B: 64 };
  var totalFitness = 0;
  var div = document.getElementById("population");
  var idealDiv = document.getElementById("idealColour");
  var running = false;
  var interval;
  
  // utils
  
  var randomInt = function(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
  };
  
  var randomBool = function(chance) {
    if (typeof chance === 'undefined') chance = 0.5;
    return Math.random() < chance;
  };
  
  var isInt = function(value) {
    var x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
  };
  
  // classes
  
  var Colour = function(R, G, B) {
    this.R = (typeof R === 'undefined') ? randomInt(0,255) : R;
    this.G = (typeof G === 'undefined') ? randomInt(0,255) : G;
    this.B = (typeof B === 'undefined') ? randomInt(0,255) : B;
    this.setFitness();
    this.setElement();
  };
  Colour.prototype.setFitness = function() {
    var dR = this.R - ideal.R;
    var dG = this.G - ideal.G;
    var dB = this.B - ideal.B;
    var distance = Math.round(Math.sqrt(dR*dR + dG*dG + dB*dB));
    this.fitness = Math.round((442 - distance)/442*100);
  };
  Colour.prototype.setElement = function() {
    this.element = document.createElement('div');
    this.element.setAttribute('class', 'colour');
    this.element.setAttribute('style', 'background-color:RGB('+this.R+','+this.G+','+this.B+')');
  };
  
  // methods
  
  var changeIdeal = function() {
    var R = $("#idealR").val();
    var G = $("#idealG").val();
    var B = $("#idealB").val();
    ideal = { R: R, G: G, B: B };
    idealDiv.setAttribute('style', 'background-color:RGB('+R+','+G+','+B+')');
    totalFitness = 0;
    for (var i=0; i<100; i++) {
      population[i].setFitness();
      totalFitness += population[i].fitness;
    }
  }
  
  var advanceDay = function() {
    if (totalFitness === 10000) {
      startStop();
      return;
    }
    var parents = chooseParents();
    var child = breed(parents[0], parents[1]);
    mutate(child);
    replaceWeak(child);
  };
  
  var chooseFit = function() {
    var number = randomInt(0, totalFitness - 1);
    for (var i=0; i<100; i++) {
      if (population[i].fitness > number) {
        return i;
      } else {
        number -= population[i].fitness;
      }
    }
  };
  
  var chooseWeak = function() {
    var number = randomInt(0, 9999 - totalFitness);
    for (var i=0; i<100; i++) {
      var weakness = 100 - population[i].fitness;
      if (weakness > number) {
        return i;
      } else {
        number -= weakness;
      }
    }
  };
  
  var mutate = function(colour) {
      if (randomBool(0.01)) {
          colour.R = randomInt(0,255);
      }
      if (randomBool(0.01)) {
          colour.G = randomInt(0,255);
      }
      if (randomBool(0.01)) {
          colour.B = randomInt(0,255);
      }
  };
  
  var chooseParents = function() {
    var parentId1 = 0;
    var parentId2 = 0;
    while (parentId1 === parentId2)
    {
      parentId1 = chooseFit();
      parentId2 = chooseFit();
    }
    return [population[parentId1], population[parentId2]];
  }
  
  var breed = function(parent1, parent2) {
    var R = randomBool() ? parent1.R : parent2.R;
    var G = randomBool() ? parent1.G : parent2.G;
    var B = randomBool() ? parent1.B : parent2.B;
    return new Colour(R, G, B);
  }
  
  var replaceWeak = function(child) {
    var weakId = chooseWeak();
    var deceased = population[weakId];
    div.replaceChild(child.element, deceased.element);
    totalFitness += child.fitness - deceased.fitness;
    population[weakId] = child;
  };
  
  var randomise = function() {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
    totalFitness = 0;
    for (var i=0; i<100; i++) {
      population[i] = new Colour();
      div.appendChild(population[i].element);
      totalFitness += population[i].fitness;
    }
  };
  
  var setupSliders = function() {
    $(".rgbinput").noUiSlider({
    	start: [ 255 ],
      connect: "lower",
    	range: {
    		'min': 0,
    		'max': 255
    	},
      format: wNumb({
    		decimals: 0
    	})
    });
    $("#idealR").Link('lower').to($('#idealRval'));
    $("#idealG").Link('lower').to($('#idealGval'));
    $("#idealB").Link('lower').to($('#idealBval'));
  };
  
  var startStop = function() {
    var button = $("#startStopButton");
    if (running) {
      clearInterval(interval);
      button.html("Start");
      running = false;
    }
    else {
      interval = setInterval(function() { advanceDay(); }, 10);
      button.html("Stop");
      running = true;
    }
  }
  
  // event handlers
  
  $("#startStopButton").click(startStop);
  
  $("#randomiseButton").click(randomise);
  
  $('.rgbinput').on('slide', changeIdeal);
  
  // main
  
  randomise();
  setupSliders();
  changeIdeal();

});