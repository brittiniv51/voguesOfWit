const photoTypes = [
    {
        type: 'albumCover',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/EnVogue.jpg/220px-EnVogue.jpg',
    },

    {
        type: 'albumCover',
        imgUrl: 'https://i.pinimg.com/originals/78/d4/5b/78d45bcd5929a4add5268eda7ebbdf8d.jpg',
    },

    {
        type: 'albumCover',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Don%27t_Let_Go_%28Love%29_by_En_Vogue_US_CD_artwork.jpg/220px-Don%27t_Let_Go_%28Love%29_by_En_Vogue_US_CD_artwork.jp',
    },

    {
      type: 'livePerformance',
        imgUrl: 'https://static.billboard.com/files/2020/10/02-En-Vogue-performance-bbma-2020-billboard-1548-1602765240-1024x677.jpg',
    },

    {
        type: 'livePerformance',
        imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/en-vogue-1522942500.jpg?crop=1.00xw:0.753xh;0,0.0831xh&resize=1200:*',
    },

    {
        type: 'livePerformance',
        imgUrl: 'https://alchetron.com/cdn/en-vogue-41a4411e-5c83-4376-9a86-2d6bb24b151-resize-750.jpg',
    },

    {
        type: 'redCarpet',
        imgUrl: 'https://www1.pictures.gi.zimbio.com/Barnstable+Brown+Party+Celebrating+135th+Kentucky+f4Lr228Jivvl.jpg',
    },

    {
        type: 'redCarpet',
        imgUrl: 'https://media1.popsugar-assets.com/files/thumbor/-hKXal3wglESZeDbTwdGSdDloIo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/05/20/081/n/1922564/6bb14f5b70ef2acc_GettyImages-960635520/i/En-Vogue.jpg',
    },

    {
        type: 'redCarpet',
        imgUrl: 'https://www3.pictures.zimbio.com/gi/2018+Billboard+Music+Awards+Red+Carpet+9JmerIqns9Rx.jpg',
    },

    {
        type: 'redCarpet',
        imgUrl: 'https://www.hiphollywood.com/wp-content/uploads/2019/10/1180348890.jpg',
    },
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
  };

  const printAlbumCover = (photoTypes) => {
    let domString = "";
    for (i = 0; i < photoTypes.length; i++) {
      domString += `
      <div class="card photo-card">
      <img src="${albumCover.imgUrl}" alt="...">
          </div>
      </div>
  `;
    }
    printToDom("photo-card", domString);
  };
  const init = () => {
    printAlbumCover(photoTypes);
  };
  init();

  document.getElementById('albumCover-btn').addEventListener('click', printAlbumCover);


