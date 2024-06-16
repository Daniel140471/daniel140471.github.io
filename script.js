$(document).ready(function () {
    function random(n) {return Math.floor(Math.random() * n) + 1;}

    const
    settingsButton        = $('#settings-button'),
    settingsCard          = $('#settings-card'),
    settingsOpacitySlider = $('#settings-opacitiy-slider'),

    backgroundSelect    = $('#background-select'),
    titleBannerSelect   = $('#title-banner-select'),
    cardContainerSelect = $('#card-container-select'),
        ccWidthSlider   = $('#cc-width-slider'),
        ccHeightSlider  = $('#cc-height-slider'),
        ccSpacingSlider = $('#cc-spacing-slider'),
        ccOffsetXSlider = $('#cc-offset-x-slider'),
        ccOffsetYSlider = $('#cc-offset-y-slider'),
        ccColorChooser  = $('#cc-color-chooser'),
    tiledImageSelect    = $('#tile-select'),
        tScaleSlider    = $('#t-scale-slider'),
        tOffsetXSlider  = $('#t-offset-x-slider'),
        tOffsetYSlider  = $('#t-offset-y-slider'),

    mainBackground = $('#main-background'),
    titleBanner    = $('#title-banner'),
    cardContainer  = $('#card-container'),
    tiledImage     = $('#tiled-image'),

    randomBackground    = `Backgrounds/bg${random(10)}.jpg`,
    randomTitleBanner   = `Banners/banner${random(4)}.png`,
    randomCardContainer = `BottomBanners/bb${random(8)}.png`,
    randomTiledImage    = `Tiles/tile${random(9)}.jpg`,
    randomCardColor     = `#${Array(4).fill().map(() => random(256).toString(16).padStart(2, '0')).join('')}`;

    function setSettingsOpacity(opacity) {
        settingsCard.css('opacity', opacity);
        settingsOpacitySlider.css('opacity', opacity);
    }
    function setLabel(element, val){
        let newText = element.attr('label').replace(/\([^\)]*\)/, `(${val})`);
        element.attr('label', newText);
    }

    function setBackground(background){
        $('body').css('background-image', `url(${background})`);
        $('#static-background').css('background-image', `url(${background})`);
        mainBackground.css('background-image', `url(${background})`);
    }
    function setTitleBanner(background){titleBanner.css('background-image', `url(${background})`);}
    function setCardContainer(background){cardContainer.css('background-image', `url(${background})`);}
        function setCardContainerSpacing(spacing){setLabel(ccSpacingSlider, spacing); cardContainer.css('gap', `${spacing}vw`);}
        function setCardContainerWidth(width)    {setLabel(ccWidthSlider, width); $('.card').css('width', `${width}%`);}
        function setCardContainerHeight(height)  {setLabel(ccHeightSlider, height); $('.card').css('height', `${height}%`);}
        function setCardContainerOffsetX(offX)   {setLabel(ccOffsetXSlider, offX); $('#card-1').css('margin-left', `${offX}px`);}
        function setCardContainerOffsetY(offY)   {setLabel(ccOffsetYSlider, offY); $('.card').css('margin-top', `${offY}px`);}
        function setCardContainerColor(col)      {$('#cc-color-label').text(col); $('.card').css('border-color', `${col}`);}
    function setTiledImage(background){tiledImage.css('background-image', `url(${background})`);}
        function setTiledImageScale(scale) {setLabel(tScaleSlider, scale); tiledImage.css('background-size', `${scale*100}%`);}
        function setTiledImageOffsetX(offX){setLabel(tOffsetXSlider, offX); tiledImage.css('background-position-x', `${offX}%`);}
        function setTiledImageOffsetY(offY){setLabel(tOffsetYSlider, offY); tiledImage.css('background-position-y', `${offY}%`);}

    setBackground(randomBackground);backgroundSelect.attr('value', randomBackground);
    setTitleBanner(randomTitleBanner);titleBannerSelect.attr('value', randomTitleBanner);
    setCardContainer(randomCardContainer);cardContainerSelect.attr('value', randomCardContainer);
    setTiledImage(randomTiledImage);tiledImageSelect.attr('value', randomTiledImage);
    setCardContainerColor(randomCardColor);ccColorChooser.attr('value', randomCardColor);

    settingsButton.on('click',           function (){settingsCard.toggle();settingsOpacitySlider.toggle();});
    settingsOpacitySlider.on('sl-input', function (event){setSettingsOpacity(event.target.value);});

    backgroundSelect   .on('sl-change', function (event){setBackground(event.target.value);});
    titleBannerSelect  .on('sl-change', function (event){setTitleBanner(event.target.value);});
    cardContainerSelect.on('sl-change', function (event){setCardContainer(event.target.value);});
        ccWidthSlider  .on('sl-input',    function (event){setCardContainerWidth(event.target.value);});
        ccHeightSlider .on('sl-input',    function (event){setCardContainerHeight(event.target.value);});
        ccSpacingSlider.on('sl-input',    function (event){setCardContainerSpacing(event.target.value);});
        ccOffsetXSlider.on('sl-input',    function (event){setCardContainerOffsetX(event.target.value);});
        ccOffsetYSlider.on('sl-input',    function (event){setCardContainerOffsetY(event.target.value);});
        ccColorChooser .on('sl-input',    function (event){setCardContainerColor(event.target.value);});
    tiledImageSelect   .on('sl-change', function (event){setTiledImage(event.target.value);});
        tScaleSlider   .on('sl-input',    function (event){setTiledImageScale(event.target.value);});
        tOffsetXSlider .on('sl-input',    function (event){setTiledImageOffsetX(event.target.value);});
        tOffsetYSlider .on('sl-input',    function (event){setTiledImageOffsetY(event.target.value);});
});
