const venom = require('venom-bot');
import { Whatsapp, Message } from 'venom-bot';

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client: Whatsapp) {
  client.onMessage((message: Message) => {
    if (message.body === '/music Jujutsu Kaisen') {
      client.sendVoice(message.from, './public/music/jujutsu.mp3')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    if (message.body === '/music Shingeki no Kyojin') {
      client.sendVoice(message.from, './public/music/shingeki.mp3')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    if(message.body === '/music Black Clover') {
        client.sendVoice(message.from, './public/music/black.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Kaguya-Sama') {
        client.sendVoice(message.from, './public/music/kaguya.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Nagatoro-San') {
        client.sendVoice(message.from, './public/music/nagatoro.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Kakegurui') {
        client.sendVoice(message.from, './public/music/kakegurui.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music FullMetal Alchemist Brotherhood') {
        client.sendVoice(message.from, './public/music/fmab.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Hunter x Hunter') {
        client.sendVoice(message.from, './public/music/hunter.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Shaman King') {
        client.sendVoice(message.from, './public/music/shaman.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Rap do Doflamingo') {
        client.sendVoice(message.from, './public/music/doflamingo.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music FullMetal Alchemist') {
        client.sendVoice(message.from, './public/music/fma.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Nagatoro-San (Ending)') {
        client.sendVoice(message.from, './public/music/nagaed.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Soul Eater') {
        client.sendVoice(message.from, './public/music/souleater.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Inuyasha') {
        client.sendVoice(message.from, './public/music/inuyasha.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Boku no Hero') {
        client.sendVoice(message.from, './public/music/bnh.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Kimetsu no Yaiba') {
        client.sendVoice(message.from, './public/music/kimetsu.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Tokyo Ghoul') {
        client.sendVoice(message.from, './public/music/tokyoghoul.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music One Piece') {
        client.sendVoice(message.from, './public/music/onepiece.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Dança da Chika') {
        client.sendVoice(message.from, './public/music/chika.mp3')
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/video Chika') {
        client.sendFile(message.from, './public/video/chika.mp4') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Saint Seiya') {
        client.sendVoice(message.from, './public/music/saint.mp3') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Kimi no na Wa') {
        client.sendVoice(message.from, './public/music/kimino.mp3') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music One Piece - Bon Voyage') {
        client.sendVoice(message.from, './public/music/bonvoyage.mp3') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music One Piece - ED 2') {
        client.sendVoice(message.from, './public/music/run.mp3') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Rap do Gojo') {
        client.sendVoice(message.from, './public/music/gojo.mp3') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music One Piece - OP 1') {
        client.sendVoice(message.from, './public/music/weare.mp3') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Naruto Shippuden') {
        client.sendVoice(message.from, './public/music/nsShi.mp3') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Rap do Maito Gai') {
        client.sendVoice(message.from, './public/music/gai.mp3') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Jojo Adventure') {
        client.sendVoice(message.from, './public/music/jojo.mp3') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Shigatsu wa Kimi no Uso') {
        client.sendVoice(message.from, './public/music/kiminouso.mp3') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === '/music Rap da Akatsuki') {
        client.sendVoice(message.from, './public/music/akatsuki.mp3') 
            .then((result) => console.log('Result: ', result))
            .catch((err) => console.error(err));
    }

    if(message.body === 'seu gay') {
      client.sendText(message.from, 'I ala é viado kkkkkkkkkkkkkkkkk')
    }
  });
}