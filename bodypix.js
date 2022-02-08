const bodypix = `
<section id="bodypix" class="bodypix">
    <h1>Tensor Flow Body pix<h1>
    <h2>
        BodyPix: Person Segmentation in the Browser with TensorFlow.js using React
    </h2>
    <div>
        <p>BodyPix, an open-source machine learning model which allows for person and body-part segmentation in the browser with TensorFlow.js. With default settings, it estimates and renders person and body-part segmentation at 25 fps</p>
    </div>
    <div>
        <img src="./assets/bpix.gif" width="320" height="240"/>
    </div>
    <div class="pdT20">
        <p> What exactly is person segmentation? In computer vision, image segmentation refers to the technique of grouping pixels in an image into semantic areas typically to locate objects and boundaries. The BodyPix model is trained to do this for a person and twenty-four body parts (parts such as the left hand, front right lower leg, or back torso). In other words, BodyPix can classify the pixels of an image into two categories: 1) pixels that represent a person and 2) pixels that represent background. It can further classify pixels representing a person into any one of twenty-four body parts.</p>
    <div>
    <div class="pdT20">
        <p>What can be done with person segmentation? This technology can be a tool for a wide range of applications from augmented reality to photography editing to artistic effects on images or videos. It’s up to you! With PoseNet (the first model ever that allowed for body estimation (what a Kinect does) in the browser using simple webcams), people came up with a wide variety of use cases for the technology. The same kind of creative experimentation happens with BodyPix.</p>
    </div>
    <div class="pdT20">
        <h2>Body Pix with React JS</h2>
    </div>
    <div class="pdT20">
        <p>The library can be installed with: npm install @tensorflow-models/body-pix and then imported using npm:</p>
    </div>
    <pre class="language-none pdT20">
        <code>
            "@tensorflow-models/body-pix": "2.2.0",
            "@tensorflow/tfjs": "3.13.0",
            "@tensorflow/tfjs-backend-webgl": "3.13.0",
            "@tensorflow/tfjs-converter": "3.13.0",
            "@tensorflow/tfjs-core": "3.13.0"
        </code>
    </pre>
    <div class="pdT20">
        <p>Load body pix in component and use segmentation algorithm</p>
        <pre class="language-none pdT20">
            <code>
                const net = await bodypix.load({
                    architecture: 'ResNet50',
                    outputStride: 32,
                    quantBytes: 4
                })
            </code>
            <code>
                const segmentation = await net.segmentPerson(canvas, {
                    internalResolution: 'full',
                    segmentationThreshold: 0.8,
                    scoreThreshold: 0.9
                })
            </code>
            <code>
            //Segmenting the pixels with 0(background) and 1(body)

            segmentation.data.forEach((segment, i) => {
                if (segment === 1) {
                  newImgData[i * 4] = imgData[i * 4]
                  newImgData[i * 4 + 1] = imgData[i * 4 + 1]
                  newImgData[i * 4 + 2] = imgData[i * 4 + 2]
                  newImgData[i * 4 + 3] = imgData[i * 4 + 3]
                }
              })
            </code>
        </pre>
    </div>
    <div class="pdT20"><h2>Person Segmentation Output</h2></div>
    <p>An example output person segmentation looks like:</p>
    <pre class="language-none">
        <code>
        {
            width: 640,
            height: 480,
            data: Uint8Array(307200) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, …]
          }
          // the data array contains 307200 values, one for each pixel of the 640x480 image that was passed to the function.
        </code>
    </pre>
    <div class="flex pdT20">
        <div>
            <div>Before</div>
            <div><img src="./assets/before.jpg" height="430px"/></div>
        </div>
        <div>
            <div>After</div>
            <div><img src="./assets/after.PNG" height="430px"/></div>
        </div>
    </div>
    <div class="pdT20">
        <h1>Body Part Segmentation</h1> 
        <img class="pdT10" src="./assets/bp.png" width="500" height="460"/>
    </div>
    <div class="pdT10">
        <p>We call the API method estimatePartSegmentation to perform body part segmentation on an image or video; this short code block shows how to use it:</p>
        <pre class="language-none">
            <code>
                const imageElement = document.getElementById('image');
        
                // load the BodyPix model from a checkpoint
                const net = await bodyPix.load();
        
                // arguments for estimating body part segmentation.
                const outputStride = 16;
                const segmentationThreshold = 0.5;
        
                // load the person segmentation model from a checkpoint
                const net = await bodyPix.load();
        
                const partSegmentation = await net.estimatePartSegmentation(imageElement, outputStride, segmentationThreshold);
            </code>
        </pre>
    </div>
    <div class="pdT20">
        <h1>How does it work internally</h1>
        <p class="pdT10">At the core of BodyPix is an algorithm that performs body segmentation — or, in other words, performs a binary decision for each pixel of an input image to estimate whether that pixel belongs to a person or not</p>
        <img class="pdT10" src="./assets/10.png" width="80%"/>
    </div>
</div>
</section>`

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }