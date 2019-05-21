<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas Gif</title>
    <script src="gif.js"></script>
</head>
<body>
<canvas width="480" height="480" id="canvas">

</canvas>
<img src="images/1.png" id="img">
<img src="" id="result">
</body>
<script>
    window.onload = function () {
        var oImg = document.getElementById("img");
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d')

        let gif = new GIF({
            workers: 4,
            quality: 30,
            workerScript: "./gif.worker.js",
            // transparent: "#fff",
            // background: '#ffffff',
        });
        gif.on("finished",function(blob){
            console.log(URL.createObjectURL(blob));
            var file = new FileReader();
            file.readAsDataURL(blob);
            file.onload = function(){
                document.getElementById("result").setAttribute("src", file.result)
            }

        })

        var imgList = [
            './images/pic1.png',
            './images/pic2.png',
            './images/pic3.png',
        ];
        var imgObjList = [],count = 0;

        for (let i=0; i<imgList.length; i++){
            var tmpImg = new Image();
            imgObjList.push(tmpImg);
            tmpImg.src = imgList[i];
            tmpImg.onload = function () {
                count++;
                if (count === imgList.length ){
                    generateGif(imgObjList);
                }
            }
        }


        function generateGif(imgObjList) {

            for (let i=0;i<imgObjList.length;i++){
                ctx.save();
                ctx.drawImage(oImg,50,100,220,220);
                ctx.drawImage(imgObjList[i],0,0,canvas.width,canvas.height);
                ctx.restore();
                gif.addFrame(canvas,{copy:true,delay:300})
                ctx.clearRect(0,0,canvas.width,canvas.height)
            }
            gif.render();
        }

    }
</script>
</html>
