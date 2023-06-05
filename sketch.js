function setup() {
    createCanvas(600, 200);
  
    //inspo: https://www.freepik.es/vector-premium/arte-abstraccion-geometrica_31489441.htm
  
    noStroke();
    //primera linea//
  
    //primer cuad
    fill("#D9ACF5");
    rect(0, 0, 200, 200);
  
    fill("#4E31AA");
    ellipse(100, 60, 90, 90);
    fill("#645CBB");
    ellipse(100, 80, 80, 80);
    fill("#A084DC");
    ellipse(100, 100, 70, 70);
    fill("#BFACE2");
    ellipse(100, 120, 60, 60);
    fill("#EBC7E6");
    ellipse(100, 140, 50, 50);
  
    //seg cuad
    fill("#301E67");
    rect(200, 0, 200, 200);
    fill("#645CBB");
    rect(300, 0, 100, 200);
    bezier(300, 70, 300, 10, 150, 0, 300, 160);
    fill("#301E67");
    bezier(300, 70, 300, 10, 450, 0, 300, 160);
  
    //tercer cuad
    fill("#82AAE3");
    rect(400, 0, 200, 200);
  
    fill("#BFEAF5");
    rect(500, 0, 100, 100);
    fill("#91D8E4");
    rect(400, 100, 100, 100);
    fill("#EAFDFC");
    ellipse(500, 100, 50, 50);
  }
  