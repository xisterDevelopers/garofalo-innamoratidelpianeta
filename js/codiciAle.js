       
            function calcoloUrl(url, code){
                var  urlArray = [];
                for( i=0; i < code.length; i++){
                    for( x=0; x < url.length; x++) {
                       if(url[x].includes(code[i])){
                        urlArray.push(url[x])
                       } 
                    }
              }
              for( y=0; y < urlArray.length; y++) {
                document.write(urlArray[y] + "</br>");
              }
                } 