window.onload = () => {
    let random = () => {       
        var arr = new Uint32Array(Math.random()*10);
        window.crypto.getRandomValues(arr);
        let random = arr[0]/(0xffffffff + 1);
        return random;
    }
    let pi = Math.PI;
    let buttonLuku = document.querySelectorAll('nav ul li button.luku')[0];
    let buttonMuoto = document.querySelectorAll('nav ul li button.muoto')[0];
    window.intervals = [];
    window.atoms = 255;
    window.fib = (val) => {
        return (val === 0 || val === 1) ? val : fib(val-1) + fib(val-2);
    };
    buttonMuoto.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        let molekyyli = document.querySelectorAll('molekyyli');
        let muodot = ['ympyra', 'plektra', 'kirkkovene', 'nelio', 'puoliNelio', 'pisara', 'nelio2', 'nelio3', 'letter', 'hattu'];
        molekyyli.forEach((elem, ind) => {
            muodot.some((elem2, ind2) => {
                if(elem.classList.contains(elem2)) {
                    elem.classList.remove(elem2);
                    let mLen = muodot.length;
                    let seuraava = ind2+1;
                    if(mLen < seuraava) {
                        seuraava = 0;
                    }
                    elem.classList.add(muodot[seuraava]);
                    return true;
                }
            });
        });
    });
    let muotoIntervals = [];
    muotoIntervals.forEach((elem, ind) => {
        clearTimeout(elem);
    });
    let muutaMuotoaFn = () => {
        muotoIntervals.push(setTimeout(() => {
            buttonMuoto.click();
            muutaMuotoaFn();
        }, 2500));
    }
    buttonLuku.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        let body = document.querySelectorAll('body')[0];
        let molekyyli = document.querySelectorAll('molekyyli');
        if(molekyyli.length) {
            molekyyli.forEach((elem, ind) => {
                body.removeChild(elem)
            });
        }
        create(window.atoms++);
        buttonLuku.innerHTML = "Nosta lukua " + window.atoms;
        //muutaMuotoaFn();
    });
    let create = (atomCount) => {

        let molecules = [{
            name: "Water",
            atoms: [],
            left: "0%",
            top: "0%"
        }];
        let fib = (val) => {
            return (val === 0 || val === 1) ? val : fib(val-1) + fib(val-2);
        }
        let isPrime = (number) => { 
          if (number <= 1)
          return false;
       
          // The check for the number 2 and 3
          if (number <= 3)
          return true;
       
          if (number%2 == 0 || number%3 == 0)
          return false;
       
          for (var i=5; i*i<=number; i=i+6)
          {
             if (number%i == 0 || number%(i+2) == 0)
             return false;
          }
       
          return true;
        }
        let atoms = atomCount;
        let x = 3;
        let y = 15;
        for(let i=0; i<=atoms;i++) {
            let kanta = (window.innerWidth-(window.innerWidth*0.15))/atoms;
            let korkeus = (window.innerHeight-(window.innerHeight*0.15))/atoms;
            let A = (kanta*korkeus)/2;
            let pos = (((A/90)/window.innerWidth)*100)+(pi*2);
            let positions = {
                left: '45%',
                right: '45%',
                top: '45%',
                bottom: '45%',
                zIndex: i,
                perspective: '700px',
                rotateX: '20Ddeg',
                rotateY: '45deg'
            };
            /*
            let point = document.createElement('div');
            point.style.left = pos + "%";
            point.style.top = pos + "%";
            point.style.position = "absolute";
            point.style.width = "10px";
            point.style.height = "10px";
            point.style.background = "green";
            document.querySelectorAll('body')[0].appendChild(point);
            */
            /*
            let posPi = pi*fib(x);
            let posY = pos;
            if(i > 0 && i%4 === 0) {
                x++;
                y = -2;
                posPi = 0;
            }
            console.log("luku x: ", x);
            console.log("luku y: ", y);
            console.log('fib: ', fib(x));
            if(x >= 8) {
                x=0;
            }
            if(fib(x) <= 2) {
                //pos = 0;
            }
            switch((i+1)%4) {
                case 1:
                console.log('case 1; ', pos, posPi);
                    positions = {
                        left: pos + posPi + '%',
                        top: pos + posPi + '%',
                        zIndex: i
                    }
                break;
                console.log('case 2; ', pos, posPi);
                case 2:
                    positions = {
                        right: pos + posPi + '%',
                        top: pos + posPi + '%',
                        zIndex: i
                    }
                break;
                case 3:
                console.log('case 3; ', pos, posPi);
                    positions = {
                        right: pos + posPi + '%',
                        bottom: pos + posPi + '%',
                        zIndex: i
                    }
                break;
                case 0:
                    console.log('case 0; ', pos, posPi);
                    positions = {
                        left: pos + posPi + '%',
                        bottom: pos + posPi + '%',
                        zIndex: i
                    }
                break;
            }
            */
           /*
            switch(i) {
                case 0:
                    positions = {
                        left: (pi*13) + '%',
                        top: (pi*13) + '%',
                        zIndex: i
                    }
                break;
                case 1:
                    positions = {
                        right: (pi*13) + '%',
                        top: (pi*13) + '%',
                        zIndex: i
                    }
                break;
                case 2:
                    positions = {
                        right: (pi*13) + '%',
                        bottom: (pi*13) + '%',
                        zIndex: i
                    }
                break;
                case 3:
                    positions = {
                        left: (pi*13) + '%',
                        bottom: (pi*13) + '%',
                        zIndex: i
                    }
                break;
                case 4:
                    positions = {
                        left: (pi*9) + '%',
                        top: pos + '%',
                        zIndex: i
                    }
                break;
                case 5:
                    positions = {
                        right: (pi*9) + '%',
                        top: pos + '%',
                        zIndex: i
                    }
                break;
                case 6:
                    positions = {
                        right: (pi*9) + '%',
                        bottom: pos + '%',
                        zIndex: i
                    }
                break;
                case 7:
                    positions = {
                        left: (pi*9)  + '%',
                        bottom: pos + '%',
                        zIndex: i
                    }
                break;
                case 8:
                    positions = {
                        right: (pi*15) + '%',
                        bottom: (pi*15) + '%',
                        zIndex: i
                    }
                break;
                case 9:
                    positions = {
                        left: (pos + (pi*5)) + '%',
                        top: (pos + (pi*5)) + '%',
                        zIndex: i
                    }
                break;
                case 10:
                    positions = {
                        right: (pos + (pi*5)) + '%',
                        bottom: (pos + (pi*5)) + '%',
                        zIndex: i
                    }
                break;
                case 11:
                    positions = {
                        right: (pos + (pi*5)) + '%',
                        top: (pos + (pi*5)) + '%',
                        zIndex: i
                    }
                break;
                case 12:
                    positions = {
                        left: (pos + (pi*5)) + '%',
                        bottom: (pos + (pi*5)) + '%',
                        zIndex: i
                    }
                break;
                case 13:
                    positions = {
                        right: pos + (pi*13) + '%',
                        top: pos + pi*8 + '%',
                        zIndex: i
                    }
                break;
                case 14:
                    positions = {
                        left: pos + (pi*13) + '%',
                        bottom: pos + pi*8 + '%',
                        zIndex: i
                    }
                break;
                case 15:
                    positions = {
                        right: pos + pi*8 + '%',
                        top: pos + (pi*13) + '%',
                        zIndex: i
                    }
                break;
                case 16:
                    positions = {
                        left: pos + pi*8 + '%',
                        bottom: pos + (pi*13) + '%',
                        zIndex: i
                    }
                break;
                case 17:
                    positions = {
                        left: pos + (pi*13) + '%',
                        top: pos + (pi*13) + '%',
                        zIndex: i
                    }
                break;
                case 18:
                    positions = {
                        left: pos + (pi*13) + '%',
                        top: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
                case 19:
                    positions = {
                        top: pos + (pi*13) + '%',
                        left: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
                case 20:
                    positions = {
                        bottom: pos + (pi*13) + '%',
                        right: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
                case 21:
                    positions = {
                        left: pos + (pi*13) + '%',
                        bottom: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
                case 22:
                    positions = {
                        left: pos + (pi*4) + '%',
                        top: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
                case 23:
                    positions = {
                        right: pos + (pi*4) + '%',
                        top: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
                case 24:
                    positions = {
                        left: pos + (pi*4) + '%',
                        bottom: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
                case 25:
                    positions = {
                        right: pos + (pi*4) + '%',
                        bottom: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
                case 26:
                    positions = {
                        left: pos + (pi*8) + '%',
                        top: pos + (pi*1.6) + '%',
                        zIndex: i
                    }
                break;
                case 27:
                    positions = {
                        right: pos + (pi*8) + '%',
                        top: pos + (pi*1.6) + '%',
                        zIndex: i
                    }
                break;
                case 28:
                    positions = {
                        left: pos + (pi*8) + '%',
                        bottom: pos + (pi*1.6) + '%',
                        zIndex: i
                    }
                break;
                case 29:
                    positions = {
                        right: pos + (pi*8) + '%',
                        bottom: pos + (pi*1.6) + '%',
                        zIndex: i
                    }
                break;
                case 30:
                    positions = {
                        left: pos + (pi*2) + '%',
                        top: pos + (pi*9) + '%',
                        zIndex: i
                    }
                break;
                case 31:
                    positions = {
                        right: pos + (pi*2) + '%',
                        top: pos + (pi*9) + '%',
                        zIndex: i
                    }
                break;
                case 32:
                    positions = {
                        left: pos + (pi*2) + '%',
                        bottom: pos + (pi*9) + '%',
                        zIndex: i
                    }
                break;
                case 33:
                    positions = {
                        right: pos + (pi*2) + '%',
                        bottom: pos + (pi*9) + '%',
                        zIndex: i
                    }
                break;
                // TODO
                case 34:
                    positions = {
                        left: pos + (pi*9) + '%',
                        top: pos + (pi*10) + '%',
                        zIndex: i
                    }
                break;
                case 35:
                    positions = {
                        right: pos + (pi*9) + '%',
                        top: pos + (pi*10) + '%',
                        zIndex: i
                    }
                break;
                case 36:
                    positions = {
                        right: pos + (pi*9) + '%',
                        bottom: pos + (pi*10) + '%',
                        zIndex: i
                    }
                break;
                case 37:
                    positions = {
                        left: pos + (pi*9) + '%',
                        bottom: pos + (pi*10) + '%',
                        zIndex: i
                    }
                break;
                case 38:
                    positions = {
                        left: pos + (pi*13) + '%',
                        top: pos + '%',
                        zIndex: i
                    }
                break;
                case 39:
                    positions = {
                        right: pos + '%',
                        top: pos + (pi*13) + '%',
                        zIndex: i
                    }
                break;
                case 40:
                    positions = {
                        right: pos + (pi*13) + '%',
                        bottom: pos + '%',
                        zIndex: i
                    }
                break;
                case 41:
                    positions = {
                        left: pos + '%',
                        bottom: pos + (pi*13) + '%',
                        zIndex: i
                    }
                break;
                case 42:
                    positions = {
                        left: pos + (pi*8) + '%',
                        top: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
                case 43:
                    positions = {
                        right: pos + (pi*8) + '%',
                        top: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
                case 44:
                    positions = {
                        right: pos + (pi*8) + '%',
                        bottom: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
                case 45:
                    positions = {
                        left: pos + (pi*8) + '%',
                        bottom: pos + (pi*5) + '%',
                        zIndex: i
                    }
                break;
            }
            */
            /*
            TODO Fix this
            if(i % 2 === 0) {
                if(isPrime(i)) {
                    console.log(i);
                    positions.left = "45%";
                    positions.right = "45%"
                    positions.top = "45%"
                    positions.bottom = "45%";
                } else {
                    positions.left = left + "%";
                    if(top % 2 === 0) {
                        positions.top = top + "%";
                    } else {
                        positions.bottom = top + "%";
                    }
                }
            } else {
                if(top % 2 === 0) {
                    positions = {antti.marjala@gmail.com
                        right: leantti.marjala@gmail.com
                        bottom: tantti.marjala@gmail.com
                        zIndex: iantti.marjala@gmail.com
                    };
                } else {
                    positions = {
                        right: left + "%",
                        top: top + "%",
                        zIndex: i
                    };
                }  
            }
            */
            molecules.forEach((elem, ind) => {
                elem.atoms.push({
                    nimi: "vety",
                    electrons: [0,1],
                    protons: [0],
                    neutrons: [0,1,2],
                    position: positions
                });
            });
        }
        molecules.forEach((elem, ind) => {
                let molekyyli = document.createElement('molekyyli');
                molekyyli.classList.add('ympyra');
                molekyyli.classList.add(elem.name);
                molekyyli.style.left = elem.left;
                molekyyli.style.top = elem.top;
                elem.atoms.forEach((elem2, ind2) => {
                        let vety = document.createElement('vety');
                        vety.classList.add(elem2.nimi);
                        if(elem2.position.left) {
                            vety.style.left = elem2.position.left;
                        }
                        if(elem2.position.right) {
                            vety.style.right = elem2.position.right;
                        }
                        if(elem2.position.top) {
                            vety.style.top = elem2.position.top;
                        }
                        if(elem2.position.bottom) {
                            vety.style.bottom = elem2.position.bottom;
                        }
                        vety.style.transform = "rotateX("+(random() * (pi*40)) +"deg) rotateY("+(random() * (pi*50)) +"deg) scale("+random() * (pi*3)+", "+random() * (pi*2)+")";
                        vety.style.zIndex = elem2.position.zIndex;
                        let elektrooni = document.createElement('elektrooni');
                        elem2.electrons.forEach((elem3, ind3) => {
                            if(ind3 === 0) {
                                elektrooni.appendChild(document.createElement('protoni'));
                            } else {
                                elektrooni.appendChild(document.createElement('neutroni'));
                            }
                        });
                        vety.appendChild(elektrooni);
                        elem2.protons.forEach((elem3, ind3) => {
                            vety.appendChild(document.createElement('protoni'));
                        });
                        elem2.neutrons.forEach((elem3, ind3) => {
                            vety.appendChild(document.createElement('neutroni'));
                        });
                        molekyyli.appendChild(vety);
                });
                document.querySelectorAll('body')[0].appendChild(molekyyli);
        });
        let vety = document.querySelectorAll('vety');
        let angleWithPi = (angle1, angle2, angle3) => {
            return (angle1*1.14+(Math.pow(pi,2))+(angle2-(180-angle3)));
        };
        let int = 0;
        window.intervals.forEach((elem, ind) => {
            clearInterval(elem);
        });
        window.intervals = [];
        vety.forEach((elem, ind) => {
            let angle = 0;
            (function move(elem, pi, angle) {
                setInterval(() => {

                    // rotate("+angle + (random() * (pi*20)) +"deg) scale("+random() * (pi)+", "+random() * (pi)+")"
                    var animateString = "rotateX("+angle + (random() * (pi*40)) +"deg) rotateY("+angle + (random() * (pi*50)) +"deg) scale("+random() * (pi*3)+", "+random() * (pi*2)+")";

                    elem.style.transform = animateString;
                    //elektrooni.style = "transform:rotate("+(angle + (random() * (1*12)))+"deg) ;";
                    /*
                    var protoni = elem.querySelectorAll('elektrooni');
                    protoni.forEach((elem2, ind2) => {
                        elem2.style.transform = "rotate("+angle + (random() * (pi*40)) +"deg)";
                    });
                    */
                    if(angle>=360) {
                        angle = 0;
                    }
                    angle++;
                    int++;
                }, 256);
            })(elem, pi, angle);
        });
    };
};