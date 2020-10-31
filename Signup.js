class SignUp{
	constructor(){
		//creating form elements
		this.name = createInput("").attribute("placeholder","Name");
	    this.username = createInput("").attribute("placeholder","User Name");
	    this.password = createInput("","password").attribute("placeholder","password");
	    this.confirmPassword = createInput("","Confirm password").attribute("placeholder","password");
	    this.submitSignUp = createButton("Sign Up");
	    this.nextButton = createButton("Next");
	    this.title = createElement('h6');
	    this.title2 = createElement('h6');
	    this.title3 = createElement('h6');
	    this.error = createElement("h5");
	}
	display(){
		
		if(gameState === 0){
			this.nextButton.hide();
		}else if(gameState === 1){
			this.nextButton.show();
		}
		if(signUp_clcik){	
		//set position for form elements		
			this.name.position(displayWidth/2 - 40 , displayHeight/2 - 80);
	      	this.username.position(displayWidth/2 - 40, displayHeight/2 - 40);
	      	this.password.position(displayWidth/2 - 40, displayHeight/2);
	      	this.confirmPassword.position(displayWidth/2 - 40, displayHeight/2 + 40);
	      	this.submitSignUp.position(displayWidth/2 - 40, displayHeight/2 + 80);	      	

	      	//process detail when clicked button
	      	this.submitSignUp.mousePressed(()=>{
	      		//storing form data in a variable
	      		var pwd =this.password.value();
	      		var cPwd = this.confirmPassword.value();
	      		var name = this.name.value();
	      		var username = this.username.value();

	      		//check no field is empty 
	      		if(pwd && cPwd && name && username){
	      			this.error.hide(); //hide error message

	      			//comparing passwords
				    if(pwd===cPwd){

				    	//assigning form data to player class object
				        player.name = name;
				        player.username = username;
				        player.confirmPassword = pwd;
				        player.password =cPwd;
				        playerCount+=1;
				        player.index = playerCount;
				        
				        //updating player count
				        playerCount+=1;
				      	player.index = playerCount;

				      	signUp_clcik=0; 

				      	//form.showButton(); //calling function to show buttons
				      	this.hideForm(); //hiding form
				      	player.update(); //updating player data in database
				      	player.updateCount(playerCount); //update player count

				      	
				      	this.title.html("Welcome to The Thrilling Escape!! So the story goes like this: You have been captured by terrorists. To be free, you have to escape the the warehouse you have been trapped inside. The warehouse has a total of 20 rooms. Each room ");
				      	this.title.position(displayWidth/2-530, displayHeight/2);

				      	this.title2.html("will have a certain amount of terrorists inside. You will have to kill every single one of them and then find a key. This key will be possessed by one of the terrorists. The key will give you access to the next room. Every room");
				      	this.title2.position(displayWidth/2-480, displayHeight/2+40);

 						this.title3.html("is a level. Once you cross all, you will be given access to the next seaason. Good luck, we hope you enjoy our game!!!");
 						this.title3.html(displayWidth/2, displayHeight/2+80);

 						this.nextButton.position(displayWidth/2, displayHeight/2+200);

 						this.nextButton.mousePressed(()=>{
 							this.title.hide();
 							this.title2.hide();
 							this.title3.hide();
 							this.nextButton.hide();
 						});

				    }
				     else{
				     	//show error msg
				      	this.error.show();
				      	this.error.html("Please check password");
    					this.error.position(displayWidth/2 - 40, displayHeight/2 + 100);
				    }
				}
				    else{
				    	//show error msg
						this.error.show();
				      	this.error.html("Please fill all the details");
    					this.error.position(displayWidth/2 - 40, displayHeight/2 + 100);
				      	
				    }
		    })
		}
		else{
			this.hideForm();//hide form
			this.error.hide();//hide errors
		}

	}
	hideForm(){
		//hide all form elements
		this.name.hide();
	    this.username.hide();
	    this.password.hide();
	    this.confirmPassword.hide();
	    this.submitSignUp.hide();
	}

}