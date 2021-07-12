let angle, x, y, step_size, current_color

screen_width = 600
screen_height = 600


function mouse_click(e) {
  if (isLooping()) noLoop()
  else {
    loop()
  }
}

function setup() {
  
  angle = QUARTER_PI
  
  n_splits = 60
  box_size = screen_height / n_splits
  step_size = box_size * sqrt(2)
  
  console.log(box_size)

  cnv = createCanvas(screen_width, screen_height);
  cnv.mousePressed(mouse_click)

  x = 0
  y = 0
  
  strokeWeight(0.1)
  stroke(255)
  
  while (x < n_splits) {
    y=0
    while (y < n_splits) {
        
      fill(0, 180, 0, random(40, 180))
      rect(x*box_size, y*box_size, box_size, box_size)
      y = y+1
    }
    x = x+1
  }
  
  
  stroke(255)
  strokeWeight(8)
}


function draw() {
  
  
  // fill(255,255,255, 1)
  // rect(0, 0, screen_width, screen_height)
  
  if(random(100) > 90) {
    
//     do {
//     current_color[0] = current_color[0] + randomGaussian(0, 30)
//     current_color[1] = current_color[1] + randomGaussian(0, 30)
//     current_color[2] = current_color[2] + randomGaussian(0, 30)
    
//     total_color = current_color[0]+current_color[1]+current_color[2]
    
//     } while ((total_color < 200) || (total_color > 600))
    
    // stroke(random(256), random(256), random(256))
      
    angle = angle +( random([-1, 1]) * (HALF_PI))
      
  }
  
  next_x = x + sin(angle) * step_size
  next_y = y + cos(angle) * step_size 
  
  while (
    (next_x < 0) || 
    (next_x > screen_width) || 
    (next_y > screen_height) || 
    (next_y < 0) 
  ) {
    angle = angle + PI
    
    next_x = x + sin(angle) * step_size
    next_y = y + cos(angle) * step_size 
  }
  
  
  
  line(x, y, next_x, next_y)
  
  x = next_x
  y = next_y
  
}
