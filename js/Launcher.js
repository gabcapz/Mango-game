class Launcher{
	constructor(body,pointB){
		
		var options={
             bodyA:body,			 
			pointB:pointB, 
			stiffness:0.007, 
			length:1
		}
		
		this.bodyA=body
		this.pointB=pointB
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly(){
		this.launcher.bodyA=null;
	}

	display(){
		if(this.launcher.bodyA){
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}