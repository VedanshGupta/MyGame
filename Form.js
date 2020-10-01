class Form {

  constructor() {
    this.input = createInput("Name");
    this.username = createInput("Username");
    this.password = createInput("Password");
    this.confirmPassword = createInput("Confirm Password");
    this.signUp = createButton("Sign Up");
    this.submitSignUp = createButton("Submit");
    this.submitLogin = createButton("Submit");
    this.logIn = createButton("Log In");
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  
  hide(){
    this.greeting.hide();
  }

  display(){
    this.title.html("My Game");
    this.title.position(displayWidth/2 - 50, 0);

   this.signUp.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.logIn.position(displayWidth/2 - 35, displayHeight/2 - 40);
    this.reset.position(displayWidth-100,20);

    this.signUp.mousePressed(()=>{
      this.signUp.hide();
      this.logIn.hide();
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.username.position(displayWidth/2 - 40, displayHeight/2 - 40);
      this.password.position(displayWidth/2 - 40, displayHeight/2);
      this.confirmPassword.position(displayWidth/2 - 40, displayHeight/2 + 40);
      this.submitSignUp.position(displayWidth/2 - 40, displayHeight/2 + 80);
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      //this.greeting.html("Hello " + player.name);
      //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.submitSignUp.mousePressed(()=>{
      if(this.password === this.confirmPassword){
        player.name = this.input.value();
        player.username = this.username.value();
        player.confirmPassword = this.confirmPassword.value();
        player.password = this.password.value();
        playerCount+=1;
        player.index = playerCount;
        console.log(this.username);
        player.update();
        player.updateCount();
      }
    })

    this.logIn.mousePressed(()=>{
      this.signUp.hide();
      this.logIn.hide();
      this.username.position(displayWidth/2 - 40, displayHeight/2 - 40);
      this.password.position(displayWidth/2 - 40, displayHeight/2);
      if(this.username.input === player.username && this.password.input === player.password){
        this.username.hide();
        this.password.hide();
        text("Welcome Back!!", displayWidth/2, displayHeight/2);
      }
      });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
