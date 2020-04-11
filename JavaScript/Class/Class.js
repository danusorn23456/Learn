class Junior {

    constructor(obj) {
        this.name = obj.name || '[no param name]'
        this.age = obj.age || '[no param age]'
        this.salary = obj.salary || '[no param sala...]'
        this.position = obj.position || '[no param posi...]'
    }

    get getDetails() {
        return console.log(`name = ${this.name} age = ${this.age}\nposition = ${this.position} salary = ${this.salary}`)
    }

    /**
     * @param {number} value
     */

    set changeSalary(value){
        this.salary = value;
    }

    work(){
        console.log(`${this.name} are Working on ${this.position}`)
    }

    reprot(){
        console.log(`${this.name} sned Report ...`)
    }

    request(){
        console.log(`${this.name} try to send Request...`)
    }

    Bonus(){
        console.log(`${thsi.name} get the Bonus ... !!!`)
    }

}

class Senior extends Junior{
    constructor(obj){
        super(obj);
        this.position = `Senior ${obj.position}`
        this.salary *= 2;
    }

    work(){
        console.log(`${this.name} can work on the Hard part...`)
    }

    bonus(){
        super.bonus();
        console.log('and get more Bonus')
    }

    acceptRequest(){
        console.log(`${this.name} can appect Request form ...`)
    }

    group(){
        console.log(`${this.name} can make a Group...`)
    }

}

/**
     * @param {object{name,age,position,salary}} value
*/

let meow = new Junior({
    name: 'Meow',
    position: "Frontend",
});

meow.changeSalary = 12000;
meow.getDetails;
meow.work();

let sonter = new Senior({
    name:'Sonter',
    position : 'Backend',
    salary:35000,
    age:25
})

sonter.getDetails;
sonter.work();
sonter.group();