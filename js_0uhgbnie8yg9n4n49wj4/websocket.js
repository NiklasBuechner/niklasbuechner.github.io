var scroll = true;

window.onload = function () {
    
    document.getElementById('scroll').onclick = function ()
    {
        if (scroll)
        {
            scroll = false;
        }
        else
        {
            scroll = true;
        }
        
    }
    
    document.getElementById('button').onclick = function () 
    {
        var user = document.getElementById('user').value;
        var pw   = document.getElementById('pw').value;
        
        socket.emit('login', {user: user, pw: pw});
        
        document.getElementById('user').value = '';
        document.getElementById('pw').value = '';
    }
    
    document.getElementById('logout').onclick = function ()
    {
        socket.emit('logout', {});
        
        document.getElementById('text').innerHTML = '';
    }
    

    var socket = io.connect();
    
    socket.on('log', function (data)
    {
        document.getElementById('text').innerHTML += '<br>' + data.log;
        
        if (scroll)
        {
            window.scrollTo(0,document.body.scrollHeight);
        }
    });
}