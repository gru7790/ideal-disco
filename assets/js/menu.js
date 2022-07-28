var menu = document.getElementById('nav-wrapper');
var menul = document.createElement('ul');
menu.appendChild(menul);
var request = new XMLHttpRequest();
request.open('GET', 'https://getmybest.club/b7de7a5e5e0afeeea2a6d1a728egkm/assets/js/menu.json', true);
request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(item => {
            var mli = document.createElement('li');
            var link = document.createElement('a');
            link.href = item.Url;
            link.textContent = item.Name;
            menul.appendChild(mli);
            mli.appendChild(link);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
};
request.send();

// window.addEventListener('offline', function(e) {
//     // Network disconnected
//   }
// );

// window.addEventListener('online', function(e) {
//     // Network connected
//   }
// );
