class circle {
    constructor() {
        this.radius = 80;
        this.color = 'red';
    }
    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

class rectangle {
    constructor() {
        this.width = 150;
        this.height = 100;
        this.color = 'blue';
    }
    render() {
        return `<rect x="75" y="50" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
}

class triangle {
    constructor() {
        this.color = 'green';
    }
    render() {
        return `<polygon points="150,0 0,300 300,300" fill="${this.color}" />`;
    }
}

module.exports = { circle, rectangle, triangle };
