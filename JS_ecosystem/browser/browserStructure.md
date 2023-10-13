*Browser Market Share 2018*

DESKTOP
* Chrome: 67%
* Firefox: 11%
* Safari: 6%
* Edge: 3%
* Opera: 2%

MOBILE
* Chrome: 57%
* Safari: 18%
* UC Borwser: 10%
* Samsung internet: 6%
* Opera: 4%
* Android: 1%

[statcounter](http://gs.statcounter.com/browser-market-share)

# Browser's high level structure

1. The user interface(UI): Address bar, back/forward button, bookmark menu, window,

2. The browser engine: Marshals actions between the (UI) and the (RE).

3. The rendering engine(RE): Responsible for displaying request content, if request is HTML the (RE) will parse the HTML and CSS to display it to the screen.

4. Networking: Manage the network call as HTTP, DNS. It is different implementation by OS behind a platform-independent interface.

5. UI backend: Used for drawing widgets(combo boxes, window)

6. JavaScript Interpreter: Parse and execute JS code.

7. Data Storage: Persistence layerUse to store cookies or other data. sessionStorage, localStorage, cacheStorage, indexedDB, FileSystem.

*note* Chrome run multiple instances of the (RE) for each tab.

![browser layer](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/layers.png)


->  ## Rendering Engines












![CSS box model](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/image046.jpg)





**Reference**

[Client Side Performance](http://taligarsiel.com/ClientSidePerformance.html)
[How Browser Work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)