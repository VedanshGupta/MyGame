/*class Login{
	constructor(){
		//create form elements
		this.lName = createInput("").attribute("placeholder","User Name");
	    this.lPassword = createInput("","password").attribute("placeholder","password");
	    this.login = createButton("Log In");
	    this.welcome =createElement('h2');

	}	
	display(){
			Player.getPlayerInfo();//get player info from database

			//setposition of elements
			this.lName.position(displayWidth/2 - 40, displayHeight/2 - 40);
      		this.lPassword.position(displayWidth/2 - 40, displayHeight/2);
      		this.login.position(displayWidth/2 - 35, displayHeight/2 + 40);

      		//when login button is pressed
      		this.login.mousePressed(()=>{
      			//store the form values
	      		var name = this.lName.value();
	      		var pwd = this.lPassword.value();
	      		
	      		//check input is not empty      		
	      		if(name && pwd){ 
	      			//check data is present in database
		      		if(allPlayers !== undefined){
	      				sForm.error.hide(); //hide errors
	      				
	      				//process all the values from database
		      			for(var plr in allPlayers){ 
		      				
		      				//compare the form data with database
		      				if(allPlayers[plr].username === name && allPlayers[plr].password === pwd){
		      					//login success
		      					this.hideForm();//hide current form
		      					form.hideButton();// hide login & signup buttons

		      					this.welcome.html("Welcome Back!!!");
		      					this.welcome.position(displayWidth/2 - 40 , displayHeight/2 - 80);

		      					
		      				}
		      				
		      			}
		      		}else{
		      			sForm.error.show();
				      	sForm.error.html("Please try again");
    					sForm.error.position(displayWidth/2 - 40, displayHeight/2 + 100);
		      		}
		      	}
		      	else{
		      		sForm.error.show();
				    sForm.error.html("Please try again");
    				sForm.error.position(displayWidth/2 - 40, displayHeight/2 + 100);
		      	}
		    });	
		     
      		
	}
	hideForm(){
		this.lName.hide();
      	this.lPassword.hide();
      	this.login.hide();
	}
}*/