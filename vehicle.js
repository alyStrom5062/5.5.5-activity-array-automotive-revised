class Vehicle {
	constructor(make, model, year, color, mileage) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
		this.passenger = 0;
		this.speed = 0;
		this.mileage = mileage;
		this.started = false;
		this.numberOfWheels = 0;
	}

	start() {
		if (this.fuel > 0) {
			console.log("engine started...!!!");
			return (this.started = true);
		} else {
			console.log("engine cannot start...");
			return (this.started = false);
		}
	}
	accelerate() {
		if (this.started) {
			if (this.fuel > 0) {
				console.log((this.speed += 1));
				this.fuel = this.fuel - 1;
			} else {
				console.log("out of fuel.");
				this.stop();
			}
		} else {
			alert("You need to start the engine first.");
		}
	}
	decelerate() {
		if (this.started) {
			if (this.fuel > 0) {
				if (this.speed > 0) {
					console.log((this.speed -= 1));
					this.fuel = this.fuel - 1;
				} else {
					console.log(this + " has stopped moving");
					this.fuel = this.fuel - 1;
				}
			} else {
				console.log("out of fuel.");
				this.stop();
			}
		} else {
			console.log("You need to start the engine first.");
		}
	}
	stop() {
		this.started = false;
	}

	//optional methods to code for the Vehicle base class

	drive() {
		accelerate();
	}
	brake() {
		decelerate();
	}

	autoPark() {}

	autoDrive() {}

	typeOfVehicle(wheels) {
		if (this.numberOfWheels == 8 && 8 == wheels) {
			console.log(this.model + " " + this.make + " is a Truck");
		} else if (this.numberOfWheels == 4 && 4 == wheels) {
			console.log(this.model + " " + this.make + " is a CAr");
		} else if (this.numberOfWheels == 2 && 2 == wheels) {
			console.log(this.model + " " + this.make + " is a Bike");
		} else {
			console.log("Unknown type of vehicle");
		}
	}
}

//Code the Car subclass here, i.e. class Car extends Vehicle ...

class Car extends Vehicle {
	constructor(make, model, year, color, mileage){
		super(make, model, year, color, mileage)
			this.maximumPassengers 	= 	5;
			this.passengers 		= 	0;
			this.numberOfWheels 	= 	4;
			this.maximumSpeed 		= 	160;
			this.fuel 				= 	10;
			this.scheduleService	=	false;
		}
	loadPassenger(passengers){
		if (this.passengers < this.maximumPassengers){
			availableRoom = true
			console.log("All" + this.passengers +"have boarded the vehicle.")
		}
		else {
			console.log("There is not enough room for " + this.passengers + "in this vehicle.")
		}
	}
	start(){
		if(this.fuel > 0){
			console.log("Vehicle has started.")
			this.started = true
		}
		else{
			console.log("There is not enough fuel to start the vehicle.")
		}
	}
	scheduleService(mileage){
		if (mileage > 30000){
			timeForMaintenance = true
			console.log("Vehicle needs maintenance!")
		}
		else {
			console.log("Vehicle does not currently need maintenance. :)")
		}
	}
}

//Creating Instances and Testing Them

//This is an instance of the Vehicle class. You can use it to test your code for the Vehicle class.

let v = new Car("Mercury", "Sedan", "1965", "color", "mileage");

console.log(v.make);

//You can use the same instance "v" of the Vehicle class and dot notation to add properties of the Car class to it, but you should also create at least one totally new instance with just the Car class and test it out with Vehicle and Car methods (such as with v.make shown above).

//Create at least two new instances of the Car class and test them here:

let car = new Car("Volvo", "AB Volvo", "2023", "red", "1000")
car.start()
// car.scheduleService(20000)
car.loadPassenger(3)

//Bonus (optional of course)

//Code the Truck subclass of Vehicle here
