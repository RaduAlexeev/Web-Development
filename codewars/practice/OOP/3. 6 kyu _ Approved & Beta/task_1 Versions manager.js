https://www.codewars.com/kata/5bc7bb444be9774f100000c3/train/javascript

class VM {
    MAJOR;
    MINOR;
    PATCH;

    constructor(any) {
        
    }
    
    major() { 
        // increase MAJOR by 1, set MINOR and PATCH to 0
    }

    minor() {
        // increase MINOR by 1, set PATCH to 0
    }

    patch() {
        // increase PATCH by 1
    }

    rollback() {
    }

    release() {
        return `${this.MAJOR}.${this.MINOR}.${this.PATCH}`
    }
}