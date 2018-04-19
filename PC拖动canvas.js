var Draw = {
    init: function() {
        this.cObj = document.getElementById("myCanvas").getContext("2d");
        this.event();
        this.draw.prototype = this;
        this.p = new this.draw(150, 150, 80, 70, "red");
        // window.setTimeout(function(){
        //     this.p.draw(45,145,70,70,"red")
        // }.bind(this),2000);
    },
    draw: function(x, y, w, h, color) {
        this.cObj.clearRect(this.x - this.w - 1, this.y - this.w - 1, this.w * 2 + 2, this.w * 2 + 2);
        // this.cObj.clearRect(this.x - 1, this.y - 1, this.w + 2, this.h + 2);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.cObj.strokeStyle = this.color;
        // this.cObj.strokeRect(this.x, this.y, this.w, this.h);
        this.cObj.beginPath();
        this.cObj.arc(this.x, this.y, this.w, 0, 2 * Math.PI);
        this.cObj.stroke();
    },
    OnMouseMove: function(evt) {
        if(this.p.isDown) {
            var X = evt.layerX;
            var Y = evt.layerY;
            this.p.draw(X - this.p.px, Y - this.p.py, 80, 70, "red");
        }
    },
    OnMouseDown: function(evt) {
        var X = evt.layerX;
        var Y = evt.layerY;
        var px = X - this.p.x;
        var py = Y - this.p.y;
        var L = Math.sqrt((X - this.p.x) * (X - this.p.x) + (Y - this.p.y) * (Y - this.p.y));
        if(L < this.p.w) {
            this.p.isDown = true;
            this.p.px = px;
            this.p.py = py;
        } else {
            this.p.isDown = false;
        }
        // if(X < this.p.x + this.p.w && X > this.p.x) {
        //     if(Y < this.p.y + this.p.h && Y > this.p.y) {
        //         this.p.isDown = true;
        //     }
        // } else {
        //     this.p.isDown = false;
        // }
    },
    OnMouseUp: function() {
        this.p.isDown = false;
        this.p.px = 0;
        this.p.py = 0;
    },
    event: function() {
        var canvas = document.getElementById("myCanvas")
        canvas.addEventListener("mousedown", this.OnMouseDown.bind(this), false);
        canvas.addEventListener("mousemove", this.OnMouseMove.bind(this), false);
        canvas.addEventListener("mouseup", this.OnMouseUp.bind(this), false);
    }
}
Draw.init();
