//function myFunction_th() {
//    this.innerText = alert('Surname, Name');
//}
//function changeEmail() {
//    var x = document.getElementById('mail');
//    x.innerText = prompt('Email', x.innerText);
//    x.style.fontSize = "12px";
//    x.style.color = "#da691a";
//    x.style.fontWeight = "bold";
//}


const
    WHITE_SPACE_REG_EXP_PATTERN = /\s/gmi,
    EMPTY_STRING = '',
    ENTER_MESSAGE = 'Please enter your ',
    CONFIRM_MESSAGE = 'Are you sure you want to ';

function editData(element, entity, href) {
    //debugger;
    if (null == href || confirm(CONFIRM_MESSAGE + 'edit the following data?')) {
        var
        newData = prompt(ENTER_MESSAGE + entity, element.innerText),
        isDataEmpty = (null == newData)
                        || (EMPTY_STRING == newData)
                        || (EMPTY_STRING == newData.replace(WHITE_SPACE_REG_EXP_PATTERN, EMPTY_STRING));
        if (!isDataEmpty) {
            var isOk = confirm(CONFIRM_MESSAGE + 'rewrite your' + entity);
            if (isOk) {
                element.innerText = newData;
            }
        }
    } else if (null != href) {
        location = href;
    };
}

function OnOff() {

    var myTable = document.getElementById('tbl');
    var mySwitch = document.getElementById('switch_on_off');

    if (mySwitch.style.color.match('green')) {
        myTable.style.display = 'none';
        mySwitch.style.color = 'red';
    }
    else {
        myTable.style.display = 'block';
        mySwitch.style.color = 'green';
    }
}

function notification() {
    var options = {
        dir: 'ltr',
        icon: 'content/imgs/photo.png',
        body: 'You are in Mozilla Browser!'
    }
    var myNotification = new Notification('My First CV', options);

    return myNotification;
}

function tagLinkCreation() {

    var mySelected = document.getElementById('mediaScreen');

    for (var i = 0; i < mySelected.length; i++) {

        var tagLink = document.createElement('link');
        tagLink.className = 'tagLink';
        tagLink.type = 'text/css';
        tagLink.rel = 'stylesheet';
        tagLink.href = 'content/styles/' + mySelected.options[i].value + '.css';

            if (mySelected.options[i].value.indexOf('print') > -1) {
                tagLink.media = 'print';
            }
            else {
                tagLink.media = mySelected.options[i].value;
            }
        document.getElementsByTagName('head')[0].appendChild(tagLink);
    }
}
function mediaToDefault() {

    var myLinkTags = document.getElementsByClassName('tagLink');
    var mySelected = document.getElementById('mediaScreen');

    for (var i = 0; i < myLinkTags.length; i++) {
        myLinkTag = myLinkTags[i];
        myLinkTag.setAttribute('media', 'default');
        mySelected.className = 'default';
    }
}
function mediaChange() {

    mediaToDefault();
    var myLinkTags = document.getElementsByClassName('tagLink');
    var mySelected = document.getElementById('mediaScreen');
    var mySelectedOpt = document.getElementById('mediaScreen').value;
    var myLink = document.getElementById('link');
    var myAudio = document.getElementById('audio');

    for (var i = 0; i < myLinkTags.length; i++) {
        var myLinkTag = myLinkTags[i];

        if (myLinkTag.getAttribute('href').indexOf(mySelectedOpt)>-1) {
            myLinkTag.setAttribute('media', 'screen');
            mySelected.className = mySelectedOpt;
            myLink.setAttribute('href', 'content/imgs/icos/' + mySelectedOpt + '.ico');
            myAudio.play();
        }
    }
}
window.onload = function () {

    tagLinkCreation();
    document.getElementById('mediaScreen').addEventListener('change', mediaChange);

    notification();

    //for acronym scroll possibility
    (function () {
        var acronyms = $('acronym');
        for (var i = 0; i < acronyms.length; i++) {
            acronyms[i].on('wheel', doHref);
        }
    })();

    function doHref() {
        open(this.attr('moniker-href'), '_blank');
        //open(this.attr('moniker-href'), '_blank');
    }

    ////for setting the horizontal line inside the checkbox
    (function () {
        var before_check = $('[type = checkbox]');
        for (var i = 0; i < before_check.length; i++) {
            before_check[i].indeterminate = true;
            //before_check[i].className = "initial";
        }
    })();

    (function () {
        var selects = $('select[name^=JSLibs]');
        //console.log(selects);
        for (var i = 0; i < selects.length; i++) {
            selects[i].html(TEMPLATE);
            //selects[i].html(TEMPLATE); //test
        }
    })();
    //for option titles scroll possibility
    (function () {
        var options = $('option');
        //console.log(options[0]);
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            //console.log(option);
            var val = option.html();
            //console.log(val);
            option.title = val;
        }
    })();

    //for optgroup titles scroll possibility
    (function () {
        var optgroups = $('optgroup');
        //console.log(optgroups);
        for (var i = 0; i < optgroups.length; i++) {
            var optgroup = optgroups[i];
            //console.log(optgroup);
            var val = optgroup.label;
            //console.log(val);
            optgroup.title = val;
        }
    })();



    $('surname').on('click', test);

    function test() {
        console.log(); 
        editData(this, this.attr('title'));
    }

}
    //$('td')[4].on('click', editData);
    //$('name').on('click', editData);

//    (function () {
//        var td_Elem = $('td');
//        for (var i = 0; i < td_Elem.length; i++) {
//            td_Elem[i].on('click', editData);
//        }
//        console.log(td_Elem[4]);
//    })();

//    //$('td')[0].on('click', doHref);


//
    //function check() {
    //    var checks = document.getElementsByTagName('input');
    //    for (var i = 0; i < checks.length; i++) {
    //        if (checks[i].type == 'checkbox' && checks[i].checked == true) {
    //            //checks[i].style.outlineColor = "#D8BFD8";
    //            checks[i].className= "checked";
    //        }
    //        if (checks[i].type == 'checkbox' && checks[i].checked == false && checks[i].indeterminate == false) {
    //            //checks[i].style.outlineColor = "#000000";
    //            checks[i].className = "unchecked";
    //        }
    //        else if (checks[i].type == 'checkbox' && checks[i].indeterminate == true) {
    //            //checks[i].style.outlineColor = "#CC1559";
    //            checks[i].className = "initial";
    //        }
    //    }
//}
//Experiments

//#region NEW METHOD CREATION FOR POINTS OBJECT
var points = [
{ x: 1, y: 1 },
{ x: 2, y: 2 }
];

points.dist = function () {
    var p1 = points[0];
    var p2 = points[1];
    var a = p2.x - p1.x
    var b = p2.y - p1.y
    return Math.sqrt(a * a + b * b);

}

//#endregion NEW METHOD CREATION FOR POINTS OBJECT

function moveon() {
    // Display a modal dialog to ask the user a question
    var answer = confirm("Ready to move on?");
    // If they clicked the "OK" button, make the browser load a new page
    if (answer) window.location = "http://google.com";
}
// Run the function defined above 1 minute (60,000 milliseconds) from now.
//setTimeout(moveon, 60000);

